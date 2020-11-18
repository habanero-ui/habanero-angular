import { Story, Meta } from '@storybook/angular/types-6-0';
import dividerThicknesses from '../../../constants/dividerThicknesses';
import {DividerComponent} from '../index.component';

export default {
  title: 'Components/Divider',
  component: DividerComponent,
  argTypes: {
    thickness: {
      control: {
        type: 'inline-radio',
        options: dividerThicknesses,
      },
    },
  },
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  component: DividerComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  thickness: 'regular',
};
