import { MessageEmbed } from "discord.js"
import { ICommand } from "wokcommands"
import { emoji_WM_money } from "../database/emoji"
import { banned_test } from "../database/function/ban"
import { created_account } from "../database/function/created_account"
import { bot_tag, owner_tag } from "../database/main"

const CR = 'RANDOM'

export default {
    category: '資訊',
    description: '幫助菜單',

    slash: "both",
    testOnly: true,
    guildOnly: true,
    ownerOnly: false,

    maxArgs: 0,
    
    callback: ({interaction,client,message,args}) => {
        let bot_Avatar = client.user?.displayAvatarURL({dynamic: true})

        let userId = ''
        if(interaction) {userId = interaction.user.id} else {userId = message.author.id}
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

        let em = new MessageEmbed()
        .setTitle(`${emoji_WM_money}經濟系統`)
        .setDescription('**幫助菜單**')
        .addFields(
            {name: '每日獎勵', value: '**me$daily** </daily:0>', inline: true},
            {name: '創建帳號', value: '**me$new** </new:0>', inline: true},
            {name: '幫助菜單', value: '**me$help** </help:0>', inline: true},
        )
        .setColor(CR)
        .setFooter(`${bot_tag} By. ${owner_tag}`, bot_Avatar)
        return em
    }
} as ICommand