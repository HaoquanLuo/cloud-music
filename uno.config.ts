import {
  defineConfig,
  presetMini,
  presetIcons,
  presetUno,
  presetAttributify,
  presetWebFonts,
} from 'unocss'

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
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
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
