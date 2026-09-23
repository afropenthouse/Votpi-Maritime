import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default tseslint.config(
  { ignores: ["dist", ".output", ".next"] },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "Use Next.js server components or mark with 'use client' instead of importing server-only modules.",
            },
          ],
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
  eslintPluginPrettier,
);
