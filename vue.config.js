const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "뷰스타그램",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOption: {
      exclude: [/\.map$/, /mainfest\.json$/, , "index.html"],
    },
  },
});
