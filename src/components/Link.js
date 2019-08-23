import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = React.forwardRef(({ to, innerRef, ...props }, ref) => {
  const path = to
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  const mailTo = /^mailto/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)
  const ref2 = ref || innerRef

  // Use Gatsby Link for internal links, and <a> for others
  if (internal && !file) {
    return <GatsbyLink to={path} {...props} ref={ref2} />
  } else if (mailTo) {
    return <a href={to} {...props} ref={ref2} />
  } else {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        ref={ref2}
      />
    )
  }
})

export default Link
