import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import baseConfig from '@repo/tailwind-config/tailwind.config'
import nextUiConfig from '@repo/tailwind-config/nextui.config'

const config: Config = {
  content: [...baseConfig.content, '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  presets: [baseConfig],
  plugins: [nextui(nextUiConfig)]
}

export default config
