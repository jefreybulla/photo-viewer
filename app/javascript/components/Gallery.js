import React from "react";
import PropTypes from "prop-types";

const api = "/api/v1/images?page=1"

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: [],
      status: "loading",
    };
  }

  componentDidMount(){
    fetch(api,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));   //called after api call is completed
  }

  onSetResult(){
    console.log("api call completed");
    console.log(this.state.apiResponse.images[0].url);
    this.setState({ status: "ready" });
  }

  renderImage(){
    let numberOfImages = 20
    let items = [];
    for(let i=0;i<=this.state.apiResponse.results-1;i++){
      items.push(
          <div className="col-3" key={i}>
            <img src={this.state.apiResponse.images[i].url} className="img-thumbnail" />
          </div>
      );
    }
    return items;
  }


  render () {
    if (this.state.status == "loading"){
      return (
        <div>Loading images...</div>
      );
    }
    else{
      return (
        <div className="container">
          <div className="row">
            <div className="col ml-1">
              <h1 >Photo Gallery</h1>
            </div>
          </div>
          <div className="row mt-2">
            {this.renderImage()}
          </div>
        </div>
      );
    }

  }
}

Gallery.propTypes = {
};

export default Gallery;
