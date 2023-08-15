import * as fs from 'fs';
export function Sign_new(userId: String) {
    let dir = `./database/sign/player/${userId}`
    let file_m = `${dir}/money.txt`
    let file_d = `${dir}/date.txt`
    let file_dt = `${dir}/sign_30_time.txt`
    let file_dat = `${dir}/sign_all_time.txt`
    let file_boost = `${dir}/boost.txt`
    if(fs.existsSync(dir)) {
        return true
    } else {
        
        if(fs.existsSync(dir)==false) {fs.mkdirSync(dir)}
        if(fs.existsSync(file_m)==false) {fs.writeFileSync(file_m, '0')}
        if(fs.existsSync(file_d)==false) {fs.writeFileSync(file_d, 'new')}
        if(fs.existsSync(file_dt)==false) {fs.writeFileSync(file_dt, '0')}
        if(fs.existsSync(file_dat)==false) {fs.writeFileSync(file_dat, '0')}
        if(fs.existsSync(file_boost)==false) {fs.writeFileSync(file_boost, '1')}
        return false
    }
}