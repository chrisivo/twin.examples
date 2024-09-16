import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const prepForTWConfig = (str: string) =>
  str.replace(/['"]/g, '').replace(/[^a-zA-Z0-9]/g, '\\$&')

const prepArrayForTWConfig = (arr: string[]): string[] =>
  arr.map(str => prepForTWConfig(str))

console.log('font array is', defaultTheme.fontFamily.sans)

export default {
  content: ['*'],
  theme: {
    fontFamily: {
      yfromsingleunescaped: ['cursive'],
      yfromsinglevarunescaped: ['var(--font-heading)'],
      yfromsinglequotesunescaped: ['"Apple Color Emoji"'],
      yfromsinglevarescaped: [prepForTWConfig('var(--font-heading)')],
      yfromsinglequotesescaped: [prepForTWConfig('"Apple Color Emoji"')],
      yfromvarinarray: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
      yfromvarinescapedarray: prepArrayForTWConfig([
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
