import { Story, Meta } from '@storybook/angular/types-6-0'
import dividerThicknesses from '../../../constants/dividerThicknesses'
import Divider from '../index.component'

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    thickness: {
      control: {
        type: 'inline-radio',
        options: dividerThicknesses,
      },
    },
  },
} as Meta

const Template: Story<Divider> = (args: Divider) => ({
  component: Divider,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  thickness: 'regular',
}
