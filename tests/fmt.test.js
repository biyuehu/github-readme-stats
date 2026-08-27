import { describe, expect, it } from "@jest/globals";
import {
  formatBytes,
  kFormatter,
  wrapTextMultiline,
} from "../src/common/fmt.js";

describe("Test fmt.js", () => {
  it("kFormatter default", () => {
    expect(kFormatter(1)).toBe(1);
    expect(kFormatter(1000)).toBe("1k");
    expect(kFormatter(12345)).toBe("12.3k");
  });

  it("kFormatter with precision", () => {
    expect(kFormatter(500, 1)).toBe("0.5k");
    expect(kFormatter(12345, 2)).toBe("12.35k");
  });

  it("formatBytes", () => {
    expect(formatBytes(0)).toBe("0 B");
    expect(formatBytes(1024)).toBe("1.0 KB");
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
    expect(formatBytes(1234 * 1024)).toBe("1.2 MB");
  });

  it("wrapTextMultiline", () => {
    expect(wrapTextMultiline("Small text", 20, 3)).toEqual(["Small text"]);
    expect(wrapTextMultiline("Hello world long long long text", 10, 2)).toEqual(
      ["Hello", "world long..."],
    );
  });
});
