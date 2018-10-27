import React, { Component } from 'react'
import { firebaseLooper,firebaseStrong,firebaseCocktailsVodka} from "../../firebase/firebase"



class Database extends Component {

    constructor(...args) { 
        super(...args);
        this.state = {
            list: ['aaa']
        }
    }

    loadData() { 
        firebaseCocktailsVodka.once('value')
        .then((snapshot) => {
            const data = firebaseLooper(snapshot)
 
            this.setState({
                list: data,     
            })
        })
        .catch((e) => console.log(e));

    }

    componentDidMount() { 
        this.loadData();
    }
      
    
    render() {


        return (
            <div>
                {/* {JSON.stringify(this.state.list)} */}
                    <ul>
                    {this.state.list.map((item ,i) => 
                        <li key={i}>{item.name}><img src={`./images/${item.image}`} />     </li>
                    
                    )}
                    </ul>
                {console.log(this.state.list)}
            </div>
        );
    }
}

export default Database