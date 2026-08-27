import { getCardColors } from "../src/common/color";
import { describe, expect, it } from "@jest/globals";

describe("Test color.js", () => {
  it("should return expected values", () => {
    const colors = getCardColors({
      title_color: "f00",
      text_color: "0f0",
      ring_color: "0000ff",
      icon_color: "00f",
      bg_color: "fff",
      border_color: "fff",
      theme: "dark",
    });
    expect(colors).toStrictEqual({
      titleColor: "#f00",
      textColor: "#0f0",
      iconColor: "#00f",
      ringColor: "#0000ff",
      bgColor: "#fff",
      borderColor: "#fff",
    });
  });

  it("should fallback to default colors if invalid", () => {
    const colors = getCardColors({
      title_color: "invalidcolor",
      text_color: "0f0",
      theme: "dark",
    });
    expect(colors.titleColor).toBe("#2f80ed");
    expect(colors.textColor).toBe("#0f0");
  });

  it("should fallback to theme colors if not defined", () => {
    const colors = getCardColors({ theme: "dark" });
    expect(colors.titleColor).toBe("#fff");
    expect(colors.textColor).toBe("#9f9f9f");
    expect(colors.bgColor).toBe("#151515");
  });
});
