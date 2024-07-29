runFormatTest(import.meta, ["babel"], {
  bracketSpacing: false,
  errors: {
    acorn: [
      "dynamic-import.js",
      "static-import.js",
      "re-export.js",
      "empty.js",
    ],
    espree: [
      "dynamic-import.js",
      "static-import.js",
      "re-export.js",
      "empty.js",
    ],
    meriyah: ["static-import.js", "re-export.js", "empty.js"],
  },
});
