import React,{Component} from 'react'
import { firebaseDB,firebaseLooper,firebaseStrong} from "../../firebase/firebase"
import Looper from "../../firebase/looper"
import FormFields from "../forms/forms"
import Options from './options'

class selector extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            ingredients: [1, 2, 3],
            choice:'',

            options: false,
            formData: {
                Alko: {
                    element: "select",
                    value: "",
                    label: true,
                    labelText: "wybierz alko",
                    config: {
                        name: 'message_input',
                        options: [
                            { val: "1", text: '10-20' },
                            { val: "2", text: '20-30' },
                            { val: "3", text: '+30' }
                        ]
                    },

                }
            }
        }
        firebaseStrong.once('value')
            .then((snapshot) => {
                const ingre = firebaseLooper(snapshot)

                // snapshot.forEach((childSnapshot) => {
                //     ingre.push({
                //         id: childSnapshot.key,
                //         ...childSnapshot.val()
                //     })
                // })
                    
                this.setState({
                    ingredients: ingre,
                   
                    options: true,
                    
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
            choice:choosen
        })
    }

render(){
    return (
        <div>
            
            {/* {console.log(this.state.ingredients)} */}
           { console.log(this.state.choice)}
            {/* {this.state.options && <FormFields data={this.state.ingredients} formData={this.state.formData}
             change={(newState)=> this.updateForm(newState)}/>} */}

            {this.state.options && <Options items={this.state.ingredients} data={(choosen=>this.updateChoice(choosen))}/>}
            
            
        </div>
    )
}

  
  
};

export default selector
