import React from 'react'
import { Link } from 'gatsby'
import {Navbar,  Nav } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { css } from 'emotion'
import sandwichIcon from '../images/sandwich-icon.svg'

const listItem = css`
  margin: 0 15px
`

const tabLink = css`
  padding: 30px 0 !important;
  border-top: 3px solid transparent;
`

const activeLink = css`
  border-top-color: #333;
`



const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand className={css`display: flex; justify-content: center; align-items: center;`}>
      <Link to='/'>
        <div className="hidden-sm hidden-md hidden-lg">Sandwich Arts</div>
        <div className="hidden-xs">
          <img className={ css`width: 40px; margin-bottom: 0;`}  src={sandwichIcon} alt="" />
        </div>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <li className={listItem}>
        <Link className={tabLink} activeClassName={activeLink} to="">Graphic Design</Link>
      </li>
      <li className={listItem}>
        <Link className={tabLink} activeClassName={activeLink} to="animation-design">Animation Design</Link>
      </li>
      <li className={listItem}>
        <Link className={tabLink} activeClassName={activeLink} to="illustration">Illustration</Link>
      </li>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
