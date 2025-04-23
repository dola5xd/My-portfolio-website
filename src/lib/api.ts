import { SanityDocument } from "@sanity/client";
import { client } from "./sanity";

const query = `*[_type == "projects"]| order(publishedAt desc) {_id,title,image,stack,url,description}`;

export const getProjects = async function () {
  const posts = await client.fetch<SanityDocument[]>(query, {});
  return posts;
};
