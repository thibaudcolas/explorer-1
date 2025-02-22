import { IconCaretTemplate } from '../Icons/IconCaret'
import { IconNextTemplate } from '../Icons/IconNext'
import { IconPrevTemplate } from '../Icons/IconPrev'
import { IconSocialFacebookTemplate } from '../Icons/IconSocialFacebook'
import { IconSocialTwitterTemplate } from '../Icons/IconSocialTwitter'
import { IconSocialInstagramTemplate } from '../Icons/IconSocialInstagram'
import { IconSocialYoutubeTemplate } from '../Icons/IconSocialYoutube'
import { IconExpandTemplate } from '../Icons/IconExpand'
import { IconExternalTemplate } from '../Icons/IconExternal'

export const BaseButtonTemplate = ({
  label,
  ariaLabel,
  variant,
  link,
  caret,
  compact,
  disabled,
  icon,
  iconOnly,
  cssClass,
  fancybox,
  target,
}) => {
  if (iconOnly == undefined) iconOnly = false
  fancybox = fancybox ? fancybox : ''
  let iconTemplate = ''
  let computedClass = ''

  if (icon == 'next') iconTemplate = IconNextTemplate({})
  else if (icon == 'prev') iconTemplate = IconPrevTemplate({})
  else if (icon == 'expand') iconTemplate = IconExpandTemplate({})
  else if (icon == 'facebook') iconTemplate = IconSocialFacebookTemplate({})
  else if (icon == 'twitter') iconTemplate = IconSocialTwitterTemplate({})
  else if (icon == 'instagram') iconTemplate = IconSocialInstagramTemplate({})
  else if (icon == 'youtube') iconTemplate = IconSocialYoutubeTemplate({})
  else if (icon == 'external') iconTemplate = IconExternalTemplate({})
  else if (caret) iconTemplate = IconCaretTemplate({})

  // setup classnames
  if (variant == 'primary') computedClass = '-primary'
  else if (variant == 'secondary') computedClass = '-secondary'
  else if (variant == 'dark') computedClass = '-dark'
  else if (variant == 'social') computedClass = '-social'

  if (compact) computedClass += ' -compact'
  if (cssClass) computedClass += ' ' + cssClass
  if (iconOnly) {
    computedClass += ' -icon-only'
    ariaLabel ? (ariaLabel = ariaLabel) : (ariaLabel = label)
    label = ''
  }

  if (disabled) {
    return `
      <button 
        disabled="disabled"
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
      ariaLabel ? `aria-label="${ariaLabel}"` : ''
    }
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </button>
    `
  } else if (link) {
    return `
      <a 
        href="${link}" 
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
      target
        ? `
        target="${target}"`
        : ''
    } ${
      ariaLabel
        ? `
        aria-label="${ariaLabel}"`
        : ''
    }
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </a>
    `
  } else {
    return `
      <button 
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
      ariaLabel
        ? `
        aria-label="${ariaLabel}"`
        : ''
    } ${fancybox}
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </button>
    `
  }
}
