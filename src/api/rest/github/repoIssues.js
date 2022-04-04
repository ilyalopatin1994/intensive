import { makeRequest } from "@/api/requests";

export const getRepoIssues = (login, repoName, payload) =>
  makeRequest({
    url: `/repos/${login}/${repoName}/issues`,
    ...payload,
  });
