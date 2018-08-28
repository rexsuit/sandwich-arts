import React from 'react'
import { Link, push } from 'gatsby'
import {Navbar, NavItem, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to='/'>Sandwich Arts</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <li role="resentation">
        <Link to="/">Graphic Design</Link>
      </li>
      <li role="resentation">
        <Link to="/animation-design">Animation Design</Link>
      </li>
      <li role="resentation">
        <Link to="/illustration">Illustration</Link>
      </li>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default Header
