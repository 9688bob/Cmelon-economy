import * as fs from 'fs';

export function created_account(userId: string) {
    let dir = `./database/sign/player/${userId}`
    if(fs.existsSync(dir) == false) {
        return true//未創
    } else { return false} //已創
}