import React, { Component } from 'react';

class SearchSection extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      search: 0

    };
  }

  requestPhotos = () => {
//     if (this.state.input === this.state.newInput) {
// console.log("gfdgdfgfdh")
//       this.props.requestPhotos(this.state.input, true)
    // } else {
      if (this.state.search === 0) {
        this.props.requestPhotos(this.state.input, true)
        this.setState({
          search: this.state.search + 1
        }
          // , function () { console.log(this.state.search) }
        )
      } else { this.props.requestPhotos(null, false) }
      this.setState({
        newInput: this.state.input
      })
    }
  // }


  handleInput = e => this.setState({ input: e.target.value , search : 0})


  handleKeyDown = (e) => {
    if (e.keyCode === 13) {

      this.requestPhotos()
    }
    //  else { console.log('not enter') }
  }


  render() {
    return (
      <div id="outer-search" onKeyDown={this.handleKeyDown}>

        <div id="search-container">
          <input type="text" id="search" placeholder="search photos" value={this.state.input} onChange={this.handleInput} />
          <div id="search-btn" onClick={this.requestPhotos}>
            <i className="fas fa-search" onClick={this.requestPhotos} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSection;



