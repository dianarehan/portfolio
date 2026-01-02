import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: '.storybook/whiteD.png',
    brandTitle: 'Diana Rehan Components',
    brandUrl: 'https://dianarehan.github.io/portfolio',
  },
});
