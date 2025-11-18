module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-tailwindcss"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "dollar-variables", "declarations"],
    "order/properties-alphabetical-order": true,
    "custom-property-pattern": null
  },
  ignoreFiles: ["dist/**/*", "node_modules/**/*"]
};
