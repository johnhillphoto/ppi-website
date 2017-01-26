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
      gridMode: this.props.gridMode,
      welcome: false,
    };

    this.state[this.props.category] = true;
  }

  handleHover(hovered){
    const thing = {[hovered]: true}
    this.setState(thing);
  }
  handleLeaveHover(hovered){
    if (hovered !== this.props.category) {
      const thing = { [hovered]: false };
      this.setState(thing);
    }
  }
  handleGridClick() {
    this.setState({ gridMode: (!this.state.gridMode) });
    browserHistory.push({
      pathname: this.props.category,
      state: { gridMode: true },
    });

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
    const btnClassF = classNames({
      'catButtons': true,
      'catButtonsRight': true,
      'gridIcon': true,
      'hoveredTopButton': this.state.gridIcon,
      'hideGridIcon': this.state.gridMode,
    });
    let that = this;
    return (
      <Navbar
        collapseOnSelect
        className='navBox'>
        <Navbar.Header>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
              <Nav pullLeft>
                <NavItem
                  eventKey={1}
                  href='#'
                  className={btnClassA}
                  onMouseEnter={ () => this.handleHover('foodDrink') }
                  onMouseLeave={ () => this.handleLeaveHover('foodDrink') }
                  >Food & Drink</NavItem>
                <NavItem
                  eventKey={2}
                  href="#"
                  className={btnClassB}
                  onMouseEnter={ () => this.handleHover('product') }
                  onMouseLeave={ () => this.handleLeaveHover('product') }
                  >Product</NavItem>
                <NavDropdown
                  eventKey={3}
                  title="Other"
                  id="basic-nav-dropdown"
                  className={btnClassC}
                  onMouseEnter={ () => this.handleHover('other') }
                  onMouseLeave={ () => this.handleLeaveHover('other')}
                  >
                  <MenuItem eventKey={3.1}>Some Photos</MenuItem>
                  <MenuItem eventKey={3.2}>Some Photos 2</MenuItem>
                  <MenuItem eventKey={3.3}>Some Photos 3</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight className='rightButtonGroup'>
                <NavItem
                  eventKey={ 1 }
                  onClick={ () => {this.handleGridClick()} }
                  className={ btnClassF }
                  onMouseEnter={ () => this.handleHover('gridIcon') }
                  onMouseLeave={ () => this.handleLeaveHover('gridIcon') }
                  > </NavItem>
                <NavItem
                  eventKey={2}
                  href="#"
                  className={btnClassD}
                  onMouseEnter={() => this.handleHover('about')}
                  onMouseLeave={() => this.handleLeaveHover('about')}
                  >About</NavItem>
                <NavItem
                  eventKey={3}
                  href="#"
                  className={btnClassE}
                  onMouseEnter={() => this.handleHover('contact')}
                  onMouseLeave={() => this.handleLeaveHover('contact')}
                  >Contact</NavItem>
              </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }

}
