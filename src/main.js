import { createSSRApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import uviewPlus from 'uview-plus'
// tt修改中1
export function createApp() {
	const app = createSSRApp(App);
  app.use(createPinia())
  app.use(uviewPlus)
  uni.$u.config.unit = 'rpx'
	return {
		app,
	};
}
