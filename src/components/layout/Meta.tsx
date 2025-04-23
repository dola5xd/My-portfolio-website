// src/components/layout/Meta.tsx
import React from "react";
import { Helmet } from "react-helmet";

interface MetaProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}
const Meta: React.FC<MetaProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {ogImage && <meta name="twitter:image" content={ogImage} />}
  </Helmet>
);
export default Meta;
