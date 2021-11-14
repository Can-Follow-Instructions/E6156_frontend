interface  User {
    id: number,
    firstName: string,
    lastName:string,
    email: string
}
const emptyUser:User = {
    id: 3,
    firstName: "Root",
    lastName: "Admin",
    email: "root@root.com"
}

export type {User }
export {emptyUser}

function empty(){
    return
}