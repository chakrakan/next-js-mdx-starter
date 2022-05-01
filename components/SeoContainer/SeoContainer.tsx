import { PropsWithChildren, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import socials from "../../.generated/meta/socialsTs";

type SeoContainerProps = PropsWithChildren<{
  title: string;
  description: string;
  url: string;
  publishedAt?: string;
}>;

export default function SeoContainer({
  children,
  title,
  description,
  url,
  publishedAt,
}: SeoContainerProps) {
  const router = useRouter();
  const date = useMemo(
    () =>
      publishedAt
        ? new Date(publishedAt).toISOString()
        : new Date().toISOString(),
    [publishedAt]
  );

  return (
    <>
      <Head>
        <title>{title}</title>

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={`${socials.home}${router.asPath}`} />

        {/* schema.org */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />

        {/*  Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />

        <meta property="og:image:alt" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devkanisk" />
        <meta name="twitter:creator" content="@devkanisk" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="article:published_time" content={date} />
        <meta property="article:section" content="Article Section" />
        <meta property="article:tag" content="Article Tag" />
      </Head>
      {children}
    </>
  );
}
