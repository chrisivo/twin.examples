import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const prepForTWConfig = (str: string) =>
  str.replace(/['"]/g, '').replace(/[^a-zA-Z0-9]/g, '\\$&')

const prepArrayForTWConfig = (arr: string[]): string[] =>
  arr.map(str => prepForTWConfig(str))

export default {
  content: ['*'],
  theme: {
    fontFamily: {
      headingthree: prepArrayForTWConfig([
        'var(--font-heading)',
        ...defaultTheme.fontFamily.sans,
      ]),
    },
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
} satisfies Config
