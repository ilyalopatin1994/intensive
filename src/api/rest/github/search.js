import { makeRequest } from "/src/api/rest/github/requests";

export const getRepositories = (payload) =>
  makeRequest({
    url: "/search/repositories",
    ...payload,
  });

export const getMyStarredRepositories = (payload) =>
  makeRequest({
    url: "/user/starred",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    ...payload,
  });

export const getMyRepositories = (payload) =>
  makeRequest({
    url: "/user/repos",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    ...payload,
  });
