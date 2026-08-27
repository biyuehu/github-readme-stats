import { describe, expect, it } from "@jest/globals";
import {
  parseBoolean,
  parseArray,
  clampValue,
  lowercaseTrim,
  chunkArray,
  parseEmojis,
  dateDiff,
} from "../src/common/ops.js";

describe("Test ops.js", () => {
  it("parseBoolean", () => {
    expect(parseBoolean("true")).toBe(true);
    expect(parseBoolean("false")).toBe(false);
    expect(parseBoolean("TRUE")).toBe(true);
    expect(parseBoolean("1")).toBe(undefined);
    expect(parseBoolean(undefined)).toBe(undefined);
  });

  it("parseArray", () => {
    expect(parseArray("a,b,c")).toEqual(["a", "b", "c"]);
    expect(parseArray("")).toEqual([]);
    expect(parseArray(undefined)).toEqual([]);
  });

  it("clampValue", () => {
    expect(clampValue(5, 1, 10)).toBe(5);
    expect(clampValue(0, 1, 10)).toBe(1);
    expect(clampValue(15, 1, 10)).toBe(10);
    expect(clampValue("abc", 1, 10)).toBe(1);
  });

  it("lowercaseTrim", () => {
    expect(lowercaseTrim("  Hello World  ")).toBe("hello world");
  });

  it("chunkArray", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it("parseEmojis", () => {
    expect(parseEmojis("Hello :nonexistent:")).toBe("Hello ");
    const out = parseEmojis("I :heart: OSS");
    expect(out).not.toContain(":heart:");
    expect(() => parseEmojis("")).toThrow(/parseEmoji/);
  });

  it("dateDiff", () => {
    const a = new Date("2020-01-01T00:10:00Z");
    const b = new Date("2020-01-01T00:00:00Z");
    expect(dateDiff(a, b)).toBe(10);
  });
});
