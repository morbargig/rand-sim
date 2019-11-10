import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
// import Masonry from 'react-masonry-component';
import Home from './components/Home';
import Photo from './components/Photo';
import route from './config/config';


// // masonryOptions is used by PhotoGallery class
// const masonryOptions = {
//   columnWidth: '.grid-sizer',
//   itemSelector: '.grid-item'
//   // fitWidth: true
//   // percentPosition: true
// };


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      page: 0,
      input: ''
    };
  }

  addPage =
    async (newSearch) => await newSearch ? this.setState({ page: 1 }) : this.setState({ page: ++this.state.page })

  // resetPage = async () => await this.setState({ page: 0 })

  requestPhotos =
      async (input, newSearch) => {
      console.log(input)
      console.log(newSearch)
      await this.addPage(newSearch)
      if (input) {
        await this.setState({ input , page : 1, images: []},
          
        )
      }
      // ,function() {
      // this.state.page === 1 ? this.state.page = 1 : this.state.page = 2
      console.log(this.state.page)
      const newImages = await axios.get(`${route}api/photos/search/${this.state.input}?page=${this.state.page}`)
      console.log(newImages)
      this.setState({ images: [...this.state.images, ...newImages.data] });
    }
  //  } 



  findPhoto = id => this.state.images.find(i => i.id === id);

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Home images={this.state.images} page={this.state.page} requestPhotos={this.requestPhotos} />} />
        <Route path="/image/:imageID" exact render={({ match }) => <Photo match={match} findPhoto={this.findPhoto} />} />
      </Router>
    );
  }
}

export default App;
