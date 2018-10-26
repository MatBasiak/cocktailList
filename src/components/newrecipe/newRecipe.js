import React,{Component} from 'react'
import FormFields from '../forms/forms'
import style from './newRecipe.scss'
import {firebaseDB} from "../../firebase/firebase"

class NewRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: {
                    element: "input",
                    value: "",
                    label: true,
                    labelText: "Alkohol",
                    config: {
                        name: 'name_input',
                        type: 'text',
                        placeholder: "Podaj nazwę podstawowego alkoholu"
                        
                    },
                
                    validation: {
                        required: false,
                        minLen: 1
                    },
                    valid: true,
                    touched: false,
                    validationMessage: 'dodaj Alko'
                },
                    
                image: {
                    element: "input",
                    value: "",
                    label: true,
                    labelText: "Adres Do zdjęcia",
                    config: {
                        name: 'url_input',
                        type: 'text',
                        placeholder: "Podaj adress URL do zdjęcia"
                            
                    },
                    validation: {
                        required: false,
                        minLen: 1
                    },
                    valid: true,
                    touched: false,
                    validationMessage: 'podaj adres'
                   
                },
                cokctail: {
                    element: "textarea",
                    value: "",
                    label: true,
                    labelText: "Dodatki",
                    config: {
                        name: 'message_input',
                        rows: 8,
                        cols: 36,
                        placeholder:'Wpisz dodatki do koktajlu'
                    }, validation: {
                        required: false,
                    },
                    valid: true
                   
                    
                }
            }
            
        }
        this.updateForm = this.updateForm.bind(this)
        this.submitForm= this.submitForm.bind(this)
    }
    
    
    updateForm(newState){
        this.setState({
            formData: newState
        })
        // console.log(this.state.formData)
        // console.log(this.state.formData.image.value)
        // console.log(this.state.formData.cokctail.value)
    }
    submitForm(event){
        event.preventDefault();

        let dataTosubmit = {};
        let formIsValid = true;

        for (let key in this.state.formData) {
            dataTosubmit[key]=this.state.formData[key].value
        }
        for (let key in this.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid
        }
        if (formIsValid) {
            
           
            firebaseDB.ref('coktails/vodkabase').push(dataTosubmit)
                .then(() => {
                console.log('new user added')
                }).catch(e=> console.log(e))
            
        }
            
        
   console.log(dataTosubmit)
}
    
    render() {
        

    
        return (
            
            <div className={style.container}>
            <form className={style.form}
                onSubmit={this.submitForm}
            >
                <FormFields
                   formData={this.state.formData}
                   onblur={(newState)=> this.updateForm(newState)}
                   change={(newState)=> this.updateForm(newState)}
                />


                <button type="submit" >Submit</button>
            </form>
            
                </div>
                
        )
    }
}

export default NewRecipe
