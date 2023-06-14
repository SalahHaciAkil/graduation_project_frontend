import { useAxios } from "@/hooks";
import React from "react";

interface IGenerateMeal {
  ingredients: string;
  kcal: number;
  type_of_meal: string;
}
function useGenerateMeal() {
  const [result, setResult] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const axios = useAxios();
  const getResult = async ({
    ingredients,
    kcal,
    type_of_meal,
  }: IGenerateMeal) => {
    try {
      setLoading(true);
      const data = await axios.get(
        `/openai/generate-meal/?ingredients=${ingredients}&kcal=${kcal}&type_of_meal=${type_of_meal}`
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

export default useGenerateMeal;
