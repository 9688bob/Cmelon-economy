import { MessageEmbed } from "discord.js"
import { emoji_WM_money } from "../database/emoji"
import { ICommand } from "wokcommands"
import { bot_tag, owner_tag } from "../database/main"
import { Sign_daily } from "../database/function/daily"
import { banned_test } from "../database/function/ban"
import { created_account } from "../database/function/created_account"
import { edit_daily_max, edit_daily_min } from "../database/edit"

const CR = 'RANDOM'

export default {
    category: '經濟',
    description: '每日獎勵',

    slash: "both",
    testOnly: true,
    guildOnly: true,
    ownerOnly: false,

    maxArgs: 0,
    
    callback: ({interaction,client,message}) => {
        //#region userId
        let userId = ''
        if(interaction) {
            userId = interaction.user.id
        } else {
            userId = message.author.id
        }
        //#endregion
        let bot_Avatar = client.user?.displayAvatarURL({dynamic: true})

        if(banned_test(userId)) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_money}經濟系統`)
            .setDescription(`錯誤`)
            .addField('您已被管理員封禁',`請尋找管理員解封`)
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            .setColor("RED")
            return em
        }
        if(created_account(userId)) {
            let em = new MessageEmbed()
            .setTitle(`${emoji_WM_money}經濟系統`)
            .setDescription(`錯誤`)
            .addField('您還未創建帳號', "請使用**`me$new`** 創建帳號")
            .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
            .setColor("RED")
            return em 
        }

        let Random_money = Math.floor(Math.random() * (edit_daily_max - edit_daily_min + 1)) + edit_daily_min // 隨機數(min~max) (1~10)

        //#region 日期
        let today = ''
        if(true) {
            let date = new Date()
            let date_year = date.getFullYear()
            let date_month = date.getMonth()
            let date_day = date.getDate()
            today = `${date_year}-${date_month+1}-${date_day}`
        }
        //#endregion
        let sign_status_code = Sign_daily(userId,today,Random_money)

        let em = new MessageEmbed()
        .setTitle(`${emoji_WM_money}經濟系統`)
        .setDescription(`每日簽到`)
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        
        if(sign_status_code == 'no') {
            return em
            .addField('您今天的簽到狀態為', '**已簽到**')
            .setColor("RED")
        } else {
            return em
            .addField(`簽到成功!`,`您已獲得 **${sign_status_code}** 元`)
            .setColor(CR)
        }
    }
} as ICommand