import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav.jsx';

require('./About.scss');

export default class About extends Component {
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

    return (
      <div className='aboutBoxOverall'>
        <Nav
          category={ 'about' }
          gridMode
        />
        <div className='aboutBox'>
          <div className='aboutPhotoBox'>
            <div className='aboutPhotoContent'>
            </div>
          </div>
          <div className='abouTextBox'>
            <img
              className="image1"
              src="https://s3.amazonaws.com/ppi-images/about/40118-Organic-Eggs-in-Bowl-0765.jpg"
            />
            <h2>About Jen Hill and John Hill</h2>

            <p>
              Jen Hill and John Hill have a shared life’s passion, photography.  Their enthusiasm drives them to create visually enticing imagery, and when the subject is food, viewers become ravenously hungry.  It’s a family business, although it didn’t start out that way.  Jen and John each had careers in photography before coming together as a couple.  In 2008, the Hills decided to join forces to form their business together, Proof Positive Imaging, Inc.  Working together has been more powerful than apart.  There’s an energy between the pair that can only be described as synergy.  Watching the two work is like watching seasoned dance partners.  There is little discussion about who does what.  Each one happily sets in motion to the task at hand.  Their individual natural talents and skills honed by experience mesh together to create something unique and beautiful.
            </p>
            <p>
              Anyone who meets Jen and John finds them to be friendly, professional, engaging, and tenaciously immersed in any project they take on.  Their all encompassing workflow guides a project through the first welcoming consultation, preparation, photography, detailed post-production, to final delivery of press or screen ready files and proofs.  To ensure quality, they even do their own expert retouching and color work.  They are satisfied only once the client is thrilled with the results.
            </p>
          <h3>Jen Hill</h3>
          <p>
            {`"My interest in food begins with the miracle of a tiny seed that has the potential to grow into something that is a big, beautiful, bountiful plant that provides nourishment.  I liken that to the tiny seed of an idea that begins in my imagination, becomes a meal and then finally, the realization of that idea in the form of a photograph.  Being conscious of where food comes from, how it grows, and how to make it into something delicious, fascinates me.  My intention is to share that passion with others through photography." ~ Jen Hill`}
          </p>
          <h3>John Hill</h3>
          <p>
            When asked to describe Jen, John says, {`"…Jen is a highly creative, amazing photographer.  She's a tenacious learner, a great cook, nurturing, and the most knowledgeable person I know on food and gardening.  She has a great visual design sense and an acute eye for color, that she applies not only to photography and printmaking, but furniture design as well.  I can tell she’s most happy when shooting, working in the garden, cooking, and sharing the knowledge of all her passions with others.  By the way, I steal all my good jokes from her."`}
          </p>
          <p>
            As far back as she can remember, Jen's had a camera in her hands.  As a teen she first learned black & white printing in a prominent forensic scientist’s lab, and she was officially hooked.  Jen studied Fine Art with a concentration in Photography at SUNY Purchase, where she refined her talent for design, color and composition.
          </p>
          <p>
            In addition to freelance assignments, Jens professional experience includes two full time in-house photographer positions, and an exclusive in-house management contract for a major food company.  These positions forged her experience in product, beverage, food, and luxury giftware photography.  While creating beautiful and impactful images, Jen also performed all aspects of managing the busy, high volume, digital studios with grace.  As well as photographer these positions allowed her to wear many hats including stylist, retoucher, photo studio personnel manager, photo and IT tech, color management tech, and digital asset management.
          </p>
          <p>
            Today Jen's extensive photographic experience combines with her knowledge and passion for food to create a powerful combination of creative visualizer with the ability to bring those ideas into actual gorgeous, delicious photographs.
          </p>
          </div>
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
