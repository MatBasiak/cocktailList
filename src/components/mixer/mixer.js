import React, { Component } from 'react';

import Button from '../button/button'
import IngredientsSelector from '../ingredients/ingredientsSelector';
import ListOfIngredients from '../ingredients/listOfIngredients';


class Mixer extends Component {
    constructor(props) {
        super(props)
      
      
        this.state = {
          startMixing: false
        }
      }
      mixer(){
        this.setState({
          startMixing:true
        })
        
      }   
    render() {
        return (
        <div>
        {this.state.startMixing && <ListOfIngredients/> }
        {!this.state.startMixing && <Button mixer={() => this.mixer()}>mixuj</Button>}
        {this.state.startMixing && <IngredientsSelector/>}
        </div >
            )
    }
}
export default Mixer