import {Meteor} from 'meteor/meteor';
import { setProfileType } from '/imports/services/users_service';
import { UserRolesEnum } from '/imports/types';

Meteor.methods({
    'users.set_profile_type'(profile_type: UserRolesEnum){
        setProfileType(profile_type)
        return true
     }
})