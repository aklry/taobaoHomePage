import {
  Button,
  Icon,
  Loading,
  Image,
} from 'vant';

const vantUIs = [Button, Icon, Loading, Image];

export default {
  install(Vue) {
    vantUIs.forEach((vantUI) => {
      Vue.component(vantUI.name, vantUI);
    });
  },
};
