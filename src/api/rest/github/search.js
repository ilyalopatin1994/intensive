import { makeRequest } from "/src/api/requests";

export const getRepositories = (payload) =>
  makeRequest({
    url: "/search/repositories",
    ...payload,
  });
