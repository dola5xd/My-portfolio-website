import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "yedl08o1",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
