module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "json", "markup"],
        plugins: ["line-numbers", "normalize-whitespace"]
      }
    ]
  ]
};
