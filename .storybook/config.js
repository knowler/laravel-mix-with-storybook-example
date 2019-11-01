import { configure } from '@storybook/react';

configure(require.context('../resources', true, /\.stories\.(js|mdx)$/), module);
