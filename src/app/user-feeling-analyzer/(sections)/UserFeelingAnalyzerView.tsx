"use client";
import { useGetUserFeeling } from "@/app/user-feeling-analyzer/hooks";
import { Button, HeadTitle, Input } from "@/components";
import React from "react";

interface UserFeelingAnalyzerState {
  emotions: string;
  prompt: string;
}

const btnClass =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const btnClassLoading = btnClass + " cursor-not-allowed opacity-50";
function UserFeelingAnalyzer() {
  const { result, getResult, loading } = useGetUserFeeling();
  const [data, setData] = React.useState<UserFeelingAnalyzerState>({
    emotions: "",
    prompt: "",
  });

  const onDataChanged = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeadTitle text="Emotions Analyzer" style="m-auto" />

      <Input
        name="emotions"
        id="emotions"
        onChange={onDataChanged}
        placeHolder="Enter emotions separated by comma"
        style="w-2/3"
      />
      <Input
        name="prompt"
        id="prompt"
        onChange={onDataChanged}
        placeHolder="Enter user comment"
        style="w-2/3"
      />
      {/* read only */}

      <Input
        onChange={onDataChanged}
        placeHolder={loading ? "consulting Ai..." : "..."}
        value={result ? `${result}` : ""}
        style="w-2/3 text-primary-700"
        disabled={true}
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

export default UserFeelingAnalyzer;
