import { client } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityAssetDocument } from "@sanity/client";
const { projectId, dataset } = client.config();

export const urlFor = (source: SanityAssetDocument) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
