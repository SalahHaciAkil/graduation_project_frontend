"use client";
import { useGenerateImage } from "@/app/image-generator/hooks";
import { Button, HeadTitle, Input, Select } from "@/components";
import React from "react";
function ImageGeneratorView() {
  const [state, setState] = React.useState<{
    title: string;
    size: string;
  }>({
    title: "",
    size: "1024",
  });
  const { getResult, result, loading } = useGenerateImage();

  const downloadByUrl = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <HeadTitle text="Image Generator" style="m-auto" />
        <Input
          placeHolder="Describe you image"
          onChange={(e) => {
            setState({ ...state, title: e.target.value });
          }}
        />
        <Select
          defaultValue={state.size}
          style="w-2/3 mt-2"
          onChange={(e) => {
            console.log(e.target.value);
            console.log(state);

            setState({ ...state, size: e.target.value });
          }}
        >
          <Select.Option value="256">256×256</Select.Option>
          <Select.Option value="512">512×512</Select.Option>
          <Select.Option value="1024">1024×1024</Select.Option>
        </Select>
        {result && (
          <Button
            style="mt-4 animate-bounce w-2/3"
            onClick={() => result && downloadByUrl(result)}
          >
            Go To Download
          </Button>
        )}
        <div
          style={{
            width: state.size + "px",
            height: state.size + "px",
            backgroundImage: `url(${result})`,
          }}
          className="mt-4 bg-gray-200 rounded-lg bg-cover bg-center bg-no-repeat"
        />
        <Button loading={loading || !state.title} style="mt-4" onClick={() => getResult(state)}>
          Generate Image
        </Button>
      </div>
    </>
  );
}

export default ImageGeneratorView;
