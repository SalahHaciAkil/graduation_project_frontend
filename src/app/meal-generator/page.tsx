import { MealGeneratorView } from "@/app/meal-generator/(sections)";
import React from "react";

export const metadata = {
  title: "Meal Generator",
  description:
    "Easily generate delicious and nutritious meals with the Meal Generator. Take the guesswork out of meal planning and let our innovative tool create custom meal suggestions based on your preferences, dietary restrictions, and available ingredients. Whether you're looking for quick weekday dinners, healthy options, or exciting new recipes to try, the Meal Generator has you covered. Simplify your meal planning process and discover a world of culinary possibilities with just a few clicks. Start using the Meal Generator today and enjoy effortless meal planning at its best.",
};
function MealGenerator() {
  return <MealGeneratorView />;
}

export default MealGenerator;
