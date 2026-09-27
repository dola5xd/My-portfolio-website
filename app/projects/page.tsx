import { Metadata } from "next";
import { fetchProjectsFromSanity } from "@/lib/sanity";
import AllProjectsClient from "@/components/projects/AllProjectsClient";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Projects | Adel Yasser Portfolio",
  description:
    "Explore all projects and web applications created by Adel Yasser - Frontend Developer specialized in React, Next.js, and modern UI engineering.",
};

export const revalidate = 60; // Revalidate data every 60 seconds

export default async function ProjectsPage() {
  const projects = await fetchProjectsFromSanity();

  return (
    <main className="font-display relative min-h-screen">
      <Header alwaysVisible />
      <AllProjectsClient initialProjects={projects} />
    </main>
  );
}
