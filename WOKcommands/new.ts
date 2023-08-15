import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { emoji_WM_money } from "../database/emoji"
import { Sign_new } from "../database/function/new"
import { banned_test } from "../database/function/ban"
import { bot_tag, owner_tag } from "../database/main"

const CR = 'RANDOM'

export default {
    category: '經濟',
    description: '創建帳號',

    slash: "both",
    testOnly: true,
    guildOnly: true,
    ownerOnly: false,
    
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

        let em = new MessageEmbed()
        .setTitle(`${emoji_WM_money}經濟系統`)
        .setDescription(`創建帳號`)
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        if(Sign_new(userId) == true) {
            return em
            .addField('您的帳號狀態為', '**已建立**')
            .setColor("RED")
        } else {
            return em
            .addField('帳號建立完成!','你目前有 **`0`** 元')
            .setColor(CR)
        }
    }
} as ICommand