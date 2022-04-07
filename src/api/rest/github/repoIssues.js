import { makeRequest } from "/src/api/rest/github/requests";

export const getRepoIssues = (login, repoName, payload) =>
  makeRequest({
    url: `/repos/${login}/${repoName}/issues`,
    ...payload,
  });
