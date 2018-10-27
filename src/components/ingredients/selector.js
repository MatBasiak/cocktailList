import React,{Component} from 'react'
import { firebaseDB,firebaseLooper,firebaseStrong,firebaseTaste} from "../../firebase/firebase"

import Options from './options'
import OptionsTaste from './optionsTaste'

class selector extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            ingredients: [1, 2, 3],
            choice: '',
            taste:'',

            options: false,
            optionSecond: false
            
        }
        firebaseStrong.once('value')
            .then((snapshot) => {
                const ingre = firebaseLooper(snapshot)
     
                this.setState({
                    ingredients: ingre,
                   
                    options: true,
                    
                })
            })
            .catch((e) => console.log(e));
    
        firebaseTaste.once('value')
            .then((snapshot) => {
                const taste = firebaseLooper(snapshot)

                this.setState({
                    taste: taste,
           
                    
            
                })
            })
            .catch((e) => console.log(e));
    }

    updateForm(newState){
        this.setState({
            formData: newState
        })
    }
    updateChoice(choosen) {
        this.setState({
            choice: choosen,
            optionSecond:true
        })
    }
    updateChoiceOf(choosenTaste) {
        this.setState({
            taste: choosenTaste,
           
        })
    }

render(){
    return (
        <div>
            
            {/* {console.log(this.state.ingredients)} */}
           { console.log(this.state.choice)}
            {/* {this.state.options && <FormFields data={this.state.ingredients} formData={this.state.formData}
             change={(newState)=> this.updateForm(newState)}/>} */}

            {this.state.options && <Options items={this.state.ingredients} data={(choosen => this.updateChoice(choosen))} />}
            {this.state.optionSecond && <OptionsTaste items={this.state.taste} data={(choosenTaste=>this.updateChoiceOfTaste(choosenTaste))}/>}
            
            
        </div>
    )
}

  
  
};

export default selector
