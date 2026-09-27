/**
 * Script to insert 3 freelance projects into Sanity via Mutations API.
 *
 * Usage:
 *   1. Get a Sanity API token with "Editor" role from:
 *      https://www.sanity.io/manage/personal/project/yedl08o1/api#tokens
 *   2. Run: $env:SANITY_TOKEN="sk...yourtoken"; node scripts/seed-freelance.mjs
 */

const TOKEN = process.env.SANITY_TOKEN;
const PROJECT_ID = "yedl08o1";
const DATASET = "production";
const API_VERSION = "2024-01-01";

if (!TOKEN) {
  console.error("❌  SANITY_TOKEN env var is missing.");
  console.error(
    '   Run: $env:SANITY_TOKEN="sk...your-token"; node scripts/seed-freelance.mjs',
  );
  process.exit(1);
}

const freelanceProjects = [
  {
    _id: "freelance-galaxy-gates",
    _type: "projects",
    title: "Galaxy Gates",
    slug: { _type: "slug", current: "galaxy-gates" },
    description:
      "A full e-learning platform for browsing and purchasing online courses, with authentication, course management, shopping and checkout flows, student course access, and an internal administration dashboard.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next-intl",
      "Redux",
      "React Query",
      "REST APIs",
    ],
    url: {
      _type: "object",
      demo: "https://galaxy-gates.tech/",
    },
    isFeatured: false,
    category: "freelance",
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "freelance-s7-legends",
    _type: "projects",
    title: "S7 Légendes",
    slug: { _type: "slug", current: "s7-legends" },
    description:
      "An e-commerce website for a French client to showcase and sell classic, vintage, and legendary football jerseys, with an internal dashboard for managing products and website data.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    url: {
      _type: "object",
      demo: "https://s7-legends.vercel.app/",
    },
    isFeatured: false,
    category: "freelance",
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
  {
    _id: "freelance-elkaed",
    _type: "projects",
    title: "Elkaed",
    slug: { _type: "slug", current: "elkaed" },
    description:
      "A technology store for showcasing and selling smartphones, laptops, tablets, smartwatches, audio devices, and accessories, with Supabase integration and an internal dashboard for managing products and content.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    url: {
      _type: "object",
      demo: "https://elkaed.vercel.app/",
    },
    isFeatured: false,
    category: "freelance",
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
  },
];

const mutations = freelanceProjects.map((doc) => ({
  createOrReplace: doc,
}));

const endpoint = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

const res = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
});

const result = await res.json();

if (res.ok) {
  console.log("✅  Freelance projects inserted successfully!");
  console.log(JSON.stringify(result, null, 2));
} else {
  console.error("❌  Sanity mutation failed:");
  console.error(JSON.stringify(result, null, 2));
}
