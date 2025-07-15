import Lara from '@primeuix/themes/lara';
import {definePreset} from "@primeuix/themes";

export const LaraSky = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },

    colorScheme: {
      light: {
        primary: {
          color: '{sky.500}',
          inverseColor: 'white',
          hoverColor: '{sky.600}',
          activeColor: '{sky.800}',
        },
        highlight: {
          background: '{sky.500}',
          focusBackground: '{sky.700}',
          color: 'white',
          focusColor: 'white'
        }
      },
      dark: {
        dialog: {
          root: {
            background: '{slate.950}',
            color: 'white'
          },
        },
        menubar: {
          item: {
            color: 'white'
          }
        },
        inputtext: {
          root: {
            background: 'black',
            color: 'white',
            borderColor: 'gray',
            hoverBorderColor: 'lightgray',
            focusBorderColor: 'white',
            focusRing: {
              shadow: '0 0 0 0.1rem white'
            },
          }
        },
        inputnumber: {
          root: {
            background: 'black',
            color: 'white',
            borderColor: 'gray',
            hoverBorderColor: 'lightgray',
            focusBorderColor: 'white',
            focusRing: {
              shadow: '0 0 0 0.1rem white'
            },
          }
        },
        textarea: {
          root: {
            background: 'black',
            color: 'white',
            borderColor: 'gray',
            hoverBorderColor: 'lightgray',
            focusBorderColor: 'white',
            focusRing: {
              shadow: '0 0 0 0.1rem white'
            },
          }
        },
        select: {
          root: {
            background: 'black',
            color: 'white',
            borderColor: 'gray',
            hoverBorderColor: 'lightgray',
            focusBorderColor: 'white',
            focusRing: {
              shadow: '0 0 0 0.1rem white'
            },
          }
        },
        floatlabel: {
          root: {
            color: 'gray',
            focusColor: 'white',
            activeColor: 'white',
          },
          on: {
            active: {
              background: 'black',
              color: 'white',
              focusColor: 'white',
              activeColor: 'white',
            }
          },
          // over: {
          //   active: {
          //     top: {
          //       color: 'white',
          //     }
          //   }
          // }
        },
        togglebutton: {
          root: {
            color: 'white',
            background: 'black',
            hoverColor: 'white',
            hoverBackground: '{gray.400}',
            checkedColor: 'black',
            checkedBackground: 'white'
          }
        },
        paginator: {
          root: {
            color: 'white',
            background: 'black',
          },
          currentPageReport: {
            color: 'white',
          },
          navButton: {
            selectedColor: 'black',
            selectedBackground: 'white',
          }
        },
        // button: {
        //   outlined: {
        //     primary: {
        //       color: 'red',
        //       borderColor: 'white',
        //       background: '{sky.800}',
        //       hoverBackground: '{sky.900}',
        //       activeBackground: 'black'
        //     }
        //   }
        // },
        primary: {
          color: 'white',
          borderColor: 'white',
          inverseColor: '{sky.950}',
          hoverColor: '{gray.300}',
          activeColor: '{sky.400}',
          // hoverBackground: '{sky.100}',
        },
        highlight: {
          background: 'black',
          focusBackground: '{sky.700}',
          color: 'white',
          focusColor: 'white'
        },
      }
    }

  }
});
