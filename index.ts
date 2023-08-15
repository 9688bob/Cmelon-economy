import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'
import { client } from './database/main'
import { Wok_Category } from './database/Wokcommand_Category'

client.login(process.env.TOKEN)

const dbOptions = {
  keepAlive: true,
}

client.on('ready', async() =>{
    console.log('Bot online')
    console.log(`Currently in ${client.guilds.cache.size} servers`)

    new WOKCommands(client, {
      commandDir: path.join(__dirname, 'WOKcommands'),
      featureDir: path.join(__dirname, 'WOKfeatures'),
      typeScript: true,

      messagesPath: '',
      showWarns: true, // Show start up warnings
      ignoreBots: false,

      botOwners: [''],
      testServers: [''],
      disabledDefaultCommands: ["channelcommand","customcommand","delcustomcommand","prefix","requiredpermissions","requiredrole","togglecommand","help","channelonly","command","language","reduiredrole","slash"],

      mongoUri: process.env.MONGO_URI,
      dbOptions,
  })
      .setDefaultPrefix('me$')
      .setColor('RANDOM')
      .setCategorySettings(Wok_Category)
      console.log('Linked to Mongo DB✅')
})