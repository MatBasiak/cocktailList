import React,{Component} from 'react'
import { firebaseDB, firebaseLooper, firebaseStrong, firebaseTaste } from "../../firebase/firebase"
import style from './selector.scss'

import Options from './options'
import OptionsTaste from './optionsTaste'
import ListOfCocktails from './listOfCocktails'

class selector extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            ingredients: [1, 2, 3],
            choice: '',
            taste: '',
            choiceTaste:'',

            options: false,
            optionSecond: false,
            option3:false
            
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
    updateChoiceOfTaste(choosenTaste) {
        this.setState({
            choiceTaste: choosenTaste,
            option3:true
           
        })
    }

render(){
    return (
        <div className={style.container}>
            
            {/* {console.log(this.state.ingredients)} */}
           
            {/* {this.state.options && <FormFields data={this.state.ingredients} formData={this.state.formData}
             change={(newState)=> this.updateForm(newState)}/>} */}

            <div className={style.option}>{this.state.options && <Options items={this.state.ingredients} data={(choosen => this.updateChoice(choosen))} />}
            {this.state.optionSecond && <OptionsTaste items={this.state.taste} data={(choosenTaste => this.updateChoiceOfTaste(choosenTaste))} />}</div>
            <div className={style.cocktailList} >{this.state.option3&&<ListOfCocktails data={this.state.choice} taste={this.state.choiceTaste} />}</div>

            
            
        </div>
    )
}

  
  
};

export default selector
