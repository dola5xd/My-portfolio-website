/**
 * Patch all projects that don't already have category="freelance"
 * to explicitly set category="personal".
 *
 * Run: $env:SANITY_TOKEN="sk..."; node scripts/patch-personal.mjs
 */

const TOKEN = process.env.SANITY_TOKEN;
const PROJECT_ID = "yedl08o1";
const DATASET = "production";
const API_VERSION = "2024-01-01";

if (!TOKEN) {
  console.error("❌  SANITY_TOKEN env var is missing.");
  process.exit(1);
}

// 1. Fetch all project IDs and their current category
const queryUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(
  '*[_type == "projects"] { _id, category }',
)}`;

const res = await fetch(queryUrl, {
  headers: { Authorization: `Bearer ${TOKEN}` },
});
const { result } = await res.json();

// 2. Filter to only projects that are NOT freelance (missing or not "freelance")
const toUpdate = result.filter((p) => p.category !== "freelance");
console.log(`Found ${toUpdate.length} project(s) to mark as "personal".`);

if (toUpdate.length === 0) {
  console.log("Nothing to do.");
  process.exit(0);
}

// 3. Build patch mutations
const mutations = toUpdate.map((p) => ({
  patch: {
    id: p._id,
    set: { category: "personal" },
  },
}));

// 4. Send in one request
const mutateUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;
const mutateRes = await fetch(mutateUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
});

const mutateResult = await mutateRes.json();

if (mutateRes.ok) {
  console.log(
    `✅  ${toUpdate.length} project(s) patched to category="personal".`,
  );
} else {
  console.error("❌  Sanity mutation failed:");
  console.error(JSON.stringify(mutateResult, null, 2));
}
