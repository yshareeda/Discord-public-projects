/*
First go to shell and install discord.js@12.5.3
Then paste this code and replace the target user ID and target word
Then run the project
For any quories contact- https://dsc.bio/alonearif
*/

const Discord = require('discord.js') //Declaring Discord
const client = new Discord.Client() //Declaring Discord Client

//Delete message from a specific user!

const target = '965617457324781578' //Replace the target user ID

client.on('message', async message => { //making an event
  if(message.author.id === target) { //declearing the specific user
    message.delete() //If you want to delete the message after a specific time then use message.delete({ timeout: 1000 }) //1000ms = 1 second
    message.channel.send(`${message.author} you are muted from sending messages.`) //If you want to send any message after deleting the message or to DM the user use message.author.send('message')
  }
})

//Delete message which contains a specific word!

const word = 'pizza' //The word that triggers this event.

client.on('message', async message => { //making an event
  if(message.content.toLowerCase().includes(word)) { //declearing the specific word
    message.delete() //If you want to delete the message after a specific time then use message.delete({ timeout: 1000 }) //1000ms = 1 second
  }
})

//Define token in secrets tab
const token = process.env['token']
client.login(token)
