/**
 * Sanity Client Configuration & Helpers
 * Exclusively queries live projects from Sanity CMS
 */

export const SANITY_CONFIG = {
  projectId: "yedl08o1",
  dataset: "production",
  apiVersion: "2024-01-01",
};

export interface SanityProject {
  _id?: string;
  id?: string;
  title: string;
  slug?: { current: string } | string;
  image?: string | { asset?: { _ref?: string } };
  imageUrl?: string;
  stack?: string[];
  url?: {
    demo?: string;
    repo?: string;
  };
  description?: string;
  publishedAt?: string;
  isFeatured?: boolean;
  featured?: boolean;
  category?: "personal" | "freelance";
}

export interface RawSanityProject {
  _id?: string;
  id?: string;
  title: string;
  slug?: { current: string } | string;
  image?: string | { asset?: { _ref?: string } };
  stack?: string[];
  url?: {
    demo?: string;
    repo?: string;
  };
  description?: string;
  publishedAt?: string;
  isFeatured?: boolean;
  featured?: boolean;
  category?: "personal" | "freelance";
}

export type SanityImageSource =
  | string
  | {
      asset?: { _ref?: string };
      crop?: { top: number; bottom: number; left: number; right: number };
    };

export function sanityImageUrl(imageObj?: SanityImageSource): string {
  if (!imageObj) return "/fallback.jpg";
  if (typeof imageObj === "string") return imageObj;

  const assetRef = imageObj.asset?._ref;
  if (!assetRef) return "/fallback.jpg";

  // Format: image-<hash>-<width>x<height>-<format>
  const match = assetRef.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-([a-z0-9]+)$/);
  if (!match) return "/fallback.jpg";
  const [, hash, widthStr, heightStr, format] = match;

  let url = `https://cdn.sanity.io/images/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${hash}-${widthStr}x${heightStr}.${format}`;

  // If crop is applied in Sanity Studio, calculate exact rect crop coordinates
  if (imageObj.crop) {
    const origW = parseInt(widthStr, 10);
    const origH = parseInt(heightStr, 10);
    const crop = imageObj.crop;
    const left = Math.round((crop.left ?? 0) * origW);
    const top = Math.round((crop.top ?? 0) * origH);
    const width = Math.round(
      (1 - (crop.left ?? 0) - (crop.right ?? 0)) * origW,
    );
    const height = Math.round(
      (1 - (crop.top ?? 0) - (crop.bottom ?? 0)) * origH,
    );
    if (width > 0 && height > 0) {
      url += `?rect=${left},${top},${width},${height}&auto=format`;
    }
  }

  return url;
}

export function normalizeProject(raw: RawSanityProject): SanityProject {
  const imageUrl =
    typeof raw.image === "string"
      ? raw.image
      : raw.image
        ? sanityImageUrl(raw.image as SanityImageSource)
        : "/fallback.jpg";

  const resolvedId = raw._id || raw.id || "";

  return {
    ...raw,
    _id: resolvedId,
    id: resolvedId,
    imageUrl,
    image: imageUrl,
    isFeatured: Boolean(raw.isFeatured || raw.featured),
  };
}

/**
 * Fetch ALL projects live from Sanity
 */
export async function fetchProjectsFromSanity(): Promise<SanityProject[]> {
  const query = encodeURIComponent(
    '*[_type == "projects"] | order(publishedAt desc) {_id, title, slug, image, stack, url, description, publishedAt, isFeatured, featured, category}',
  );
  const endpoint = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(endpoint, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`Sanity HTTP ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();
    const list: RawSanityProject[] = data.result || [];
    return list.map(normalizeProject);
  } catch (err) {
    console.error("Failed to fetch all projects from Sanity:", err);
    return [];
  }
}

/**
 * Fetch FEATURED projects live from Sanity
 * Strictly filters by `isFeatured == true || featured == true` selected in Sanity Studio.
 */
export async function fetchFeaturedProjectsFromSanity(): Promise<
  SanityProject[]
> {
  const query = encodeURIComponent(
    '*[_type == "projects" && (isFeatured == true || featured == true)] | order(publishedAt desc) {_id, title, slug, image, stack, url, description, publishedAt, isFeatured, featured, category}',
  );
  const endpoint = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(endpoint, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`Sanity HTTP ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();
    const featuredList: RawSanityProject[] = data.result || [];
    return featuredList.map(normalizeProject);
  } catch (err) {
    console.error("Failed to fetch featured projects from Sanity:", err);
    return [];
  }
}
