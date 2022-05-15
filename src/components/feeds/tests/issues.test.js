import repositoryIssues from "/src/components/feeds/repositoryIssues";
import { mount } from "@vue/test-utils";

it("Проверка совпадения количества issues на странице и в ответе сервера", async () => {
  const issues = [
    {
      user: { login: "Ilya" },
      body: "Issue 1",
      id: "issue_1",
    },
    {
      user: { login: "Kostya" },
      body: "Issue 2",
      id: "issue_2",
    },
    {
      user: { login: "Natasha" },
      body: "Issue 3",
      id: "issue_3",
    },
  ];

  const wrapper = mount(repositoryIssues, {
    props: {
      issues: issues,
    },
  });

  // Количество отображаемых элементов
  const shownElements = wrapper.findAll(".issueList > li").length;
  expect(shownElements).toBe(issues.length);
});
