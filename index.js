const { Client } = require("discord.js-selfbot-v13");
const client = new Client({
	checkUpdate: false,
});
const config = require("./config.json");

client.on("ready", async () => {
	console.log(`${client.user.username} ile giriş yapıldı!`);
});

client.on("messageCreate", (message) => {
	if (config.cKanallar.includes(message.channel.id)) {
		if (message.attachments.map((r) => r).length > 0)
			client.channels.cache.get(config.aKanal).send({
				content: `${message.attachments.map((r) => r)[0].url}`,
			});
		else if(message.embeds.map(r => r).length > 0)
			client.channels.cache.get(config.aKanal).send({
				content: `${message.embeds.map((r) => r)[0].image}`,
			});
	}
});

client.login(process.env.token);
