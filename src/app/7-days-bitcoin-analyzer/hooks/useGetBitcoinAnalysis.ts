import { useAxios } from "@/hooks";
import React from "react";

function useGetBitcoinAnalysis() {
  const [result, setResult] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const axios = useAxios();

  const getResult = async ({ userQuery }: { userQuery: string }) => {
    try {
      setLoading(true);
      const data = await axios.get(
        `/openai/analyze-bitcoin/?query=${userQuery}`
      );
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

  return { getResult, result, loading };
}

export default useGetBitcoinAnalysis;
