import * as fs from 'fs';
import { edit_daily_reward } from '../edit';

export function Sign_daily(userId: String, today: string, Rmoney: number) {
    let dir = `./database/sign/player/${userId}`
    let file_m = `${dir}/money.txt`
    let file_d = `${dir}/date.txt`
    let file_dt = `${dir}/sign_30_time.txt`
    let file_dat = `${dir}/sign_all_time.txt`
    let file_boost = `${dir}/boost.txt`

    let day_data = fs.readFileSync(file_d, 'utf8');
    let money_data = fs.readFileSync(file_m, 'utf8');
    let time_data = fs.readFileSync(file_dt, 'utf8');
    let all_time_data = fs.readFileSync(file_dat, 'utf8');
    let boost_data = fs.readFileSync(file_boost, 'utf8');

    
    if(fs.existsSync(file_m) && today != day_data) {
        let time = Number(time_data)
        let atime = Number(all_time_data)
        let a = Number(money_data)
        let boo = Number(boost_data)

        let allsigned_time = (atime + 1).toString()
        fs.writeFileSync(file_dat, allsigned_time)
        fs.writeFileSync(file_d, today)
        if(time == 29) {
            let money_count = Math.floor(a + (Rmoney + edit_daily_reward)*boo).toString()
            fs.writeFileSync(file_m, money_count)
            fs.writeFileSync(file_dt, '0')
        } else {
            let money_count = Math.floor(a+(Rmoney*boo)).toString()
            let signed_time = String(time+1)
            fs.writeFileSync(file_m, money_count)
            fs.writeFileSync(file_dt, signed_time)
        }
        if(boo != 1) {fs.writeFileSync(file_boost,'1')}
        return Math.floor(Rmoney*boo).toString()
    }
    if(today == day_data) {
        return 'no'
    }
}