# discord-warning
a warning system for discord.js bots
---
# Installation
```
npm install discord-warning
```
# Usage
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const warns = require('discord-warning');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (mesage) => {
  if (message.content === 'warn') {
    warns.addWarn(message.author.id, message.guild.id, 'test', message.author.id);. // adds a warn to the user
    console.log(warns.getWarns(message.author.id, message.guild.id)); // gets the warns of the user
  }
});
```
