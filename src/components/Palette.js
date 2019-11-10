import React, { Component } from 'react';
import Color from './Color';

class Palette extends Component {

    constructor() {
      super()
      this.state = {
        palette: []
      }
    }
  
    populatePalette = () => {
      const paletteKeys = Object.keys(this.props.palette)
  
      for (let key of paletteKeys) {
        this.state.palette.push(this.props.palette[key])
      }
    }
  
    render() {
  
      this.populatePalette()
  
      return (
        <div id="color-palette">
          {this.state.palette.map((p, i) => <Color key={i} rgb={p.rgb} />)}
        </div>
      )
    }
  }
    
export default Palette;

