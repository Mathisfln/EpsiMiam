import { Meteor } from 'meteor/meteor'
import React from 'react'


const LandingPage = () => {

    const createCategory = () => {
        Meteor.call('restaurant_categories.insert', {name: "Burger"}, (error: any,data: any) =>{
            if(error){
                console.error(error)
                return
            }
            console.log(data)
        })
    }

    return(
        <>
            <h1>Landing Page</h1>
            <button className="bg-black rounded text-white p-5 hover:bg-grey" onClick={createCategory}>Create category</button>
        </>
    )
}

export default LandingPage