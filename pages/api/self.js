export default (req, res) => {
    fetch("https://discord.com/api/v8/users/" + process.env.USER_ID, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`
        }
    }).then(r => r.json()).then(body => {
        body.avatarUri = `https://cdn.discordapp.com/avatars/${body.id}/${body.avatar}.png?size=2048`
        body.tag = `${body.username}#${body.discriminator}`

        res.json(body)
    })
}

export const config = {
    api: {
        externalResolver: true,
    }
}
