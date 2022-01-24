import { FancyboxButtonTemplate } from './FancyboxButton.js'

export default {
  title: 'Components/Base/FancyboxButton',
  argTypes: {
    variant: {
      type: 'string',
      description: 'Button variant type',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark', 'social'],
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    fancyboxGallery: {
      type: 'string',
      description:
        'If you have several lightbox links on a page, give them matching `fancyboxGallery` names to group them into a gallery. Must be machine-readable (no spaces or special characters).',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Buttons that open an image lightbox. Explorer 1 <a href="https://fancyapps.com/docs/ui/fancybox">@fancyapp/ui\'s fancybox</a> for lightboxes. Any element can be converted to a modal or lightbox link by adding the necessary data attributes. `FancyboxButton` provides an example of how to create a button that opens an image in a lightbox.',
      },
    },
  },
}

export const ImageLightbox = FancyboxButtonTemplate.bind({})
ImageLightbox.args = {
  variant: 'primary',
  fancyboxGallery: null,
  image: {
    alt: 'Image alt text',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna.</p>',
    original: 'https://placekitten.com/869/700',
    src: {
      height: 700,
      url: 'https://placekitten.com/869/700',
      width: 869,
    },
  },
  icon: null,
  label: 'Open lightbox',
}
