import React from 'react'
// import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap';
import { css } from 'emotion'

import Layout from '../components/layout'

class ProjectTemplate extends React.Component {
  
  render() {
    // console.log('this.props.data', this.props.data)
    const { images } = this.props;
    // console.log('edges', edges)
    return (
      <Layout>
        <Grid className={css`padding-top:48px;`}>
          <Row>
            { images.map((image, index) => (
            <Col xs={12} className={css`text-align: center;`}>
              <img key={index} src={image.node.childImageSharp.resolutions.src} alt=""/>
            </Col>
            ))}
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default ProjectTemplate