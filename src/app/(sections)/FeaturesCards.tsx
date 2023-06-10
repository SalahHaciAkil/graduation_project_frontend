import Link from "next/link";
import React from "react";

interface FeaturesCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

const cards: FeaturesCardProps[] = [
  {
    title: "Card-0",
    description: `
    Metadata helps search engines understand your content better (which can result in better SEO), and allows you to customize how your content is presented on
`,
    icon: "icon",
    href: `/youtube-video-summarizer`,
  },
  {
    title: "Card-0",
    description: `
    The Metadata API in Next.js allows you to modify the <head> element of a page. You can configure metadata in two ways
`,
    icon: "icon",
    href: `/`,
  },
  {
    title: "Card-0",
    description: `
    Additionally, you can create dynamic Open Graph Images using JSX and CSS with
`,
    icon: "icon",
    href: `/`,
  },
];

function FeaturesCard({
  title,
  description,
  icon,
  href,
}: FeaturesCardProps): JSX.Element {
  return (
    <Link href={`${href}`}>
      <div className="flex flex-col items-center justify-center p-4 m-4 bg-gradient-to-r w-96 h-48 from-blue-700 to-blue-600 cursor-pointer hover:to-blue-400">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="">{description}</p>
      </div>
    </Link>
  );
}

function FeaturesCards(): JSX.Element {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full mx-auto mt-20">
        {cards.map((_, index: number) => {
          return (
            <FeaturesCard
              key={index}
              href={_.href}
              icon={_.icon}
              title={`Card-${index}`}
              description={_.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default FeaturesCards;
