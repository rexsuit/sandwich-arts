import React from 'react'
// import { Link } from 'gatsby'
// import { Grid, Row, Col } from 'react-bootstrap';
// import { css } from 'emotion'

// import Layout from '../../components/layout'
import ProjectTemplate from '../../components/ProjectTemplate'

class InnofitPage extends React.Component {
  
  render() {
    // const { edges } = this.props.data.allFile
    return (
      <ProjectTemplate images={this.props.data.allFile.edges} />
    )
  }
}

export default InnofitPage

export const query = graphql`
  query InnofitQuery {
    allFile ( filter: { relativeDirectory: {regex: "\/Innofit/"}} ) {
      edges {
        node {
          ...BlogImageFull
        }
      }
    }
  }
`;