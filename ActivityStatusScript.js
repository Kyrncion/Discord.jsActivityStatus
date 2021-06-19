client.setInterval(() => {
		const activity =
			client.activities[Math.floor(Math.random() * client.activities.length)];
		const text =
			typeof activity.text === "function" ? activity.text() : activity.text;
		client.user.setActivity(text, { type: activity.type });
	}, 60000);

	if (client.memePoster) {
		client.setInterval(async () => {
			try {
				const post = await client.memePoster.fetchRandomPost(false);
				await client.memePoster.post(post);
			} catch (err) {
				client.logger.error(err);
			}
		}, client.memePoster.postInterval);
	}
