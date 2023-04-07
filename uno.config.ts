import {
  defineConfig,
  presetMini,
  presetIcons,
  presetUno,
  presetAttributify,
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
    jb: 'justify-between',
    jc: 'justify-center',
    je: 'justify-evenly',
    ca: 'content-around',
    cb: 'content-between',
    cc: 'content-center',
    ce: 'content-evenly',
    ic: 'items-center',
    pic: 'place-items-center',
    active: 'before:content-empty before:absolute before:bg-red-600 before:rd',
    activeleft:
      'active bg-light bg-op-20 before:left-1 before:w-1 before:h-70% before:translate-y-20%',
    activebottom: 'active before:bottom-0 before:w-full before:h-0.75',
  },
})
