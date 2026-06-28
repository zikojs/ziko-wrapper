// @ts-check
import { defineConfig } from 'astro/config';
import zikojs from "ziko-wrapper/astro"


// https://astro.build/config
export default defineConfig({
    integrations : [
        zikojs({
            // to use client:load
            // https://vite.dev/config/ssr-options#ssr-noexternal
            noExternal : ['zextra']
        }),
    ],
});
