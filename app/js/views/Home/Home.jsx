import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

require("!style-loader!css-loader!sass-loader!./Home.scss");
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
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40118 Bottle & Horseshoe 0587.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40118 Bottle & Horseshoe 0587.jpg',
        destination: '/About',
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40122_Portfolio1892.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40122_Portfolio1892.jpg',
        destination: '/About',
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40121_Portfolio1663.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40121_Portfolio1663.jpg',
        destination: '/About',
      }
    ];
    let btnClassA, btnClassB, btnClassC;
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

    return (
      <div className="mainBox">
        <nav className="pt-navbar .modifier pt-fixed-top ">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"></div>
            <div className={btnClassA}
              onMouseEnter={() => this._handleHover('hoveredA')}
              onMouseLeave={() => this._handleLeaveHover('hoveredA')}
              ><button className="pt-button pt-minimal">Food & Drink</button></div>
            <div className={btnClassB}
                onMouseEnter={() => this._handleHover('hoveredB')}
                onMouseLeave={() => this._handleLeaveHover('hoveredB')}
                ><button className="pt-button pt-minimal">Product</button></div>
              <div className={btnClassC}
                    onMouseEnter={() => this._handleHover('hoveredC')}
                    onMouseLeave={() => this._handleLeaveHover('hoveredC')}
                    ><button className="pt-button pt-minimal">Other</button></div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button className="pt-button pt-minimal pt-icon-home">Home</button>
            <button className="pt-button pt-minimal pt-icon-document">Files</button>
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-user"></button>
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <button className="pt-button pt-minimal pt-icon-cog"></button>
          </div>
        </nav>
      <ImageGallery
        items={ images }
        slideInterval={ 2000 }
        onImageLoad={ this.handleImageLoad }
        showBullets
        showFullscreenButton={ false }
        showThumbnails={ false }
        renderItem={ this._renderItem }
      />
      </div>
    );
  }

}
