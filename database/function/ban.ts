import * as fs from 'fs'

export function banned_test(userId:string) {
    let user_file = `./database/sign/ban/${userId}.txt`
    if(fs.existsSync(user_file)) {
        return true
    } else {return false}
}