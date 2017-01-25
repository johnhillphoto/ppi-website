import React, { Component } from 'react';
import { browserHistory } from 'react-router';

require('./Nav.scss');

import classNames from 'classnames';

export default class Nav extends Component {
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
      <div className="navBox">
        <nav className="pt-navbar .modifier pt-fixed-top ">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"></div>
            <div className={btnClassA}
              onMouseEnter={() => this._handleHover('foodDrink')}
              onMouseLeave={() => this._handleLeaveHover('foodDrink')}
              >Food & Drink</div>
            <div className={btnClassB}
                onMouseEnter={() => this._handleHover('product')}
                onMouseLeave={() => this._handleLeaveHover('product')}
                >Product</div>
              <div className={btnClassC}
                    onMouseEnter={() => this._handleHover('other')}
                    onMouseLeave={() => this._handleLeaveHover('other')}
                    >Other</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <div className={btnClassD}
                  onMouseEnter={() => this._handleHover('about')}
                  onMouseLeave={() => this._handleLeaveHover('about')}
                  >About</div>
            <span className="pt-navbar-divider"></span>
              <div className={btnClassE}
                    onMouseEnter={() => this._handleHover('contact')}
                    onMouseLeave={() => this._handleLeaveHover('contact')}
                    >Contact</div>
          </div>
        </nav>
      </div>
    );
  }

}
