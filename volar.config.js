module.exports = {
  plugins: [
    require("@volar-plugins/prettier")({
      languages: ["html", "css", "scss", "javascript", "typescript"],
      ignoreIdeOptions: true,
    }),
  ],
};
