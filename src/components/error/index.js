import { h } from 'preact'

export const Error = ({ error }) => (
  error ? <h2>{ error }</h2> : null
)

export default Error
