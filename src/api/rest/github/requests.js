import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com",
});

export const makeRequest = ({
  url,
  method = "get",
  data = {},
  params = {},
  headers = {},
}) => client({ url, method, data, headers, params });
