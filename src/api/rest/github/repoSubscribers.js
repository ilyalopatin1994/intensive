import { makeRequest } from "/src/api/rest/github/requests";

export const getRepoSubscribers = (owner, repoName, payload) =>
  makeRequest({
    url: `/repos/${owner}/${repoName}/subscribers`,
    ...payload,
  });
