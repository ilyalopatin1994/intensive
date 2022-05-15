import issueToggler from "../issueToggler";
import { shallowMount } from "@vue/test-utils";

const mockFn = jest.fn(() =>
  Promise.resolve({
    name: "Hello",
  })
);

jest.mock("axios", () => ({
  get: mockFn,
}));

it("Тест изменения названия issueToggler", async () => {
  const values = ["Show Issues", "Hide issues"];
  const wrapper = shallowMount(issueToggler);
  const button = wrapper.find(".clicker");
  let currentValue = button.text();

  for (let i = 0; i < 3; i++) {
    await button.trigger("click");
    if (currentValue === values[0]) {
      expect(button.text()).toBe(values[1]);
      currentValue = values[1];
    } else {
      expect(button.text()).toBe(values[0]);
      currentValue = values[0];
    }
  }
});
