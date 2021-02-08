# Sasaki Api
A javascript library that makes interacting with the SasakiApi (WebApi) easier

## Installation
`npm install sasaki-api`

## Examples

### with Discord 
- [WithDiscordReadMe]()
```js
const { Client, MessageEmbed } = require('discord.js');
const { ImageClient } = require('sasaki-api');
const client = new Client();
const imgClient = new ImageClient();

client.on('ready', () => console.log("Ready"));
client.on('message', async (message) => {
  if(message.content.toLowerCase() === "!stone") {
    const img = await imgClient.getImage(stone);
    message.channel.send(new MessageEmbed()
      .setImage(img)
    )
  }
})
client.login("YOUR_SECRET_BOT_TOKEN");
```