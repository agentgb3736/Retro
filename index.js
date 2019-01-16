const Discord = require('discord.js');

const bot = new Discord.Client();

const fs = require('fs');

const ytdl = require('ytdl-core');

var prefix = "/";

const antiRaid = JSON.parse(fs.readFileSync("./ar.json", "utf8"))


bot.on('ready', () => {
    console.log('Je suis prêt !');
        setInterval(changing_status, 1000);
    function changing_status() {

      let status = ["[🌌] /help | "+bot.guilds.size+"s.", "[🌐]#Go110servs", "[💪]On compte sur vous", "[👮]Protège "+bot.users.size+"users."]
      let random = status[Math.floor(Math.random() * status.length)]
      bot.user.setActivity(random)

  }
  });

bot.on("guildMemberAdd", member => {
  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#04B404')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Arrivée d'un nouvel utilisateur")
  .addField("<a:522457968080584733:534068342613475369> __**Un nouvel utilisateur vient d'arriver**__", `Il sagit de [${member.user.tag}](https://discordapp.com/)`, true)
  .setDescription("J'espère tu vas passer un bon moment parmi nous")
  .addField("Ma commande est **`/help`**", "Si tu souhaites savoir mon fonctionnement")
  .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
})

bot.on("guildMemberRemove", member => {
  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#FF4000')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Départ d'un nouvel utilisateur")
  .addField("<a:528719505384538113:534068343993401364> __**Un nouvel utilisateur vient de partir**__", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
  .addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
  .setFooter(`ID : ${member.user.id}`)
  .setTimestamp()
  bvn.send(embed)
})

bot.on("guildMemberAdd", member => {
  const bvn2 = member.guild.channels.find(m => m.name === "『🚫』logs-bienvenue")
  if (!bvn2) return;
  bvn2.send(`Bienvenue ${member}, Bienvenue je t'invite à lire le règlement.
Et surtout passe de bons moments avec nous !`)

})

bot.on("guildCreate", guild => {
    var channel = bot.channels.get('534444153749372949');
  const ajout = new Discord.RichEmbed()
  .setColor("0x41f441")
  .setTitle("  Nouveau serveur !  ")
  .setDescription("<a:529784344261165090:533767529768812575>•__**Ajout du bot**__")
  .addField(" •__**Nom du serveur**__", guild.name)
  .addField(" •__**Membres**__", guild.memberCount)
  .addField(" •__**Créateur du serveur**__",  guild.owner.user.username)
  .addField("Nous sommes maintenant à", bot.guilds.size)
  .setFooter(`ID ➔ ${guild.id}`);
  channel.send(ajout)
  });
  
  bot.on("guildDelete", guild => {
  
    var channel = bot.channels.get('534444153749372949');
  const retrait = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle(" Je vient de perdre un serveur !")
  .setDescription("<a:529784344261165090:533767529768812575>•__**Retrait du bot**__")
  .addField("•__**Nom du serveur*__", guild.name)
  .addField(" •__**Membres**__", guild.memberCount)
  .addField(" •__**Créateur du serveur**__",  guild.owner.user.username)
  .addField("•__**Nous sommes maintenant à**__", bot.guilds.size)
  .setFooter(`ID ➔ ${guild.id}`);
  channel.send(retrait)
  });

    bot.on('message', message => {
if(message.content === prefix + "partners") {
    message.delete(message.author);
    var partner_embed = new Discord.RichEmbed()
    .setColor("#f9ff01")
    .setTitle("Partenaire du Bot !")
    .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix actuel est [/] !**__")
    .addField("NoraVia V1", ('[Lien du Serveur](https://discord.gg/z76uj8V)') , true)
    .addField("RaidAvoid", ('[Lien du Serveur](https://discord.gg/ryEuM6B)') , true)
    .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
    .setTimestamp()
        message.channel.send(partner_embed)
}
})

     
bot.on('message', message => {
if(message.content === prefix + "help") {	
    message.delete(message.author); 
    var help_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("• __**Liste des commandes disponible [12]**__")
    .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix actuel est [/] !**__")
    .addField("<a:514136758745694210:534068341313241098><a:514136759043358721:534068340931559445><a:514136758884106281:534068341627682821>", "Online,En Maintenance,HorsLigne")
    .addField("<a:514136758884106281:534068341627682821><:5216621246915543041:531943485486530580>•__**Bot staff**__ [0]", "``En déloppement``")
    .addField("<a:514136758745694210:534068341313241098><:5199261268989706401:531943485356507162>• __**Administration**__ [2]", "``ban <user>``,``kick <user>``")
    .addField("<a:514136759043358721:534068340931559445><:5199260513051607151:531943485482336266>• __**Modération**__ [3]", "``clear``,``mute``,``unmute``")
    .addField("<a:514136758745694210:534068341313241098><:5199260253169910101:531943485046128641>• __**Fun**__ [3]", "``8ball``,``tell``")
    .addField("<a:514136758745694210:534068341313241098><:5199260963349463161:531943485557702656>• __**Utilitaires**__ [4]", "``stats``,``info``,``id`` ``maj``")
    .addField("<a:514136758745694210:534068341313241098><:5199260798222336201:531943485389930506>• __**Anti-Raid**__ [4]", "``sp``,``report``,``rb``,``rules``")
    .addField("• __** <> **__","``Obligatoire``")
    .addField("SupportBot", ('[Support du Bot](https://discord.gg/88rtxDd)') , true)
    .addField("Invite", ('[SecurityProtect®『🚫』](https://discordapp.com/oauth2/authorize?client_id=534773170742493185&permissions=8&scope=bot)') , true)
    .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL) 
    .setTimestamp()
    message.channel.send("**<:yes:531943485956292619> La commande d'aide vous a bien été envoyé en Message Privé !**")       
    message.author.send(help_embed) 
}
})

