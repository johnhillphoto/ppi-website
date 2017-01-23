import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import Gallery from 'react-grid-gallery';
import { fileNames } from './fileNames.jsx';
import Nav from '../../components/Nav/Nav.jsx';

require("!style-loader!css-loader!sass-loader!./FoodDrink.scss");

export default class FooDrink extends Component {
  constructor (props) {
    super(props);

    this.state = {
    }
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
    const images2 = [
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
    const images =
  [{
          src: "https://s3.amazonaws.com/ppi-images/portfolio/400118 Portfolio 0957.jpg",
          thumbnail: "https://s3.amazonaws.com/ppi-images/portfolio/400118 Portfolio 0957.jpg",
          thumbnailHeight: 174,
          caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
          src: "https://s3.amazonaws.com/ppi-images/portfolio/40120 Wet Kale 1299.jpg",
          thumbnail: "https://s3.amazonaws.com/ppi-images/portfolio/40120 Wet Kale 1299.jpg",
          thumbnailHeight: 174,
          caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
          src: "https://s3.amazonaws.com/ppi-images/portfolio/40125+Greenwich+Bay+Shea+Butter+Spa+Soap+2351.jpg",
          thumbnail: "https://s3.amazonaws.com/ppi-images/portfolio/40125+Greenwich+Bay+Shea+Butter+Spa+Soap+2351.jpg",
          thumbnailHeight: 174
  }]
    // let btnClassA;
    // btnClassA = classNames({
    // 'catButtons': true,
    // 'hoveredTopButton': this.state.hoveredA
    // });
    return (
      <div className='foodDrink'>
        <Nav />
      </div>
    );
  }

}
