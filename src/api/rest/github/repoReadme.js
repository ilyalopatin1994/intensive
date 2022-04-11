import { makeRequest } from "/src/api/rest/github/requests";

export const getRepoReadme = (owner, repoName, payload) =>
  makeRequest({
    url: `/repos/${owner}/${repoName}/readme`,
    ...payload,
  });
