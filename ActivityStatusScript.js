client.on("ready", async () => {
	client.logger.info(`[READY] Logged in as ${client.user.tag}! ID: ${client.user.id}`)

	client.activities.push(
		{
			text: () => `${formatNumber(client.guilds.cache.size)} servers`,
			type: "WATCHING",
		},
		{
			text: () =>
				`with ${formatNumber(client.registry.commands.size)} commands`,
			type: "PLAYING",
		},
		{
			text: () => `${formatNumber(client.channels.cache.size)} channels`,
			type: "WATCHING",
		}
	);

	client.setInterval(() => {
		const activity =
			client.activities[Math.floor(Math.random() * client.activities.length)];
		const text =
			typeof activity.text === "function" ? activity.text() : activity.text;
		client.user.setActivity(text, { type: activity.type });
	}, 60000);
})
