export const SITE_URL = "https://averracreations.com";
export const SITE_NAME = "AverraCreations";

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
};

export function buildSeo({ title, description, path = "/" }: SeoConfig) {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
