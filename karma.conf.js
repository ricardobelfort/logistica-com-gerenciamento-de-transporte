module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"], // Use the Jasmine framework
    files: [
      "src/**/*.spec.js", // Include all test files in the src directory
    ],
    reporters: ["progress"], // Print a progress bar to the console
  });
};
