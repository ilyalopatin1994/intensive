import { makeRequest } from "/src/api/rest/github/requests";

export const starRepository = (owner, repo, payload) =>
  makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
      accept: "application/vnd.github.v3.star+json",
    },
    ...payload,
  });
