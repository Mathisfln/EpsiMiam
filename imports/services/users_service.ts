import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { UserRolesEnum } from '../types'

export const generateDefaultUser = () => {
    const existing_user = Meteor.users.findOne()
    if(existing_user) return

    console.log("SERVER - First user generation...")
    Accounts.createUser({
      email: Meteor.settings.private.ADMIN_EMAIL,
      password: Meteor.settings.private.ADMIN_PASSWORD
    })
}

export const setProfileType = (profile_type: UserRolesEnum) => {

  if(!Meteor.userId()) throw new Meteor.Error('400', "Aucun utilisateur connecté")

  const user = Meteor.users.findOne({_id: Meteor.userId()})
  console.log("USER", user)
  if(user.role) throw new Meteor.Error("402", "Utilisateur a déjà un role")

  Meteor.users.update({_id: Meteor.userId()}, {$set: {role: profile_type}})
  return true
}

export const isRestaurantUser = () => {
  const user = Meteor.users.findOne({_id: Meteor.userId()})
  if(!user) return false
  return user.role === UserRolesEnum.RESTAURANT
}