# Discord-QuoteBot 🤖

[![npm version](https://badge.fury.io/js/@angular%2FDiscord-QuoteBot.svg)](https://badge.fury.io/js/@r4dixx%2FDiscord-QuoteBot) [![Node.js Package](https://github.com/r4dixx/Discord-QuoteBot/actions/workflows/release-package.yml/badge.svg)](https://github.com/r4dixx/Discord-QuoteBot/actions/workflows/release-package.yml) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/r4dixx/Discord-QuoteBot#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/r4dixx/Discord-QuoteBot/graphs/commit-activity) [![License: GPL--3.0](https://img.shields.io/github/license/r4dixx/Discord-QuoteBot)](https://github.com/r4dixx/Discord-QuoteBot/blob/master/LICENSE) [![Twitter followers](https://img.shields.io/twitter/follow/r4dixx.svg?style=social)](https://twitter.com/r4dixx)

Discord bot to output, save, and edit quotes upon commands.

**TODO UPDATE THIS**

- Get a random quote → `/get`
- Save a quote → `/add` your_quote
- Edit last saved quote (captains only) → `/edit` `last` your_new_quote
- Edit chosen quote (captains only) → `/edit` `item` old_quote new_quote
- Delete last saved quote (captains only) → `/delete` `last`
- Delete chosen quote (captains only) → `/delete` `item` your_quote_to_delete
- Display help message → `/help`
- Test → `/ping`

These can be customized pretty heavily in [src/config/commands.json](src/config/config.json)

## 📖 Table of contents

- [Preliminary steps](#-preliminary-steps)
   - [Important notes](#important-notes)
- [Setup](#-setup)
   - [Locally](#locally)
   - [In the cloud](#in-the-cloud)
- [Customization](#%EF%B8%8F-customization)
- [Test if everything is up and running](#-test-if-everything-is-up-and-running)
- [About the author](#-about-the-author)
- [Contributing](#-contributing)
- [Show your support](#-show-your-support)
- [License](#-license)

***

## 🏁 Preliminary steps

1. [Create a new Discord app](https://discordapp.com/developers/applications/me) and an associated bot account.

2. Create a Discord invite with `applications.commands` scope and your application client ID:

   `https://discordapp.com/oauth2/authorize?scope=applications.commands&client_id=YOUR_CLIENT_ID`

2. Grab [the latest release](https://github.com/r4dixx/Discord-QuoteBot/releases/latest)

3. Open [src/config/private.json](src/config/private.json) and:

    - Copy/paste your application client ID in the `client` field.

    - Copy/paste your bot account token in the `token` field.
    
    - Copy/paste your guild ID in the `server` field.

    - Copy/paste your user ID in the `captains` field.

      > This will give you more rights (edition, deletion, etc).  
      You can add as many captains as you'd like but I recommend you tread carefully.

### Important notes

- Users declared as captains of this bot **are not** server admins (and vice-versa)
- **Never** commit private information. To avoid accidents I recommend you run:
   
   `git update-index --assume-unchanged src/private.json`
   
- To find your user and guils IDs, [check the official support page](https://support.discordapp.com/hc/articles/206346498).  
- If you're lost, see [the official documentation](https://discordjs.guide).

## 🏗 Setup

### Locally

Make sure you have [Node.js](http://nodejs.org/) **16.6 or higher** installed.

```sh
$ cd Discord-QuoteBot
$ npm install
$ npm start
```

### In the cloud

Make sure you have the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ cd Discord-QuoteBot
$ heroku create
$ git push heroku main
```

We only need a worker process to run the bot.

```sh
$ heroku ps:scale web=0
$ heroku ps:scale worker=1
```

## ⚙️ Customization

Edit [src/config/config.json](src/config/config.json) and customize it to your likings

> **Warning**: Some prefix/commands can cause conflicts with other bots!

## 🧪 Test if everything is up and running

Send `/ping` in your Discord server and see the magic happen

***

## 👤 About the author

* Website: [r4dixx.github.io](https://r4dixx.github.io/)
* Twitter: [@r4dixx](https://twitter.com/r4dixx)
* Github: [@r4dixx](https://github.com/r4dixx)
* LinkedIn: [@r4dixx](https://linkedin.com/in/r4dixx)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/r4dixx/Discord-QuoteBot/issues).

## 🤗 Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [r4dixx](https://github.com/r4dixx).<br />
This project is [GPL-3.0](https://github.com/r4dixx/Discord-QuoteBot/blob/master/LICENSE) licensed.

***

_This README was partially generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
