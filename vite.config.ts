import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    react(),
    ssr(),
  ],
};

export default config;
