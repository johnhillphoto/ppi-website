import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Gallery from 'react-grid-gallery';
import { fileNames } from './fileNames.jsx';
import Nav from '../../components/Nav/Nav.jsx';

require("!style-loader!css-loader!sass-loader!./Gallery.scss");

export default class GalleryWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    let category = this.props.route.category;
    // filter down files to only match our category
    let fileNamesFiltered = fileNames.filter(name => {
      return name.category === category;
    });
    return (
      <div className='gallery'>
        <Nav category={category}/>
          <Gallery
            className='galleryMain'
            images={ fileNamesFiltered }
            enableImageSelection={ false }
            rowHeight={ 225 }
            />
      </div>
    );
  }

}
Gallery.defaultProps = {
  category: 'foodDrink',
}
Gallery.propTypes = {
  category: PropTypes.string,
}
