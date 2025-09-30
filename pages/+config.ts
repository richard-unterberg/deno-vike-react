/// <reference types="vike/types" />
/// <reference types="vike-server" />

import vikeReact from 'vike-react/config'
import vikeServer from 'vike-server/config'
import type { Config } from 'vike/types'

export default {
  extends: [vikeServer as any, vikeReact],
  server: 'server/index.ts',
  prerender: {
    enable: true,
    keepDistServer: true,
  },
  passToClient: ['denoData'],
} satisfies Config