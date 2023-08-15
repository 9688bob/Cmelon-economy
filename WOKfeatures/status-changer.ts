import { Client } from "discord.js";

export default (client: Client) => {
    const statusOptions = [
        '我的前驟是 me$',
        '使用me$help查看指令列表!',
        '可以使用斜線指令~'
    ]
    let conuter = 0


    const updataStatus = () => {
        client.user?.setPresence({
            status: 'idle', // online dnd idle invisible
            activities: [
                {
                    name: statusOptions[conuter],
                    type: 'WATCHING'
                },

            ]
        })

        if (++conuter >= statusOptions.length) {
            conuter = 0
        }

        setTimeout(updataStatus, 1000 * 10)//1000MS * nS
    }
    updataStatus()
}

export const config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'Status Changer'
}