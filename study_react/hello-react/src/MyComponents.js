import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      my new component, this is brand new {name} <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};


export default MyComponent;
