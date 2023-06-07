const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is up.')
});

app.listen(3000, () => {
  console.log('server started');
});

///////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

const request = require('request');
const prefix = "*"; // البرافيكس
const GUILDID = '472011355327561729'; // اي دي السيرفر  
const CHANNELID = '1019071688861827132'; // اي دي الروم


client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`${prefix}Quran`, { type: "WATCHING" });
});

const url = 'https://Qurango.net/radio/yasser_aldosari'; //  قناة الراديو هنا // CODE BY KAHRBAA 

client.on('ready', async () => {
  console.log('تـم تشغيل القرأن الكريم');
  // CODE BY KAHRBAA كههربا
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if (!guildid) throw new Error('ـاكد انك حطط ايدي السيرفر');
    if (!channelid) throw new Error('تـاكد انك حطط ايدي الروم');

    let guild = client.guilds.cache.get(guildid);
    const voiceChannel = guild.channels.cache.get(channelid);;
    if (!voiceChannel) {
      return
    }// CODE BY KAHRBAA كههربا
    voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.play(url);
      });
  }
});



client.login(process.env.token);
