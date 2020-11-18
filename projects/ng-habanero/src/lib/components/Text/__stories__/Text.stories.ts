import { Story, Meta } from '@storybook/angular/types-6-0';
import colors from '../../../constants/colors';
import textVariants from '../../../constants/textVariants';
import {TextComponent} from '../index.component';

export default {
  title: 'Components/Text',
  component: TextComponent,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: textVariants,
      },
    },
  },
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  component: TextComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  color: 'black',
  colorIsBackground: false,
  variant: 'body-large',
};
