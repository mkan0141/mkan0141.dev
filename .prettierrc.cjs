/** @type {import('prettier').Options} */
module.exports = {
  plugins: [require('prettier-plugin-astro'), require('prettier-plugin-tailwindcss')],
  singleQuote: true,
  printWidth: 100,
};
