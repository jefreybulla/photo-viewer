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
      currentImageSize:[0,0],
    };
  }

  //Load page-one images when page is loaded
  componentDidMount(){
    let query = `${api}?page=1`;
    this.makeApiRequest(query);
  }

  //Method to handle a page request made by the user
  handlePage(page){
    this.setState({ status: "loading" });
    let query = (this.state.currentImageSize[0] == 0) ? `${api}?page=${page}` : `${api}?page=${page}&width=${this.state.currentImageSize[0]}&height=${this.state.currentImageSize[1]}`;
    this.makeApiRequest(query);
  }

  //Method to handle the size filter request made by the user
  sizeFilter(w,h){
    this.setState({ status: "loading", currentImageSize: [w,h] });
    let query = (w == 0) ? `${api}?page=page1` : `${api}?width=${w}&height=${h}&page=1`;
    this.makeApiRequest(query);
  }

  //Method to handle grayscal toggle
  handleSwitch(){
    //case for grayscale
    if (document.getElementById('customSwitch1').checked){
      console.log("call api for grayscale");
      let query = (this.state.currentImageSize[0] == 0) ? `${api}?page=${this.state.apiResponse.currentPage}&grayscale=true`:`${api}?page=${this.state.apiResponse.currentPage}&width=${this.state.currentImageSize[0]}&height=${this.state.currentImageSize[1]}&grayscale=true`;
      this.makeApiRequest(query);
    }
    //case for color
    else{
      let query = (this.state.currentImageSize[0] == 0) ? `${api}?page=${this.state.apiResponse.currentPage}`: `${api}?page=${this.state.apiResponse.currentPage}&width=${this.state.currentImageSize[0]}&height=${this.state.currentImageSize[1]}`;
      this.makeApiRequest(query);
    }
  }

  makeApiRequest(query){
    fetch(query,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));   //called after api call is completed
  }
  //Method called after api result is received
  onSetResult(){
    this.setState({ status: "ready" });
  }

  //method to render the filters dropdown menu
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
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(300,300)}>300x300</span>
          <span className="dropdown-item react-action" onClick={() => this.sizeFilter(400,200)}>400x200</span>
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
            <div className="col-3">
              {this.renderFilters()}
            </div>
            <div className="col-3">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={() => this.handleSwitch()} />
                <label className="custom-control-label" htmlFor="customSwitch1">Grayscale</label>
              </div>
            </div>
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
