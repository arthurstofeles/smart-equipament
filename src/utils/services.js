import { apiInstance } from "@/utils/api-instance";
import { ENDPOINTS } from "@/utils/constants";

export const sendContato = async (payload) => {
  const { data } = await apiInstance.post(ENDPOINTS.LEADS, payload);
  return data;
};
