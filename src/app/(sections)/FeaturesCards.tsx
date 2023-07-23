import Link from "next/link";
import React from "react";
import {
  YoutubeI,
  UserFeelingI,
  SearchI,
  MealI,
  BitcoinI,
  ImageI,
} from "@/assests/icons";
import Image from "next/image";
interface FeaturesCardProps {
  title: string;
  description: string;
  Icon: string;
  href?: string;
}

const cards: FeaturesCardProps[] = [
  {
    title: "YouTube Video Summarizer",
    description: `
    Summarize any youtube video by just entering the link, and wait for the magic to happen.
`,
    Icon: YoutubeI,
    href: `/youtube-video-summarizer`,
  },
  {
    title: "User Emotions Analysis",
    description: `
    Analyze the feeling of the user by just entering the text and the emotions you want, we will do the rest.
`,
    Icon: UserFeelingI,
    href: `/user-feeling-analyzer`,
  },
  {
    title: "Meal Planner",
    description: `
      You don't know what to eat? We got you covered. Just enter the ingredients you have and we will give you a recipe.
    `,
    Icon: MealI,
    href: `/meal-generator`,
  },
  {
    title: "7 Days Bitcoin Analyzer",
    description: `
    Analyze the bitcoin price for the past 7 days.
    `,

    Icon: BitcoinI,
    href: `/7-days-bitcoin-analyzer`,
  },
  {
    title: "Image Generator",
    // make the description a bit longer
    description: `
      Generate great images by just entering the text
    `,

    Icon: ImageI,
    href: `/image-generator`,
  },
];

function FeaturesCard({
  title,
  description,
  Icon,
  href,
}: FeaturesCardProps): JSX.Element {
  return (
    <Link href={`${href}`}>
      <div
        style={{ minHeight: "16rem" }}
        className="flex flex-col rounded-lg items-center justify-center p-4 m-4 bg-gradient-to-r w-96 max-sm:w-full h-full from-primary-800 to-primary-600 cursor-pointer hover:to-primary-400 shadow-2xl"
      >
        <Image width={50} height={50} alt="svg_icon" src={Icon}></Image>
        <h1 className="text-2xl font-semibold text-lime-50 mb-4">{title}</h1>
        <p className="text-lime-50">{description}</p>
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
              Icon={_.Icon}
              title={_.title}
              description={_.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default FeaturesCards;
