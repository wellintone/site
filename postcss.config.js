module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          "autoprefixer",
          // restore the Next.js default behavior
          "postcss-flexbugs-fixes",
          [
            "postcss-preset-env",
            {
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
              features: {
                "custom-properties": false,
              },
            },
          ],
          [
            "@fullhuman/postcss-purgecss",
            {
              content: [
                "./src/app/**/*.{js,jsx,ts,tsx}",
                "./src/components/**/*.{js,jsx,ts,tsx}",
                "./src/animation/**/*.{js,jsx,ts,tsx}",
                "./src/app/globals.scss",
              ],

              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                standard: ["html", "body", "./src/app/globals.scss"],
              },
            },
          ],
        ]
      : [],
};
