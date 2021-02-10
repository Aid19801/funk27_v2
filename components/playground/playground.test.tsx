import React from "react";
import { mount, shallow } from "enzyme";
import Playground from "./index";

describe("Playground", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<Playground name="foo" />);
  });

  it("should render without exploding...", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("should render with expected props", () => {
    expect(wrapper.props()).toEqual({ name: "foo" });
  });
  it("should render with expected child elements", () => {
    expect(wrapper.find(".playground__container").length).toBe(1);
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should ");
});
