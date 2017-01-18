import React from 'react';

const Test = ({ myName }) => (
  <h1>{`This is the test page. Mr. ${myName}`}</h1>
);

Test.propTypes = {
  myName: React.PropTypes.string,
};

Test.defaultProps = {
  myName: "A name",
};

export default Test;
