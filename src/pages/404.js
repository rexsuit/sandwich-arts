import React from 'react'
import Layout from '../components/layout'
import { Grid, Row, Col } from 'react-bootstrap';
import { css } from 'emotion'

const NotFoundPage = () => (
  <Layout>
    <Grid className={css`padding-top:48px;`}>
      <Row>
        <Col xs={12} className={css`text-align: center;`}>
          <p>Well, looks like you've found it. The dreaded 404 error, aka the missing page. Fear not though. Whatever you've been looking for is likely on <a href="www.moonbeyond.com" target="_blank">www.moonbeyond.com</a></p>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default NotFoundPage
