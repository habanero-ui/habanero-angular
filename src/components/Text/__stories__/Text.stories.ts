import { Story, Meta } from '@storybook/angular/types-6-0'
import colors from '../../../constants/colors'
import textVariants from '../../../constants/textVariants'
import Text from '../index.component'

export default {
  title: 'Components/Text',
  component: Text,
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
} as Meta

const Template: Story<Text> = (args: Text) => ({
  component: Text,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  color: 'black',
  colorIsBackground: false,
  variant: 'body-large',
}
