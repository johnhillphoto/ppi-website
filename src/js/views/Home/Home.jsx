import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav.jsx';
import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import {fileNames} from './fileNames.jsx';
const images = fileNames;
// import fileNamesTest from './fileNames.json';
// let fileNamesTestParsed = Hjson.parse(fileNamesTest);
// console.log(fileNamesTest);
// require("!style-loader!css-loader!sass-loader!./Home.scss");
require('./Home.scss');
require('../Gallery/imageGallery.scss');

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
      // browserHistory.push(`${item.destination}/true`);
      browserHistory.push({
        pathname: item.destination,
        state: { gridMode: false },
      });
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
    return (
      <div className="mainBox">
        <Nav category={ 'welcome' } />
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
