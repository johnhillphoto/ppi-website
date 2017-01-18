import React from 'react';
import Test from '../../components/global/Menu.jsx';
console.log(Test);


const About = () => {
    return (
        <div> 
        <h1>This is the about page.</h1>
         <Test myName='fuck' />
        </div>
    )
};

export default About;

// import React from ‘react’;

// const HelloWorld = ({name}) => (
//  <div>{`Hi ${name}`}</div>
// );

// export default HelloWorld;