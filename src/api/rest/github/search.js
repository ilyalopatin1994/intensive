import { makeRequest } from "@/api/requests";

export const getRepositories = (payload) =>
  makeRequest({
    url: "/search/repositories",
    ...payload,
  });
