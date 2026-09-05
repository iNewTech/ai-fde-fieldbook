import DefaultTheme from 'vitepress/theme';
import Roadmap from './components/Roadmap.vue';
import PracticeBank from './components/PracticeBank.vue';
import TopicSupport from './components/TopicSupport.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Roadmap', Roadmap);
    app.component('PracticeBank', PracticeBank);
    app.component('TopicSupport', TopicSupport);
  }
};
