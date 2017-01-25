import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// var Hjson = require('hjson');

import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import {fileNames} from './fileNames.jsx';
const images = fileNames;
// import fileNamesTest from './fileNames.json';
// let fileNamesTestParsed = Hjson.parse(fileNamesTest);
// console.log(fileNamesTest);
// require("!style-loader!css-loader!sass-loader!./Home.scss");
require('./Home.scss');

import classNames from 'classnames';

export default class HomePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      foodDrink: false,
      product: false,
      other: false,
      about: false,
      contact: false,
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
          src={ item.original }
          alt={ item.originalAlt }
          srcSet={ item.srcSet }
          sizes={ item.sizes }
          onClick={ _onClick }
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
  _handleHover(incoming) {
    const thing = { [incoming]: true };
    this.setState(thing);
  }
  _handleLeaveHover(incoming) {
    const thing = { [incoming]: false };
    this.setState(thing);
  }

  render() {
    let btnClassA, btnClassB, btnClassC, btnClassD, btnClassE;
    btnClassA = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.foodDrink
    });
    btnClassB = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.product
    });
    btnClassC = classNames({
    'catButtons': true,
    'hoveredTopButton': this.state.other
    });
    btnClassD = classNames({
    'catButtons': true,
    'catButtonsRight': true,
    'hoveredTopButton': this.state.about
    });
    btnClassE = classNames({
    'catButtons': true,
    'catButtonsRight': true,
    'hoveredTopButton': this.state.contact
    });

    return (
      <div className="mainBox">
        <nav className="pt-navbar .modifier pt-fixed-top ">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"></div>
            <div className={btnClassA}
              onMouseEnter={ () => this._handleHover('foodDrink') }
              onMouseLeave={ () => this._handleLeaveHover('foodDrink') }
              >Food & Drink</div>
            <div className={ btnClassB }
                onMouseEnter={ () => this._handleHover('product') }
                onMouseLeave={ () => this._handleLeaveHover('product') }
                >Product</div>
              <div className={btnClassC}
                    onMouseEnter={ () => this._handleHover('other') }
                    onMouseLeave={ () => this._handleLeaveHover('other')}
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
