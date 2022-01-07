import { NextSeo } from "next-seo";

export const SEOconfig = {
  url: process.env.NEXT_PUBLIC_CLIENT_URL,
  title: "iCare",
  description: "Join now to start sharing your connections today.",
  type: "website",
  image: "",
};

const SEO = ({ title, description, slug, type, openGraph, ...props }) => {
  const metaTitle = title ? `${SEOconfig.title} – ${title}` : SEOconfig.title;
  const metaDescription = description ?? SEOconfig.description;
  const metaURL = [SEOconfig.url, slug].filter(Boolean).join("");
  const metaType = type ?? SEOconfig.type;

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      type={metaType}
      facebook={{
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      }}
      openGraph={{
        type: metaType,
        url: metaURL,
        site_name: SEOconfig.title,
        title: title ?? SEOconfig.title,
        images: [
          {
            url: process.env.NEXT_PUBLIC_CLIENT_URL + "img/shoutmo.png",
            width: 1000,
            height: 300,
            alt: "Shoutmo image",
          },
        ],
        ...openGraph,
      }}
      {...props}
    />
  );
};

export default SEO;
