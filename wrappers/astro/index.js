const astroZikojs = (options = {}) => {
  const noExternal = options.noExternal || []

  return {
    name: "astro-zikojs",

    hooks: {
      "astro:config:setup": async ({ addRenderer, updateConfig, config }) => {
        
        // 1. Register renderer
        addRenderer({
          name: "astro-zikojs",
          serverEntrypoint: "ziko-wrapper/astro/server",
          clientEntrypoint: "ziko-wrapper/astro/client",
        })

        // 2. Merge noExternal
        const existing = config.vite?.ssr?.noExternal || []

        if (noExternal.length) {
          updateConfig({
            vite: {
              ssr: {
                noExternal: [
                  ...new Set([...existing, ...noExternal])
                ]
              }
            }
          })
        }
      }
    }
  }
}

export default astroZikojs