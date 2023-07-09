import { ImageGeneratorView } from "@/app/image-generator/(sections)";
import React from "react";

export const metadata = {
  title: "Image Generator",
  description:
    "Effortlessly create stunning and unique images with the Image Generator. Whether you need eye-catching visuals for your website, blog, social media, or any other project, this powerful tool empowers you to generate custom images tailored to your needs. With a wide range of customizable options, including colors, styles, patterns, and layouts, the Image Generator sparks your creativity and saves you time. Say goodbye to stock photos and cookie-cutter designs - unleash your imagination and bring your ideas to life with the Image Generator today.",
};
function ImageGenerator() {
  return <ImageGeneratorView />;
}

export default ImageGenerator;
