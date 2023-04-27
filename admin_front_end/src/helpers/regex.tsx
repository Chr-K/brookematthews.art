export function email_check(email:string){
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const matches = email.match(regex)
    return matches
}
export function password_check(password:string){
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/
const matches = password.match(regex)
return matches
}