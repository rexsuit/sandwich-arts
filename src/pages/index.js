import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap'
import { css } from 'emotion'

import Layout from '../components/layout'

const header = css`
  font-size: 24px;
  font-weight: bold;
`

const paragraph = css`
  margin-bottom: 36px;
`

// console.log('this.props.data.allFile.edges', props.data)
class IndexPage extends React.Component {
  render() {
    console.log('this.props.data', this.props.data)
    const thumbData = this.props.data
    // console.log('edges', edges)
    return (
      <Layout>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className={header}>Graphic Design Menu</h2>
              {/* <p className={paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sapiente iste quo corrupti quasi voluptates in nisi iusto itaque accusamus consectetur veritatis delectus distinctio magnam odit expedita quam, dolores suscipit?</p> */}
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/condo-concierge/">
                <img
                  src={thumbData.CondoConcierge.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/monster-factory/">
                <img
                  src={thumbData.MonsterFactory.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/lotus-herring/">
                <img
                  src={thumbData.LotusHerring.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/innofit/">
                <img
                  src={thumbData.Innofit.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/halseonne/">
                <img
                  src={thumbData.Halseonne.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/cumberland/">
                <img
                  src={thumbData.Cumberland.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/green-cities/">
                <img
                  src={thumbData.GreenCities.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
            <Col md={4} style={{ textAlign: 'center' }}>
              <Link to="/graphic-design/salt-wit/">
                <img
                  src={thumbData.SaltWit.childImageSharp.resolutions.src}
                  alt=""
                />
              </Link>
            </Col>
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    CondoConcierge: file(
      relativePath: { eq: "thumbnails/CondoConcierge.jpg" }
    ) {
      ...ThumbnailFragment
    }
    MonsterFactory: file(
      relativePath: { eq: "thumbnails/MonsterFactory.jpg" }
    ) {
      ...ThumbnailFragment
    }
    LotusHerring: file(relativePath: { eq: "thumbnails/LotusHerring.jpg" }) {
      ...ThumbnailFragment
    }
    Innofit: file(relativePath: { eq: "thumbnails/Innofit.jpg" }) {
      ...ThumbnailFragment
    }
    Halseonne: file(relativePath: { eq: "thumbnails/Halseonne.jpg" }) {
      ...ThumbnailFragment
    }
    Cumberland: file(relativePath: { eq: "thumbnails/Cumberland.jpg" }) {
      ...ThumbnailFragment
    }
    GreenCities: file(relativePath: { eq: "thumbnails/GreenCities.jpg" }) {
      ...ThumbnailFragment
    }
    SaltWit: file(relativePath: { eq: "thumbnails/SaltWit.jpg" }) {
      ...ThumbnailFragment
    }
  }
`

export const thumbnailFragment = graphql`
  fragment ThumbnailFragment on File {
    childImageSharp {
      resolutions(width: 360, quality: 90) {
        src
      }
    }
  }
`

export const blogImageFull = graphql`
  fragment BlogImageFull on File {
    childImageSharp {
      resolutions(width: 960, quality: 90) {
        src
      }
    }
  }
`
