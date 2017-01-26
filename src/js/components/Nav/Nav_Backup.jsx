import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import classNames from 'classnames';

require('./Nav.scss');


export default class NavComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodDrink: false,
      product: false,
      other: false,
      about: false,
      contact: false,
    };

    this.state[this.props.category] = true;
  }

  _handleHover(hovered){
    const thing = {[hovered]: true}
    this.setState(thing);
  }
  _handleLeaveHover(hovered){
    if (hovered !== this.props.category) {
      const thing = { [hovered]: false };
      this.setState(thing);
    }
  }

  render() {
    const btnClassA = classNames({
      catButtons: true,
      hoveredTopButton: this.state.foodDrink,
    });
    const btnClassB = classNames({
      'catButtons': true,
      'hoveredTopButton': this.state.product,
    });
    const btnClassC = classNames({
      'catButtons': true,
      'hoveredTopButton': this.state.other,
    });
    const btnClassD = classNames({
      'catButtons': true,
      'catButtonsRight': true,
      'hoveredTopButton': this.state.about,
    });
    const btnClassE = classNames({
      'catButtons': true,
      'catButtonsRight': true,
      'hoveredTopButton': this.state.contact,
    });

    return (
        <Navbar
          collapseOnSelect
          className='navBox'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">P<span className='smaller'>roof </span>P<span className='smaller'>ositive </span>I<span className='smaller'>maging</span> <span className='smaller nocaps'>inc.</span></a>
            </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
                <Nav pullLeft>
                  <NavItem eventKey={1} href="#">Food & Drink</NavItem>
                  <NavItem eventKey={2} href="#">Product</NavItem>
                  <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Some Photos</MenuItem>
                    <MenuItem eventKey={3.2}>Some Photos 2</MenuItem>
                    <MenuItem eventKey={3.3}>Some Photos 3</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem className='catButtonsRight' eventKey={1} href="#">About</NavItem>
                  <NavItem className='catButtonsRight' eventKey={2} href="#">Contact</NavItem>
                </Nav>
          </Navbar.Collapse>

        </Navbar>
    );
  }

}
