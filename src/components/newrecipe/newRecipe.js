import React,{Component} from 'react'
import FormFields from '../forms/forms'
import style from './newRecipe.scss'
import { firebaseDB, firebaseTaste,firebaseStrong,firebaseLooper,firebaseCocktailsVodka, firebaseCocktailsRum, firebaseCocktailsGin, firebaseCocktailsWhisky, firebaseCocktailsTequilla, firebaseCocktailsBurbon, firebaseCocktailsCachaca, firebaseCocktailsBrandy } from "../../firebase/firebase"
import Options from '../ingredients/options'
import FirebaseRefs from '../firebaseRefs'

class NewRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            choice: '',
            

            formData: {
                name: {
                    element: "input",
                    value: "",
                    label: true,
                    labelText: "Name",
                    config: {
                        name: 'name_input',
                        type: 'text',
                        placeholder: "Podaj nazwę Koktajlu"
                        
                    },
                
                    validation: {
                        required: false,
                        minLen: 1
                    },
                    valid: true,
                    touched: false,
                    validationMessage: 'dodaj Alko'
                },
                taste: {
                    element: "select",
                    value: "",
                    label: true,
                    labelText: "Smak",
                    config: {
                        name: 'message_input',
                        options: [
                            { val: "Słodki", text: 'Słodki' },
                            { val: "Kwaśny", text: 'Kwaśny' },
                            { val: "Gorzki", text: 'Gorzki' },
                            { val: "Wytrawny", text: 'Wytrawny' },
                        ]
                    },
                    validation: {
                        required: false,
                    },
                    valid:true
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
                    cockctailRecipe: {
                        element: "textarea",
                        value: "",
                        label: true,
                        labelText: "Receptura",
                        config: {
                            name: 'message_input',
                            rows: 8,
                            cols: 36,
                            placeholder:'Podaj skład koktajlu'
                        }, validation: {
                            required: false,
                        },
                        valid: true
                   
                    
                    }
                }
            
        }
        this.updateForm = this.updateForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
        
        firebaseStrong.once('value')
        .then((snapshot) => {
            const data = firebaseLooper(snapshot)
 
            this.setState({
                ingredients: data,
               
                options: true,
                
            })
        })
        .catch((e) => console.log(e));
        }
      
    
    
    updateForm(newState){
        this.setState({
            formData: newState
        })
        // console.log(this.state.formData)
        // console.log(this.state.formData.image.value)
        // console.log(this.state.formData.cokctail.value)
    }
    submitForm=(event)=>{
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
            
           const ref = FirebaseRefs(this.state.choice) 
          ref.push(dataTosubmit)
                .then(() => {
                    console.log('new cocktail added')
                    alert('Dodano koktail do bazy')
                }).catch(e=> console.log(e))
            
        }
            
        
   console.log(dataTosubmit)
    }
    
    updateChoice(choosen) {
        this.setState({
            choice: choosen,
        
          
        })
       
    }
    
    render() {
        

    console.log(this.state.choice);
        return (
           
            <div className={style.container}>
            <form className={style.form}
                    onSubmit={this.submitForm}
                    
                >
                  {this.state.options && <Options items={this.state.ingredients} data={(choosen => this.updateChoice(choosen))} />} 
                <FormFields
                   formData={this.state.formData}
                   onblur={(newState)=> this.updateForm(newState)}
                   change={(newState)=> this.updateForm(newState)}
                />


                <button type="submit" >Dodaj koktail</button>
            </form>
            
                </div>
                
        )
    }
}

export default NewRecipe
