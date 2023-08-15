import DJS, { Intents, Client } from 'discord.js'

export const client = new DJS.Client({
    shards: 'auto',
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_MESSAGE_TYPING,
      Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    partials: ['MESSAGE', 'CHANNEL', 'USER'],
  });
export const owner_tag = '!西瓜owoღ (cute_cmelon)'
export const bot_tag = '經濟系統#9462'
export const bot_inv_link = 'https://discord.com/api/oauth2/authorize?client_id=792596417222541332&permissions=8&scope=applications.commands%20bot'
export const cmelon_Id = '439723289707937792'
export const CWM_gId = '597770571987812383'
export const CWM_name = '西瓜群'
export const a = client.guilds.cache.get(CWM_gId)?.fetchOwner()