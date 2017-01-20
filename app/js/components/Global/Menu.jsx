import React from 'react';

const Test = ({ myName }) => (
  <h1>{`This is a test of things for Mr. ${myName}`}</h1>
);

Test.propTypes = {
  myName: React.PropTypes.string,
};

Test.defaultProps = {
  myName: "A name",
};

export default Test;
