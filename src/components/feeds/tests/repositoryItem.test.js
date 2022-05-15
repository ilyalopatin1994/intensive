import repositoryItem from "../repositoryItem";
import issueToggler from "../issueToggler";
import { mount } from "@vue/test-utils";
import { makeRequest } from "/src/api/rest/github/requests";

jest.mock("/src/api/rest/github/requests", () => {
  return {
    makeRequest: jest.fn(() => ({ data: { someData: "data" } })),
  };
});

let wrapper;

beforeEach(() => {
  wrapper = mount(repositoryItem, {
    props: {
      repo: {
        html_url: "www.github.com",
        owner: {
          avatar_url: "does not matter",
        },
      },
    },
  });
});

afterEach(() => {
  wrapper = null;
  makeRequest.mock.calls = [];
});

it("Проверка отправки запроса", async () => {
  await wrapper.findComponent(issueToggler).vm.$emit("changeDisplay");
  expect(makeRequest).toHaveBeenCalled();
});

it("Проверка, что запрос на issues отправляется только один раз", async () => {
  await wrapper.findComponent(issueToggler).vm.$emit("changeDisplay");
  // После нажатия кнопки должен поменяться issuesLoaded
  wrapper.setData({ issuesLoaded: true });
  await wrapper.findComponent(issueToggler).vm.$emit("changeDisplay");
  await wrapper.findComponent(issueToggler).vm.$emit("changeDisplay");

  expect(makeRequest.mock.calls.length).toBe(1);
});

it("Проверка совпадения количества issues на странице и в ответе сервера", async () => {
  await wrapper.findComponent(issueToggler).vm.$emit("changeDisplay");
  wrapper.find();
});
