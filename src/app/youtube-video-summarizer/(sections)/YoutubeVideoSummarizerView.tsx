"use client";
import { useGetYoutubeSummary } from "@/app/youtube-video-summarizer/hooks";
import { Button, HeadTitle, Input, Textarea } from "@/components";
import React from "react";
function YoutubeVideoSummarizerView() {
  const { result, getResult, loading } = useGetYoutubeSummary();
  const [data, setData] = React.useState<{ url: string }>({
    url: "",
  });

  const onDataChanged = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeadTitle text="YouTube Video Summarizer" style="m-auto" />
      <Input
        onChange={onDataChanged}
        placeHolder="Enter a Youtube Link Video"
        style="w-2/3"
        name="url"
        id="url"
      />

      <Textarea
        placeholder={loading ? "consulting Ai..." : "..."}
        cols={30}
        rows={10}
        readOnly
        value={result}
        style="w-2/3"
      />
      <Button
        style="mt-2"
        loading={loading}
        type="button"
        onClick={() => {
          getResult(data);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default YoutubeVideoSummarizerView;
