import { describe, expect, it } from "@jest/globals";
import { queryByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Card } from "../src/common/Card.js";
import { icons } from "../src/common/icons.js";
import { getCardColors } from "../src/common/color.js";

describe("Card", () => {
  it("should hide/show border", () => {
    const card = new Card({});
    card.setHideBorder(true);
    document.body.innerHTML = card.render(``);
    expect(queryByTestId(document.body, "card-bg")).toHaveAttribute(
      "stroke-opacity",
      "0",
    );

    card.setHideBorder(false);
    document.body.innerHTML = card.render(``);
    expect(queryByTestId(document.body, "card-bg")).toHaveAttribute(
      "stroke-opacity",
      "1",
    );
  });

  it("should render custom/default title", () => {
    const card = new Card({
      customTitle: "custom title",
      defaultTitle: "default title",
    });
    document.body.innerHTML = card.render(``);
    expect(queryByTestId(document.body, "card-title")).toHaveTextContent(
      "custom title",
    );
  });

  it("should hide title", () => {
    const card = new Card({});
    card.setHideTitle(true);
    document.body.innerHTML = card.render(``);
    expect(queryByTestId(document.body, "card-title")).toBeNull();
  });

  it("should have prefix icon", () => {
    const card = new Card({ title: "ok", titlePrefixIcon: icons.contribs });
    document.body.innerHTML = card.render(``);
    expect(document.getElementsByClassName("icon")[0]).toBeInTheDocument();
  });

  it("should render with correct dimensions", () => {
    const card = new Card({ height: 200, width: 200, title: "ok" });
    document.body.innerHTML = card.render(``);
    const svg = document.getElementsByTagName("svg")[0];
    expect(svg).toHaveAttribute("height", "200");
    expect(svg).toHaveAttribute("width", "200");
  });

  it("should render gradient backgrounds", () => {
    const { titleColor, textColor, iconColor, bgColor } = getCardColors({
      title_color: "f00",
      icon_color: "0f0",
      text_color: "00f",
      bg_color: "90,fff,000,f00",
      theme: "default",
    });

    const card = new Card({
      height: 200,
      colors: { titleColor, textColor, iconColor, bgColor },
    });
    document.body.innerHTML = card.render(``);
    expect(queryByTestId(document.body, "card-bg")).toHaveAttribute(
      "fill",
      "url(#gradient)",
    );
  });
});
