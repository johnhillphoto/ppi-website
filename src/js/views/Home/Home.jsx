import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

// require("!style-loader!css-loader!sass-loader!./Home.scss");
require('./Home.scss');

import classNames from 'classnames';

export default class HomePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hoveredA: false,
      hoveredB: false,
      hoveredC: false
    }
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  _renderItem(item) {

    const _onClick = () => {
      console.log('I clicked this: ', item.destination);
      browserHistory.push(item.destination)
    }

      return (
        <div className='image-gallery-image'>
          <img
              src={item.original}
              alt={item.originalAlt}
              srcSet={item.srcSet}
              sizes={item.sizes}
              onClick={_onClick}
          />
          {
            item.description &&
              <span className='image-gallery-description'>
                {item.description}
              </span>
          }
        </div>
      )
  }
  _handleHover(incoming){
    let hovered = incoming;
    const thing = {[hovered]: true}
    this.setState(thing);
  }
  _handleLeaveHover(incoming){
    let hovered = incoming;
    const thing = {[hovered]: false}
    this.setState(thing);
  }

  render() {
    const images = [
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/400118 Portfolio 0957.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/400118 Portfolio 0957.jpg',
        destination: '/About',
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40120 Wet Kale 1299.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40120 Wet Kale 1299.jpg',
        destination: '/About',
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40125+Greenwich+Bay+Shea+Butter+Spa+Soap+2351.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40125+Greenwich+Bay+Shea+Butter+Spa+Soap+2351.jpg',
        destination: '/About',
      }
    ];
    let btnClassA, btnClassB, btnClassC, btnClassD, btnClassE;
    btnClassA = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.hoveredA
    });
    btnClassB = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.hoveredB
    });
    btnClassC = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.hoveredC
    });
    btnClassD = classNames({
    'catButtons': true,
    'catButtonsRight': true,
    'hoveredTopButton': this.state.hoveredD
    });
    btnClassE = classNames({
    'catButtons': true,
    'catButtonsRight': true,
    'hoveredTopButton': this.state.hoveredE
    });

    return (
      <div className="mainBox">
        <nav className="pt-navbar .modifier pt-fixed-top ">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"></div>
            <div className={btnClassA}
              onMouseEnter={() => this._handleHover('hoveredA')}
              onMouseLeave={() => this._handleLeaveHover('hoveredA')}
              >Food & Drink</div>
            <div className={btnClassB}
                onMouseEnter={() => this._handleHover('hoveredB')}
                onMouseLeave={() => this._handleLeaveHover('hoveredB')}
                >Product</div>
              <div className={btnClassC}
                    onMouseEnter={() => this._handleHover('hoveredC')}
                    onMouseLeave={() => this._handleLeaveHover('hoveredC')}
                    >Other</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <div className={btnClassD}
                  onMouseEnter={() => this._handleHover('hoveredD')}
                  onMouseLeave={() => this._handleLeaveHover('hoveredD')}
                  >About</div>
            <span className="pt-navbar-divider"></span>
              <div className={btnClassE}
                    onMouseEnter={() => this._handleHover('hoveredE')}
                    onMouseLeave={() => this._handleLeaveHover('hoveredE')}
                    >Contact</div>
          </div>
        </nav>
      <ImageGallery
        items={ images }
        autoPlay= { true }
        slideDuration={ 600 }
        slideInterval={ 4000 }
        onImageLoad={ this.handleImageLoad }
        showBullets
        showFullscreenButton={ true }
        showThumbnails={ false }
        renderItem={ this._renderItem }
      />
      </div>
    );
  }

}
