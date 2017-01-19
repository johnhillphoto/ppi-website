import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
// import styles from './Home.css';
require("!style-loader!css-loader!sass-loader!./Home.scss");

import { Intent, Spinner, DatePickerFactory, Navar } from "@blueprintjs/core"

export default class HomePage extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40118 Bottle & Horseshoe 0587.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40118 Bottle & Horseshoe 0587.jpg',
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40122_Portfolio1892.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40122_Portfolio1892.jpg'
      },
      {
        original: 'https://s3.amazonaws.com/ppi-images/portfolio/40121_Portfolio1663.jpg',
        thumbnail: 'https://s3.amazonaws.com/ppi-images/portfolio/40121_Portfolio1663.jpg'
      }
    ]

    return (
      <div className="mainBox">
        <nav className="pt-navbar .modifier pt-fixed-top ">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Proof Positive Imaging</div>
            <input className="pt-input" placeholder="Search files..." type="text" />
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
        showThumbnails={ false}
      />
    <h3 className='scssTest'>This is a test of scss</h3>
      </div>
    );
  }

}
