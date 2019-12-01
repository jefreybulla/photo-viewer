import React from "react";
import PropTypes from "prop-types";

class Gallery extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col ml-1">
            <h1 >Hello</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Col 1</h3>
          </div>
          <div className="col">
            <h3>Col 2</h3>
          </div>
          <div className="col">
            <h3>Col 3</h3>
          </div>
          <div className="col">
            <h3>Col 4</h3>
          </div>
          <div className="col">
            <h3>Col 5</h3>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
};

export default Gallery;
