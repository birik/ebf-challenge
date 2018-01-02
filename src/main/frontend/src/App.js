import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import HomePage from './components/HomePage';
import CompanyDetailPage from './components/CompanyDetailPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

class App extends React.Component {
  render() {

    return (
      <div>

        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">EBF Challenge</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <NavItem  eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem  eventKey={2}>About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/company/:companyId" exact component={CompanyDetailPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
