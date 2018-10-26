import React from 'react'

export default function looper(snapshot) {
    const data = [];
   
        
    snapshot.forEach((childSnapshot) => {
        data.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
            
        })
    })
  return ingre
}
