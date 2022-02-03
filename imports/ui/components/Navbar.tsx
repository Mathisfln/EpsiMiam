import React from 'react'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

interface Props {
    
}

const Navbar : React.FC<Props> = (props : Props) => {
    const {user, isLoggingIn} = useTracker(() => {
        return {
            user: Meteor.user(),
            isLoggingIn: Meteor.loggingIn()
        }
    })

    return(
        <div className="flex w-full justify-between bg-white p-5">
            <Link to="/">
                <span id="main-logo" className="font-bold">UBER EATS</span>
            </Link>
            <div className="right">
                {(!user || isLoggingIn) ?
                    <Link to="/signup">
                        <span>Inscription</span>
                    </Link>
                :
                    <span onClick={Meteor.logout}>Déconnexion</span>
                }
            </div>
        </div>
    )
}

export default Navbar