bot.on('message', message => {
	if(message.content === prefix + "maj") {
		message.delete(message.author);
     var maj_embed = new Discord.RichEmbed()
     .setTitle("•Mise à Jour du Bot")
     .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix [/] est à mettre devant toute commande !**__")
     .addField("Nouveauté", "__**Changement du Bienvenue**__,__**Refonte et amélioration de la page d'aide**__")
     .addField("Amélioration","Bientot")
     .setColor("RANDOM")
     .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
     .setTimestamp()
     message.channel.send(maj_embed)
         console.log("Un utilisateur a effectuer la commande de maj")  
}
})

bot.on('message', message => {
	if(message.content === prefix + "info") {
		message.delete(message.author);
	 var info_embed = new Discord.RichEmbed()
     .setTitle("•Information Discord")
     .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix [/] est à mettre devant toute commande !**__")
     .addField('•__**Nom du serveur**__', message.guild.name)
     .addField('•__**Nombre total de membres', message.guild.memberCount)
     .addField("•__**Humans**__", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
     .addField("•__**Bots**__", message.guild.members.filter(m => m.user.bot).size)
     .addField('•__**Créer le**__', message.guild.createdAt)
     .addField('•__**Vous avez rejoins le**__', message.member.joinedAt)
     .addField('•__**ID**__', message.guild.id)
     .addField('•__**Owner**__', message.guild.owner.user.tag)
     .addField('•__**Channels**__', `**${message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`)
     .addField('•__**Roles**__', `**${message.channel.guild.roles.size}**`)
     .setColor("RANDOM")
     .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
	 .setTimestamp()
	 
message.channel.send(info_embed)
         console.log("Un utilisateur a effectuer la commande d'info discord!")  
}
})

bot.on('message', message => {
    if(message.content === prefix + "ui") {
        message.delete(message.author);
        var ui_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("User-Info")
        .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix [/] est à mettre devant toute commande !**__")
        .addField("•__**ID**__",  `__${message.author.id}__`)
        .addField("•__**Username | Tag**__", `${message.author.tag}`)
        .addField("•__**Crée Le**__", `${message.author.createdAt}`)
        .addField("•__**Tu l'as rejoin le**__", `${message.member.joinedAt}`)
        .addField("Gban", "**``En développement``**")
        .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(ui_embed)
    console.log("Commande effectue !")
    }
    })

bot.on('message', message => {
if(message.content === prefix + "stats") {
    message.delete(message.author);
    var stats_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Stats Du Bot")
    .setDescription("<a:529784344261165090:533767529768812575>• __**Mon prefix [/] est à mettre devant toute commande !**__")
    .addField("•__**Users**__", bot.users.size)
    .addField("•__**Servers**__", bot.guilds.size)
    .addField("•__**Channels**__", bot.channels.size)
    .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
    .setTimestamp()
    
message.channel.send(stats_embed)
        console.log("Un utilisateur a effectuer la commande de stats")  
}
})

bot.on("message", message => {
    if(message.content.startsWith(prefix + "ar")) {
        message.delete(message.author);
    let userAR = message.mentions.users.first()
    if(!antiRaid[userAR.id]) {
        antiRaid[userAR.id] = {
            sec: 0,
        }
    }

    if(antiRaid[userAR.id].sec > 1) return message.reply("Cet utilisateur est déjà anti-raid !").then(msg => msg.delete(2000));
    antiRaid[userAR.id].sec++

   fs.writeFile("./ar.json", JSON.stringify(antiRaid), (err) => {
        if(err) console.error(err)
    })

    message.reply(userAR.tag + " a bien été ajouté à l'anti-raid !").then(msg => msg.delete(2000));
}
})

bot.on('message', message => {
if(message.content.startsWith(prefix + "tell")){   
    message.delete(message.author);
var text = message.content.split(' ').slice(1).join(' ')
if(!text) return message.reply('Hey salut')
message.channel.send(text)
}
})

bot.on('message', message => {
    if(message.content.startsWith(prefix + 'id')) {
        if (message.channel.type === "dm") return;   
         message.channel.sendMessage(`**${message.author.username} **` + "Voici ton ID: " + `__${message.author.id}__`);
      }
    })

bot.on('message', message => {
if(message.content === prefix + "rules") {
    var rules_embed = new Discord.RichEmbed()
    .setColor("#ED7F10")
    .setTitle("Voici le réglement !")
    .addField("1.Utilisateurs", 
    "1.Spam participation à raid. 2. Non respect des TOS de Discord __**Selfbots**__. 3. Abus de pouvoir. 4. Destruction de serveur. 5.Harcelement __**DDOS,DOX**__ 6. Création de bot malveillant. 7. Pseudo incorect.")
    .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(rules_embed)
console.log("Commande effectue !")
}
})

bot.on('message', message => {
if(message.content.startsWith(prefix + "cdel")) {
	message.delete(message.author);
        if(message.guild.member(message.author) !== message.guild.owner) {
            message.channel.send("Tu n'as pas les permissions requises pour effectuer cette commande.")
            return;
        }
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send("Je n'ai pas la permission requise pour effectuer cette commande.")
            return;
        }
        message.guild.channels.map(c => {
            if(c.deletable) {
                c.delete()
            }
        })
    }
})
	
    bot.on('message', message => {
    if(message.content.startsWith(prefix + 'kall')) {
	    message.delete(message.author);
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
            message.channel.send("**❌ Vous n'avez pas la permission.**")
            return;
        }
        message.guild.members.map(m => {
        if (m.kickable) {
                m.kick()
        message.channel.send(`**Tout les membres ont été kick !**`)
        }});
    };
})

      
    bot.on('message', message => {
if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permissions !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilistaur")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }

        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }
        
        kick.kick().then(member => { 
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        });
    }
})

    bot.on('message', message => {
    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la premissions");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) { 
            return message.channel.send("Je ne sais pas si l'utilisateur existe")
        }

        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.username} est ban par ${message.author.username} !`)
        }

        )
    }
})

    bot.on('message', message => {
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(msg => msg.delete(2000));
        })
    }
})

bot.on('message', message => {
if(message.content.startsWith(prefix + "mute")) {
    message.delete(message.author);
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    })
}
})

bot.on('message', message => {
if(message.content.startsWith(prefix + "unmute")) {
    message.delete(message.author);
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} n'est plus mute !`);
    })
}
})

    bot.on('message', message => {
if (message.content.startsWith(prefix + "8ball")) {
	
	message.delete(message.author);
	
	let args = message.content.split(" ").slice(1);
	let tte = args.join(" ")
	if (!tte){
		return message.reply("Merci de me poser une question")};
		
		var replys = [
		"Oui",
		"Non",
		"Je sais pas",
		"Peut être"
		];
	
	let reponse = (replys[Math.floor(Math.random() * replys.length)])
	
	var bembed = new Discord.RichEmbed()
	.setDescription("🎱 8ball")
	.addField("Question", tte)
	.addField("Réponse", reponse)
	.setColor("RANDOM")
message.channel.sendEmbed(bembed)

}

})
                
