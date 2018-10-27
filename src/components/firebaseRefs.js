import React,{Component} from "react"
import { Route, Redirect } from 'react-router-dom'
import {firebaseDB, firebaseTaste,firebaseStrong,firebaseLooper,firebaseCocktailsVodka, firebaseCocktailsRum, firebaseCocktailsGin, firebaseCocktailsWhisky, firebaseCocktailsTequilla, firebaseCocktailsBurbon, firebaseCocktailsCachaca, firebaseCocktailsBrandy,firebaseCocktailsElse} from "../firebase/firebase";




    const FirebaseRefs = (name) => {
        let formTemplate = null;
        switch (name) {
            case ('vodka'):
                formTemplate = (firebaseCocktailsVodka)
                break;
            case ('rum dark', 'rum white'):
                formTemplate = (firebaseCocktailsRum)
                break;
            case ('gin'):
                formTemplate = (firebaseCocktailsGin)
                break;
            case ('whiskey'):
                formTemplate = (firebaseCocktailsWhisky)
                break;
            case ('tequilla gold'):
                formTemplate = (firebaseCocktailsTequilla)
                break;
            case ('tequilla silver'):
                formTemplate = (firebaseCocktailsTequilla)
                break;
            case ('burbon'):
                formTemplate = (firebaseCocktailsBurbon)
                break;
            case ('cacacha'):
                formTemplate = (firebaseCocktailsCachaca)
                break;
            case ('brandy'):
                formTemplate = (firebaseCocktailsBrandy)
                break;
            default:
                formTemplate = (firebaseCocktailsElse)
        }
      
        
        return formTemplate
    }
    
    


export default FirebaseRefs