import { mount } from "@/../tests/utils/mountUtils";
import AddMovieForm from "@/components/forms/AddMovieForm.vue";
import { store } from "@/store";
import flushPromises from "flush-promises";
import { QBtn, QInput } from "quasar";
import { describe, expect, vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("AddMovieForm", () => {
  it("renders correctly", () => {
    const wrapper = mount(AddMovieForm);

    const inputs = wrapper.findAllComponents(QInput);
    expect(inputs[0]).not.toBeUndefined();
    expect(inputs[0].props().name).toEqual("movieTitle");
    expect(inputs[1]).not.toBeUndefined();
    expect(inputs[1].props().name).toEqual("movieReleaseYear");
    expect(inputs[2]).toBeUndefined();

    const buttons = wrapper.findAllComponents(QBtn);
    expect(buttons[0]).not.toBeUndefined();
    expect(buttons[0].attributes().name).toEqual("reset");
    expect(buttons[1]).not.toBeUndefined();
    expect(buttons[1].attributes().name).toEqual("submit");
    expect(buttons[2]).toBeUndefined();
  });

  it("does not dispatch if form is incomplete", () => {
    const wrapper = mount(AddMovieForm);

    const inputs = wrapper.findAllComponents(QInput);
    expect(inputs[0].exists()).toBe(true);
    inputs[0].setValue("The Dark Knight");

    const buttons = wrapper.findAllComponents(QBtn);
    expect(buttons[1].exists()).toBe(true);
    buttons[1].trigger("click");

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it("dispatch ADD_MOVIE with the expected movie", async () => {
    const wrapper = mount(AddMovieForm);

    const inputs = wrapper.findAllComponents(QInput);
    expect(inputs[0].exists()).toBe(true);
    inputs[0].setValue("The Dark Knight");
    expect(inputs[1].exists()).toBe(true);
    inputs[1].setValue("2008");

    const buttons = wrapper.findAllComponents(QBtn);
    expect(buttons[1].exists()).toBe(true);
    buttons[1].trigger("click");

    await flushPromises();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
