// useAxios
//  we need to set up a global axios instance that send always openai_api_key from the context api
import { useGlobalContext } from "@/Context";
import { API_URL } from "@/helpers";
import axios from "axios";

const useAxios = () => {
  const { openai_api_key } = useGlobalContext();
  const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "x-openai-api-key": openai_api_key,
    },
  });

  instance.interceptors.request.use((config) => {
    if (!openai_api_key) {

      throw new Error("client_error:openai_api_key is not set");
    }
    return config;
  });

  return instance;
};

export default useAxios;