bot.on('message', message => {
    if(message.content.startsWith(prefix + "sp")){
        if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                if(message.author.bot) return
        var ara = message.content.substr(4)
        if(!ara) return message.channel.send("**Entrez un message svp.**")
        var y = new Discord.RichEmbed()
        .setColor("ff0000")
        .addField("Alerte 🚨", ara)
        .addField("🚔 Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
        .addField("Depuis le Serveur", message.guild.name)
        message.channel.send("**Tous le staff sp à été alerté ! 🚨**")
        bot.channels.find("id", "531928219742502932").send(y)
        bot.channels.find("id", "531928219742502932").send(" <@&531884230867681283>")
        message.delete()
        }
    })

    bot.on('message', message => {
        if(message.content.startsWith(prefix + "rb")){
            if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                    if(message.author.bot) return
            var ara = message.content.substr(4)
            if(!ara) return message.channel.send("**Entrez un message svp.**")
            var y = new Discord.RichEmbed()
            .setColor("ff0000")
            .addField("Report-Bugs 🚨", ara)
            .addField("🚔 Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
            .addField("Depuis le Serveur", message.guild.name)
            message.channel.send("**Tous les Administateur de SecurityProtect à été alerté ! 🚨**")
            bot.channels.find("id", "531927746579005459").send(y)
            bot.channels.find("id", "531927746579005459").send(" <@&533357965600882688>")
            message.delete()
            }
        })

        bot.on('message', message => {
            if(message.content.startsWith(prefix + "report")){
                if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
                        if(message.author.bot) return
                var ara = message.content.substr(8)
                if(!ara) return message.channel.send("**Entrez un message svp.**")
                var y = new Discord.RichEmbed()
                .setColor("ff0000")
                .addField("Report 🚨", ara)
                .addField("🚔 Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
                .addField("Depuis le Serveur", message.guild.name)
                message.channel.send("**Le report est en cours de Traitement veillez patientez ! 🚨**")
                bot.channels.find("id", "531927513031639062").send(y)
                bot.channels.find("id", "531927513031639062").send(" <@&531884230867681283>")
                message.delete()
                }
            })
            
            bot.login(process.env.TOKEN)
