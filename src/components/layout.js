import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap';
import { css } from 'emotion'

import Header from './header'
import './layout.css'

const headsUpBox = css`
  text-align: center;
  color: #ff4949;
  border: 2px solid currentColor;
  font-size: 18px;
  padding: 8px 4px;
  margin-bottom: 48px;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <Grid>
          <Row>
            <Col xs={12}>
              <div className={headsUpBox}>*This is a beta site for SANDWICH ARTS the kitchen is ready, the feast is here, the restaurant will be up soon</div>
            </Col>
          </Row>
        </Grid>
        
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
