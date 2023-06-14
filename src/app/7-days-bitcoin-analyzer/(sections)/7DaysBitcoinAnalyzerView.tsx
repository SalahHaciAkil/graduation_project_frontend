"use client";
import { useGetBitcoinAnalysis } from "@/app/7-days-bitcoin-analyzer/hooks";
import { Button, HeadTitle, Input, Textarea } from "@/components";
import React from "react";

function SevenDaysBitcoinAnalyzerView() {
  const { getResult, result, loading } = useGetBitcoinAnalysis();
  const [data, setData] = React.useState<string>("");
  return (
    <div className="flex flex-col items-center ">
      <HeadTitle text="7 Days Bitcoin Analyzer" style="m-auto" />
      <Input
        name="query"
        onChange={(e) => setData(e.target.value.trim())}
        placeHolder="Add anything you want to know about bitcoin in the past 7 days"
      />
      <Textarea
        placeholder={loading ? "consulting Ai..." : "..."}
        cols={30}
        rows={10}
        readOnly
        value={loading ? "" : result}
        style="w-2/3"
      />
      <Button
        style="mt-2"
        loading={loading}
        type="button"
        onClick={() =>
          getResult({
            userQuery: data,
          })
        }
      >
        Submit
      </Button>
    </div>
  );
}

export default SevenDaysBitcoinAnalyzerView;
