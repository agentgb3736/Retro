const Discord = require('discord.js');

const bot = new Discord.Client();


var prefix = "/";


bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log('Je suis prêt !');
    setInterval(changing_status, 1000);
  
    function changing_status() {
      let status = ["「👮」Protège `bot.guilds.size`.s I SP®『🚫』Anti-Raid 🚨", "/help /invite", "Crée par _ClesiriusPE _「🎄」", "Joyeux Noël「🎄」", "「👮」17 065  users protégés", "#Go80servs", "「💪」On compte sur vous"]
      let random = status[Math.floor(Math.random() * status.length)]
      bot.user.setActivity(random)
  }
  
  });

bot.on("guildMemberAdd", member => {
  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#44FD01')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Arrivée d'un nouvel utilisateur")
  .addField("Un nouvel utilisateur vient d'arriver", `Il sagit de [${member.user.tag}](https://discordapp.com/)`, true)
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
  .setColor('#FD0101')
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setTitle("Départ d'un nouvel utilisateur")
  .addField("Un nouvel utilisateur vient de partir", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
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

bot.on('guildCreate',function(guild){
        guild.fetchInvites()
          .then(invites=>bot.guilds.find(g=>g.name==='SecurityProtect®『🚫』').channels.find(c=>c.name==='servers').send('Nouveau serveur : '+guild.name+'\n\t'+invites.first().url))
      })
 
bot.on('message', message => { 

    if(message.content === "Salut"){
        message.reply("Hey");
        console.log('Le bot dit Bonjour');
    }

    if(message.content === "Bonsoir"){
        message.reply("Bonsoir :wave:");
        console.log('Le bot dit Bonsoir');
    }
    
    if(message.content === "noël"){
    message.reply("Joyeux Noël :christmas_tree: !");
    console.log('Le bot fais peur');
    }
    
if(message.content === prefix + "invite") {
	message.delete(message.author);
        var invite_embed = new Discord.RichEmbed()
        .setColor("#0800F6")
        .setTitle("Invitation du Bot !")
	.addField("InviteBot", ('[Lien du Bot](https://discordapp.com/oauth2/authorize?client_id=511104745096609792&scope=bot&permissions=2146958847)') , true)
        .addField("SupportBot", ('[Support du Bot](https://discord.gg/88rtxDd)') , true)
	.setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
        .setTimestamp()
	
       message.channel.send(invite_embed)
        console.log("Un utilisateur a effectué la commande d'aide !")
   
     }
    
if(message.content === prefix + "help") {	
	message.delete(message.author); 
	var help_embed = new Discord.RichEmbed() 
           .setColor("#0800F6") 
           .setTitle("Voici la page d'aide !") 
           .addField("__**Modération**__ - (3)", "``/clear`` ``/mute`` ``/unmute``") 
           .addField("__**Administration**__ - (2)", "``/ban`` ``/kick``") 
           .addField("__**Fun**__ - (2)", "``/say`` ``/8ball``") 
           .addField("__**Autres**__ - (2)", "``/info`` ``/invite``")
           .addField("__**Anti-Raid**__ - (4)", "``/rules`` ``/sp`` ``/report`` ``/rb``")
           .setFooter("© 2018 SecurityProtect V.3.1.0", bot.user.displayAvatarURL) 
           .setTimestamp()
      message.channel.send(help_embed)
       console.log("Un utilisateur a effectué la commande d'aide !") 
     
}
     
	if(message.content === prefix + "info") {
		message.delete(message.author);
	 var info_embed = new Discord.RichEmbed()
	 .setTitle("Information Discord")
	 .addField("Nom du discord", message.guild.name)
	 .addField("ID", message.guild.id)
	 .addField("Owner du serveur", message.guild.owner)
	 .addField("Crée le", message.guild.createdAt)
	 .addField("Tu l'as rejoins le", message.member.joinedAt)
  .addField("Region", message.guild.region)
    .addField("Channels", message.guild.channels.size)
    .addField("Members", message.guild.memberCount)
    .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size)
    .addField("Roles", message.guild.roles.size)
	 .addField("Servers", bot.guilds.size)
	 .addField("Users", bot.users.size)
	 .setColor("#0800F6")
	 .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
	 .setTimestamp()
	 
message.channel.sendEmbed(info_embed)
         console.log("Un utilisateur a effectuer la commande d'info discord!")  
}
	
if(message.content === prefix + "rules") {
	
        var rules_embed = new Discord.RichEmbed()
        .setColor("#ED7F10")
        .setTitle("Voici le réglement !")
        .addField("1.Utilisateurs", "1.Spam participation à raid. 2. Non respect des TOS de Discord __**Selfbots**__. 3. Abus de pouvoir. 4. Destruction de serveur. 5.Harcelement __**DDOS,DOX**__ 6. Création de bot malveillant. 7. Pseudo incorect.")
        .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(rules_embed)
console.log("Commande effectue !")
  }
	
if(message.content.startsWith(prefix + "del")) {
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
	

    if (message.content.startsWith(prefix + 'kickall')) {
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

    if(message.content.startsWith(prefix + "clear")) {
	    message.delete(message.author)
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(msg => msg.delete(2000));
        })
    }
        
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

if(message.content.startsWith(prefix + "say")){
	
		message.delete(message.author);
	
	var text = message.content.split(' ').slice(1).join(' ')
	if(!text) return message.reply('Hey salut')
	message.channel.send(text)
}
	
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
message.channel.send("**Tous le staff de SecurityProtect à été alerté ! 🚨**")
bot.channels.find("id", "522508136884731904").send(y)
bot.channels.find("id", "522508136884731904").send(" <@&516633518609137688>")
message.delete()
}
	
	if(message.content.startsWith(prefix + "report")){
if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
		if(message.author.bot) return
var ara = message.content.substr(8)
if(!ara) return message.channel.send("**Entrez un message svp.**")
var y = new Discord.RichEmbed()
.setColor("ff0000")
.addField("report 🚨", ara)
.addField("🚔 Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
.addField("Depuis le Serveur", message.guild.name)
message.channel.send("**Tous le staff sp à été alerté ! 🚨**")
bot.channels.find("id", "511623673069961239").send(y)
bot.channels.find("id", "511623673069961239").send(" <@&516633518609137688>")
message.delete()
}
	
if(message.content.startsWith(prefix + "rb")){
if(message.channel.type !== 'text') return message.channel.send("❌ ***Les commandes en mp sont désactivées !***")
		if(message.author.bot) return
var ara = message.content.substr(4)
if(!ara) return message.channel.send("**Entrez un message svp.**")
var y = new Discord.RichEmbed()
.setColor("ff0000")
.addField("Report Bugs 🚨", ara)
.addField("🚔 Message envoyé par "+message.author.username+"#"+message.author.discriminator, "🆔 "+message.author.id)
.addField("Depuis le Serveur", message.guild.name)
message.channel.send("**les Administrateur de SecurityProtect à été alerté ! 🚨**")
bot.channels.find("id", "523494279046234112").send(y)
bot.channels.find("id", "523494279046234112").send(" <@&511106207784763422>")
message.delete()
}
  
      if (message.content.startsWith(prefix + "off")) {
        message.delete(message.author); 
        let argson = message.content.split(" ").splice(1);
        let vcsmsg = argson.join(" ")
        if(!message.guild.channels.find("name", "vcs-security")) return message.reply("Erreur, le channel vcs-security est introuvable");
        if(message.channel.name !== "vcs-security") return message.reply("Commande à effectuer dans vcs-security");
        if(!vcsmsg) return message.reply("Merci d'envoyer un message dans la globalité des discords");
    
        var replys = [];
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("SecurityProtect BOT - INFO", bot.user.avatarURL)
        .addField("Information",vcsmsg)
        .addField("Autres","**``Merci d'avoir lu.``**")
   .setFooter("© 2018 SecurityProtect", bot.user.displayAvatarURL)
        .setTimestamp()
        bot.channels.findAll('name' ,'vcs-security').map(channel => channel.send(embed))
}
  });
