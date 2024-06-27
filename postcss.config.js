module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }), // Plugin pour la minification CSS
  ],
};
