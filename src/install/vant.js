import { Button } from 'vant'

/**
 * @description : 按需引入Vant
 */
export default {
  install: (Vue, option) => {
    Vue.use(Button)
  },
}
