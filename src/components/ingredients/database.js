import React, { Component } from 'react'
import { firebaseLooper, firebaseStrong, firebaseCocktailsVodka,firebaseCocktailsBurbon} from "../../firebase/firebase"
import style from './database.scss'



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
            <div className={style.container}>
                {/* {JSON.stringify(this.state.list)} */}
                    
                    {this.state.list.map((item ,i) => 
                    <div key={i} className={style.title}>{item.name}
                        <img src={`./images/${item.image}`}/>
                        {/* <img src={`{item.image}`}/>    */}
                    </div>
                    
                    )}
                    
                {console.log(this.state.list)}
            </div>
        );
    }
}

export default Database