import { createApp } from 'vue';
import './styles/_text-styles.scss';
import './styles/_input-field.scss';
import './styles/_button-styles.scss';
import './styles/_style.scss';
import './styles/_mixins.scss'
import App from './App.vue';
import router from './router/index.ts';

createApp(App).use(router).mount('#app')
