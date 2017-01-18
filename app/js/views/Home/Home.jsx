import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import css from '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import styles from './Home.css';

// export default class Home extends Component {
//   render() {
//     return (
//       <div className='home'>
//         <h3>Welcome to the home page.</h3>
//         <MyComponent />
//       </div>
//     );
//   }
// }
export default class MyComponent extends React.Component {

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
      <div>
      <ImageGallery
        items={ images }
        slideInterval={ 2000 }
        onImageLoad={ this.handleImageLoad }
        showBullets
        showFullscreenButton={ false }
      />
      </div>
    );
  }

}
