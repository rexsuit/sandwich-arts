import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap';
import { css } from 'emotion'

import Layout from '../components/layout'

const header = css`
  font-size: 24px;
  font-weight: bod;
`

const paragraph = css`
  margin-bottom: 36px;
`

// console.log('this.props.data.allFile.edges', props.data)
class IllustrationPage extends React.Component {
  
  render() {
    console.log('this.props.data', this.props.data)
    const thumbData = this.props.data
    // console.log('edges', edges)
    return (
      <Layout>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className={header}>Coming soon</h2>
              {/* <p className={paragraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sapiente iste quo corrupti quasi voluptates in nisi iusto itaque accusamus consectetur veritatis delectus distinctio magnam odit expedita quam, dolores suscipit?</p> */}
            </Col>
            {/* <Col md={4}><Link to="/graphic-design/condo-concierge/"><img src={thumbData.CondoConcierge.childImageSharp.resolutions.src} alt=""/></Link></Col> */}
            
              
          </Row>
        </Grid>
      </Layout>
    )
  }
}

export default IllustrationPage

// export const query = graphql`
//   query IllustrationQuery {
//     CondoConcierge: file( relativePath :{ eq: "thumbnails/CondoConcierge.jpg" } ) { ...ThumbnailFragment }
//     MonsterFactory: file( relativePath :{ eq: "thumbnails/MonsterFactory.jpg" } ) { ...ThumbnailFragment }
//     LotusHerring: file( relativePath :{ eq: "thumbnails/LotusHerring.jpg" } ) { ...ThumbnailFragment }
//     Innofit: file( relativePath :{ eq: "thumbnails/Innofit.jpg" } ) { ...ThumbnailFragment }
//     Halseonne: file( relativePath :{ eq: "thumbnails/Halseonne.jpg" } ) { ...ThumbnailFragment }
//     Cumberland: file( relativePath :{ eq: "thumbnails/Cumberland.jpg" } ) { ...ThumbnailFragment }
//     GreenCities: file( relativePath :{ eq: "thumbnails/GreenCities.jpg" } ) { ...ThumbnailFragment }
//     SaltWit: file( relativePath :{ eq: "thumbnails/SaltWit.jpg" } ) { ...ThumbnailFragment }
//   }
// `;