import React from "react";
import PropTypes from "prop-types";

const api = "/api/v1/images"

class Gallery extends React.Component {
  //apiResponse maintains the results returned by the API
  constructor(props){
    super(props);
    this.state = {
      apiResponse: [],
      status: "loading",
      imageSize:[0.0],
    };
  }

  //Load page-one images when page is loaded
  componentDidMount(){
    fetch(`${api}?page=1`,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));   //called after api call is completed
  }

  //Method to handle a page request made by the user
  handlePage(page){
    this.setState({ status: "loading" });
    fetch(`${api}?page=${page}`,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));
  }

  sizeFilter(w,h){
    console.log(`this is sizeFilter w${w} h${h}`);
  }

  //Method called after api result is received
  onSetResult(){
    this.setState({ status: "ready" });
  }

  renderFilters(){
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Image size
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(0,0)}>Any size</span>
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(100,100)}>100x100</span>
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(250,250)}>250x250</span>
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(300,200)}>300x200</span>
        </div>
      </div>
    );
  }

  //Method to render image thumbnails
  renderImage(){
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

  //Method to render pagination links
  renderPageButton(){
    let items = [];
    for(let page=1;page<=this.state.apiResponse.totalPages;page++){
      items.push(
        <div className="col-1" onClick={() => this.handlePage(page)} key={page}>
          <span className="react-action">{page}</span>
        </div>
      );
    }
    return items;
  }

  //Method to render the output of this React component
  render () {
    if (this.state.status == "loading"){
      return (
        <div className="text-center mt-5">Loading images...</div>
      );
    }
    else{
      return (
        <div className="container">
          <div className="row">
            <div className="col ml-1">
              <h1>Photo Gallery</h1>
            </div>
          </div>
          <div className="row ml-1 mt-1">
            {this.renderFilters()}
          </div>
          <div className="row mt-3">
            {this.renderImage()}
          </div>
          <div className="row mt-5 justify-content-center">
            {this.renderPageButton()}
          </div>
        </div>
      );
    }
  }
}

Gallery.propTypes = {
};

export default Gallery;
