import { API_URL } from "@/helpers";
import { useAxios } from "@/hooks";
import React from "react";

function useGetUserFeeling() {
  const [result, setResult] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const axios = useAxios();

  const getResult = async ({
    emotions,
    prompt,
  }: {
    emotions: string;
    prompt: string;
  }) => {
    setLoading(true);
    try {
      const response = axios.get(
        `/openai/user-emotion/?emotions=${emotions}&prompt=${prompt}`
      );

      const data: any = await response;

      setResult(data.data);
    } catch (error: any) {
      if (error?.message.includes("client_error:")) {
        return alert(error.message.split("client_error:")[1]);
      }
      alert(error.response.data.error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { result, getResult, loading };
}

export default useGetUserFeeling;
