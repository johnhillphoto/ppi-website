import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import GridGallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import { fileNames } from './fileNames.jsx';
import Nav from '../../components/Nav/Nav.jsx';

require("!style-loader!css-loader!sass-loader!./Gallery.scss");

export default class GalleryWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridMode: this.props.location.state.gridMode,
    };
  }
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  _renderItem(item) {

    const _onClick = () => {
      console.log('I clicked this: ');
      // browserHistory.push(item.destination);
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
  onClickThumbnail (index, event) {
      event.preventDefault();
      console.log('index', index);
  }
  render() {
    let that = this;
    console.log('this.props.location.state.gridMode', this.props.location.state.gridMode);
    let category = this.props.route.category;
    // filter down files to only match our category
    let fileNamesFiltered = fileNames.filter(name => {
      return name.category === category;
    });
    if(this.props.location.state.gridMode === true) {
      return (
        <div className='gallery'>
          <Nav category={category}
            gridMode
            />
          <GridGallery
            className='galleryMain'
            images={ fileNamesFiltered }
            enableImageSelection={ false }
            rowHeight={ 225 }
            onClickThumbnail={ this.onClickThumbnail }
            />
        </div>
      );// end return
    }// end if
    else {
      return (
        <div className='gallery'>
          <Nav category={category}
            gridMode = { false }
            />
            <ImageGallery
              items={ fileNamesFiltered }
              autoPlay= { false }
              slideDuration={ 600 }
              slideInterval={ 4000 }
              onImageLoad={ that.handleImageLoad }
              showBullets= { false }
              showFullscreenButton={ true }
              showThumbnails={ false }
              renderItem={ this._renderItem }
              startIndex={ 1 }
            />
        </div>
      );// end return
    }// end else
  }// end render

}
GalleryWrapper.defaultProps = {
  category: 'foodDrink',
}
GalleryWrapper.propTypes = {
  category: PropTypes.string,
}
GridGallery.componentWillUnmount = function(){
  console.log('I unmounted');
}
