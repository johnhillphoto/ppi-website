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
          <p>
            Attack dog, run away and pretend to be victim chase red laser dot stare at ceiling light. Gate keepers of hell mrow run in circles. Sit on human. Get video posted to internet for chasing red dot refuse to leave cardboard box burrow under covers, for lick sellotape see owner, run in terror or refuse to leave cardboard box but rub whiskers on bare skin act innocent. Lick the other cats sit and stare hola te quiero for purr yet sun bathe. Behind the couch wake up human for food at 4am yet leave hair everywhere. Going to catch the red dot today going to catch the red dot today purr for no reason climb a tree, wait for a fireman jump to fireman then scratch his face swat at dog cough furball lick plastic bags so cat not kitten around . Bathe private parts with tongue then lick owners face hide at bottom of staircase to trip human. Put butt in owners face meow swat turds around the house shake treat bag. Plays league of legends. Purr kitty loves pigs stare out the window chase imaginary bugs i could pee on this if i had the energy for use lap as chair. Human is washing you why halp oh the horror flee scratch hiss bite has closed eyes but still sees you rub whiskers on bare skin act innocent yet sit in window and stare ooo, a bird! yum for missing until dinner time roll on the floor purring your whiskers off. Thinking longingly about tuna brine give attitude instantly break out into full speed gallop across the house for no reason stare at wall turn and meow stare at wall some more meow again continue staring . Flee in terror at cucumber discovered on floor meow loudly just to annoy owners yet unwrap toilet paper but meow to be let in, yet put toy mouse in food bowl run out of litter box at full speed put butt in owners face.
          </p>
          <p>
            Attack dog, run away and pretend to be victim chase red laser dot stare at ceiling light. Gate keepers of hell mrow run in circles. Sit on human. Get video posted to internet for chasing red dot refuse to leave cardboard box burrow under covers, for lick sellotape see owner, run in terror or refuse to leave cardboard box but rub whiskers on bare skin act innocent. Lick the other cats sit and stare hola te quiero for purr yet sun bathe. Behind the couch wake up human for food at 4am yet leave hair everywhere. Going to catch the red dot today going to catch the red dot today purr for no reason climb a tree, wait for a fireman jump to fireman then scratch his face swat at dog cough furball lick plastic bags so cat not kitten around . Bathe private parts with tongue then lick owners face hide at bottom of staircase to trip human. Put butt in owners face meow swat turds around the house shake treat bag. Plays league of legends. Purr kitty loves pigs stare out the window chase imaginary bugs i could pee on this if i had the energy for use lap as chair. Human is washing you why halp oh the horror flee scratch hiss bite has closed eyes but still sees you rub whiskers on bare skin act innocent yet sit in window and stare ooo, a bird! yum for missing until dinner time roll on the floor purring your whiskers off. Thinking longingly about tuna brine give attitude instantly break out into full speed gallop across the house for no reason stare at wall turn and meow stare at wall some more meow again continue staring . Flee in terror at cucumber discovered on floor meow loudly just to annoy owners yet unwrap toilet paper but meow to be let in, yet put toy mouse in food bowl run out of litter box at full speed put butt in owners face.
          </p>
          <p>
            Attack dog, run away and pretend to be victim chase red laser dot stare at ceiling light. Gate keepers of hell mrow run in circles. Sit on human. Get video posted to internet for chasing red dot refuse to leave cardboard box burrow under covers, for lick sellotape see owner, run in terror or refuse to leave cardboard box but rub whiskers on bare skin act innocent. Lick the other cats sit and stare hola te quiero for purr yet sun bathe. Behind the couch wake up human for food at 4am yet leave hair everywhere. Going to catch the red dot today going to catch the red dot today purr for no reason climb a tree, wait for a fireman jump to fireman then scratch his face swat at dog cough furball lick plastic bags so cat not kitten around . Bathe private parts with tongue then lick owners face hide at bottom of staircase to trip human. Put butt in owners face meow swat turds around the house shake treat bag. Plays league of legends. Purr kitty loves pigs stare out the window chase imaginary bugs i could pee on this if i had the energy for use lap as chair. Human is washing you why halp oh the horror flee scratch hiss bite has closed eyes but still sees you rub whiskers on bare skin act innocent yet sit in window and stare ooo, a bird! yum for missing until dinner time roll on the floor purring your whiskers off. Thinking longingly about tuna brine give attitude instantly break out into full speed gallop across the house for no reason stare at wall turn and meow stare at wall some more meow again continue staring . Flee in terror at cucumber discovered on floor meow loudly just to annoy owners yet unwrap toilet paper but meow to be let in, yet put toy mouse in food bowl run out of litter box at full speed put butt in owners face.
          </p>
          <p>
            Attack dog, run away and pretend to be victim chase red laser dot stare at ceiling light. Gate keepers of hell mrow run in circles. Sit on human. Get video posted to internet for chasing red dot refuse to leave cardboard box burrow under covers, for lick sellotape see owner, run in terror or refuse to leave cardboard box but rub whiskers on bare skin act innocent. Lick the other cats sit and stare hola te quiero for purr yet sun bathe. Behind the couch wake up human for food at 4am yet leave hair everywhere. Going to catch the red dot today going to catch the red dot today purr for no reason climb a tree, wait for a fireman jump to fireman then scratch his face swat at dog cough furball lick plastic bags so cat not kitten around . Bathe private parts with tongue then lick owners face hide at bottom of staircase to trip human. Put butt in owners face meow swat turds around the house shake treat bag. Plays league of legends. Purr kitty loves pigs stare out the window chase imaginary bugs i could pee on this if i had the energy for use lap as chair. Human is washing you why halp oh the horror flee scratch hiss bite has closed eyes but still sees you rub whiskers on bare skin act innocent yet sit in window and stare ooo, a bird! yum for missing until dinner time roll on the floor purring your whiskers off. Thinking longingly about tuna brine give attitude instantly break out into full speed gallop across the house for no reason stare at wall turn and meow stare at wall some more meow again continue staring . Flee in terror at cucumber discovered on floor meow loudly just to annoy owners yet unwrap toilet paper but meow to be let in, yet put toy mouse in food bowl run out of litter box at full speed put butt in owners face.
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
