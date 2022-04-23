import { makeRequest } from "/src/api/rest/github/requests";

export const getUser = (payload) =>
  makeRequest({
    url: "/user",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
    ...payload,
  });
