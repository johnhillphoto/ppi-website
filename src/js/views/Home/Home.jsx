import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav.jsx';
import ImageGallery from 'react-image-gallery';
import classNames from 'classnames';
import reactCSS from 'reactcss';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { fileNames } from './fileNames';

require('./Home.scss');
require('../Gallery/imageGallery.scss');

const images = fileNames;


export default class HomePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      foodDrink: false,
      product: false,
      other: false,
      about: false,
      contact: false,
      portrait: false,
    }
  }
  // componentDidMount() {
  //   if (!window.matchMedia) return;
  //   let hello = window.matchMedia("(orientation: portrait)");
  //   this.setState(
  //     { portrait: hello.matches, }
  //   )
  //   console.log('hello', hello.matches)
  // }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  // below is custom code for how image gallery handles images
  _renderItem(item) {
    // console.log(this.state.portrait);
    // set up programatic creation of css class
    // if(this.state.portrait === false) {
    //   console.log('in here');
    //   item.shift = 0;
    // }
    const styles = reactCSS({
      'default': {
        left: {
          transform: `translate3d(-${item.shift}%, 0, 0)`,
        },
      },
    })

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
          style={ styles.left }
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
        <Nav
          category={ 'welcome' }
          gridMode
        />
      <ImageGallery
        items={ images }
        autoPlay= { true }
        slideDuration={ 600 }
        slideInterval={ 4000 }
        onImageLoad={ this.handleImageLoad }
        showBullets
        showFullscreenButton={ true }
        showThumbnails={ false }
        renderItem={ this._renderItem.bind(this) }
      />
      </div>
    );
  }

}
