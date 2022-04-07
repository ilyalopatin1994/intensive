import { makeRequest } from "/src/api/rest/github/requests";

export const getRepositories = (payload) =>
  makeRequest({
    url: "/search/repositories",
    ...payload,
  });
