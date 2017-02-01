import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav.jsx';

require('./Contact.scss');

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridMode: this.props.location.state.gridMode || false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      gridMode: nextProps.location.state.gridMode,
      startIndex: nextProps.location.state.startIndex,
    });
  }


  render() {

    let that = this;
    // filter down files to only match our category

      return (
        <div>
          <Nav
            category={ 'about' }
            gridMode
          />
          <div className='aboutBox'>
            <h1>In about</h1>
          </div>
        </div>
      );
  }// end render
}// end component
// GalleryWrapper.defaultProps = {
//   category: 'foodDrink',
// };
// GalleryWrapper.propTypes = {
//   category: PropTypes.string,
//   location: PropTypes.object,
//   route: PropTypes.object,
// }
