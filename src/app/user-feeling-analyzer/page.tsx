import { UserFeelingAnalyzerView } from "@/app/user-feeling-analyzer/(sections)";
import React from "react";

export const metadata = {
  title: "Emotion Analyzer",
  description:
    "Discover and understand the emotions behind text with the Emotion Analyzer. Analyze text inputs and gain insights into the underlying sentiment, mood, and tone. Whether you're analyzing social media posts, customer feedback, or any other textual data, this powerful tool provides valuable emotional intelligence to enhance your understanding and decision-making. Try the Emotion Analyzer today and unlock a new level of understanding in your text analysis endeavors.",
};
function UserFeelingAnalyzer() {
  return <UserFeelingAnalyzerView />;
}

export default UserFeelingAnalyzer;
