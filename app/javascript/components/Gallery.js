import React from "react";
import PropTypes from "prop-types";

const api = "/api/v1/images"

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: [],
      status: "loading",
    };

    this.handlePage = this.handlePage.bind(this);

  }

  componentDidMount(){
    fetch(`${api}?page=1`,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));   //called after api call is completed
  }

  handlePage(page){
    this.setState({ status: "loading" });
    fetch(`${api}?page=${page}`,  {method:"GET"})
      .then(response => response.json())
      .then(data => this.setState({ apiResponse: data }))
      .then(result => this.onSetResult(result));   //called after api call is completed
  }

  onSetResult(){
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

  renderPageButton(page){
    return(
      <div
        className="col-1"
        onClick={() => this.handlePage(page)}
      >
        {page}
      </div>
    )
  }


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
              <h1 >Photo Gallery</h1>
            </div>
          </div>
          <div className="row mt-2">
            {this.renderImage()}
          </div>
          <div className="row mt-5 justify-content-center">
            {this.renderPageButton(1)}
            {this.renderPageButton(2)}
            {this.renderPageButton(3)}
          </div>
        </div>
      );
    }

  }
}

Gallery.propTypes = {
};

export default Gallery;
