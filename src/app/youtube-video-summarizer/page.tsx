import { YoutubeVideoSummarizerView } from "@/app/youtube-video-summarizer/(sections)";
import React from "react";

// add SEO
export const metadata = {
  title: "YouTube Video Summarizer",
  description: "Summarize YouTube videos with ease.",
};
function YouTubeSummarizer() {
  return <YoutubeVideoSummarizerView />;
}

export default YouTubeSummarizer;
