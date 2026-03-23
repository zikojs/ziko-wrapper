import type { AstroIntegration } from "astro";

export interface ZikoOptions {
  plugins?: string[];
}

declare const astroZikojs: (options?: ZikoOptions) => AstroIntegration;

export default astroZikojs;