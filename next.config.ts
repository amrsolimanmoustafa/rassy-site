import { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  // modularizeImports: {
  //   '@mui/icons-material': {
  //     transform: '@mui/icons-material/{{member}}',
  //   },
  //   '@mui/material': {
  //     transform: '@mui/material/{{member}}',
  //   },
  //   '@mui/lab': {
  //     transform: '@mui/lab/{{member}}',
  //   },
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};
export default nextConfig;
