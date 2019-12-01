import React from "react";
import PropTypes from "prop-types";

class Gallery extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col ml-1">
            <h1 >Hello</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/323/400/200" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/1021/250/250" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/180/300/200" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/319/400/200" className="img-thumbnail" />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
          <div className="col">
            <img src="https://picsum.photos/id/256/100/100" className="img-thumbnail" />
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
};

export default Gallery;
