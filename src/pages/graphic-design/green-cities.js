import React from 'react'
// import { Link } from 'gatsby'
// import { Grid, Row, Col } from 'react-bootstrap';
// import { css } from 'emotion'

// import Layout from '../../components/layout'
import ProjectTemplate from '../../components/ProjectTemplate'

class GreenCitiesPage extends React.Component {
  
  render() {
    // const { edges } = this.props.data.allFile
    return (
      <ProjectTemplate images={this.props.data.allFile.edges} />
    )
  }
}

export default GreenCitiesPage

export const query = graphql`
  query GreenCitiesQuery {
    allFile ( filter: { relativeDirectory: {regex: "\/GreenCities/"}} ) {
      edges {
        node {
          ...BlogImageFull
        }
      }
    }
  }
`;