import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export const generateDefaultUser = () => {
    const existing_user = Meteor.users.findOne()
    if(existing_user) return

    console.log("SERVER - First user generation")
    Accounts.createUser({
        email: Meteor.settings.private.ADMIN_EMAIL,
        password: Meteor.settings.private.ADMIN_PASSWORD
    })
}