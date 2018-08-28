import React from 'react'

import ProjectTemplate from '../../components/ProjectTemplate'

class CondoConcierge extends React.Component {
  
  render() {
    return (
      <ProjectTemplate images={this.props.data.allFile.edges} />
    )
  }
}

export default CondoConcierge

export const query = graphql`
  query CondoConciergeQuery {
    allFile ( filter: { relativeDirectory: {regex: "\/CondoConcierge/"}} ) {
      edges {
        node {
          ...BlogImageFull
        }
      }
    }
  }
`;