import axios from "axios";

const backendBaseURL = "https://smart-equipament.api.finxilabs.com/api/";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const apiInstance = axios.create({
  headers: headers,
  baseURL: backendBaseURL,
});
