import { User } from "./DataForm"

export const userMapper = (userData) => {
    const newUser = User
    newUser.username = userData.username
    newUser.password = userData.password
    newUser.confirmPassword = userData.confirmPassword
    newUser.role = userData.role
    newUser.userDetail.avatar = userData.image
    newUser.userDetail.fullName = userData.fullName
    newUser.userDetail.dateOfBirth = userData.dateOfBirth
    newUser.userDetail.address = userData.address
    newUser.userDetail.age = parseInt(userData.age, 10)
    newUser.userDetail.email = userData.email
    newUser.userDetail.phone = userData.phone
    return newUser;
}