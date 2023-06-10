import { TextAreaResult } from "@/app/youtube-video-summarizer/(sections)";
import { Input } from "@/components";
import React from "react";
function YouTubeSummarizer() {
  const result = "This is the result";
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Input style="w-2/3" />
      <TextAreaResult result={result} style="w-2/3" />
    </div>
  );
}

export default YouTubeSummarizer;
