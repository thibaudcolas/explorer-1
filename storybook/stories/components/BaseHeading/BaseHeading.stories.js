import { BaseHeadingTemplate } from './BaseHeading'

export default {
  title: 'Components/Base/BaseHeading',
  argTypes: {
    text: {
      type: 'string',
    },
    size: {
      type: { name: 'string', required: true },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
    tag: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Base component for headings. Allows for different sizes with html tags for semantic markup.',
      },
    },
  },
}

export const H1 = BaseHeadingTemplate.bind({})
H1.args = { text: 'Heading 1', size: 'h1', tag: 'h1' }

export const H2 = BaseHeadingTemplate.bind({})
H2.args = { text: 'Heading 2', size: 'h2', tag: 'h2' }

export const H3 = BaseHeadingTemplate.bind({})
H3.args = { text: 'Heading 3', size: 'h3', tag: 'h3' }

export const H4 = BaseHeadingTemplate.bind({})
H4.args = { text: 'Heading 4', size: 'h4', tag: 'h4' }

export const H5 = BaseHeadingTemplate.bind({})
H5.args = { text: 'Heading 5', size: 'h5', tag: 'h5' }
