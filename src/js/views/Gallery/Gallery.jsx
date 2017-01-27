import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import GridGallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import { fileNames } from './fileNames';
import Nav from '../../components/Nav/Nav.jsx';

require("!style-loader!css-loader!sass-loader!./Gallery.scss");

export default class GalleryWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridMode: this.props.location.state.gridMode || false,
      startIndex: this.props.location.state.startIndex,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      gridMode: nextProps.location.state.gridMode,
      startIndex: nextProps.location.state.startIndex,
    });
  }
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
// below is used when clicking a large gallery image
  renderItem(item) {
    const onClick = () => {
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
          onClick={ onClick }
        />
        {
          item.description &&
            <span className='image-gallery-description'>
              {item.description}
            </span>
        }
      </div>
    )
  }// end _renderItem

  render() {
    // below handles the event when a thumbnail is clicked in the grid gallery
    const onClickThumbnail = (index, event) => {
      event.preventDefault();
      console.log('index', index);
      browserHistory.push({
        pathname: this.props.route.category,
        state: {
          gridMode: false,
          startIndex: index,
        },
      });
    }

    let that = this;
    let category = this.props.route.category;
    // filter down files to only match our category
    let fileNamesFiltered = fileNames.filter(name => {
      return name.category === category;
    });
    if (this.props.location.state.gridMode === true) {
      return (
        <div className='gallery'>
          <Nav
            category={ category }
            gridMode
          />
          <GridGallery
            className='galleryMain'
            images={ fileNamesFiltered }
            enableImageSelection={ false }
            rowHeight={ 225 }
            onClickThumbnail={ onClickThumbnail }
          />
        </div>
      );// end return
    }// end if
    else {
      return (
        <div className='gallery'>
          <Nav
            category={ category }
            gridMode={ false }
          />
          <ImageGallery
            items={ fileNamesFiltered }
            autoPlay={ false }
            slideDuration={ 600 }
            slideInterval={ 4000 }
            onImageLoad={ that.handleImageLoad }
            showBullets={ false }
            showFullscreenButton
            showThumbnails={ false }
            renderItem={ this.renderItem }
            startIndex={ this.state.startIndex }
          />
        </div>
      );// end return
    }// end else
  }// end render
}
GalleryWrapper.defaultProps = {
  category: 'foodDrink',
};
GalleryWrapper.propTypes = {
  category: PropTypes.string,
  location: PropTypes.object,
  route: PropTypes.object,
}
