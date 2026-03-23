import type { AstroIntegration } from "astro";

export interface ZikoOptions {
  noExternal?: string[];
}

declare const astroZikojs: (options?: ZikoOptions) => AstroIntegration;

export default astroZikojs;