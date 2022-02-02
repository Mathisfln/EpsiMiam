import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
    console.log('SERVER - Server started');


    // Admin init
    const user_admin = Meteor.users.findOne();
    if(!user_admin){
        console.log('SERVER - First user generation....');
        Accounts.createUser({
            email: "admin@gmail.com",
            password: "admin"
        })
    }
});