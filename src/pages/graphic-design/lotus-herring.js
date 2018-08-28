import React from 'react'
// import { Link } from 'gatsby'
// import { Grid, Row, Col } from 'react-bootstrap';
// import { css } from 'emotion'

// import Layout from '../../components/layout'
import ProjectTemplate from '../../components/ProjectTemplate'

class LotusHerringPage extends React.Component {
  
  render() {
    // const { edges } = this.props.data.allFile
    return (
      <ProjectTemplate images={this.props.data.allFile.edges} />
    )
  }
}

export default LotusHerringPage

export const query = graphql`
  query LotusHerringQuery {
    allFile ( filter: { relativeDirectory: {regex: "\/LotusHerring/"}} ) {
      edges {
        node {
          ...BlogImageFull
        }
      }
    }
  }
`;