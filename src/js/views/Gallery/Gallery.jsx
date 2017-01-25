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
    return (
      <div className='gallery'>
        <Nav category={this.props.category}/>
        <h3>{`We are inside ${this.props.category}`}</h3>
          <Gallery
            images={ fileNames }
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
