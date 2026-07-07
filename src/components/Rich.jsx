// Renders trusted inline HTML (author-controlled content strings that carry
// <strong>/<span> markup). Not user input — safe to inject.
export default function Rich({ html, as: Tag = 'span', ...rest }) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}
