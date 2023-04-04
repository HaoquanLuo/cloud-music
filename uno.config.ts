import { defineConfig, presetMini } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        margin: '5px',
      },
    }),
    presetMini({
      dark: 'class',
    }),
    presetUno(),
    presetAttributify(),
  ],
  transformers: [transformerAttributifyJsx()],
  rules: [
    [
      /**
       * match: [ 'w-half', 'w', index: 0, input: 'w-half', groups: undefined ]
       */
      /^([wh])-half$/,
      (match) => {
        switch (match[1]) {
          case 'w': {
            return {
              width: '50%',
            }
          }
          case 'h': {
            return {
              height: '50%',
            }
          }

          default:
            break
        }
      },
    ],
  ],
  shortcuts: {
    full: 'w-full h-full',
    ja: 'justify-around',
    jc: 'justify-center',
    je: 'justify-evenly',
    ia: 'items-around',
    ic: 'items-center',
    ie: 'items-evenly',
  },
})
