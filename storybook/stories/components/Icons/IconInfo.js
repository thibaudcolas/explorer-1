export const IconInfoTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
  <svg
    class="IconInfo ${customClass}"
    width="10"
    height="22"
    viewBox="0 0 10 22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7 8v12h3v2H0v-2h3V10H0V8h7zM5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
      fill="currentColor"
    />
  </svg>
  `
}
