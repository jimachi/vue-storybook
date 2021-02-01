import OriginalButton from '../components/OriginalButton'

export default {
  title: 'OriginalButton',
  component: OriginalButton
}

export const Default = () => ({
  components: { OriginalButton },
  template: '<original-button />'
})

export const Info = () => ({
  components: { OriginalButton },
  template: '<original-button type="info">Info</original-button>'
})

export const Warn = () => ({
  components: { OriginalButton },
  template: '<original-button type="warn"></original-button>'
})

export const Error = () => ({
  components: { OriginalButton },
  template: '<original-button type="error"></original-button>'
})
