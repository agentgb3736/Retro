const Discord = require('discord.js');

const bot = new Discord.Client();


var prefix = "/";


bot.login(process.env.TOKEN);

bot.on("ready", () => {
  console.log("Je suis prêt")
  
bot.user.setActivity("[/help] I SP®『🚫』Anti-Raid 🚨", {type:"STREAMING"});    
});

bot.on("guildMemberAdd", member => {
  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")
  if(!bvn) return;
  const embed = new Discord.RichEmbed()
  .setColor('#0800F6')
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
  .setColor('#0800F6')
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

bot.on('message', message => { 

    if(message.content === "Salut"){
        message.reply("Hey");
        console.log('Le bot dit Bonjour');
    }

    if(message.content === "Bonsoir"){
    	message.delete(message.author);
        message.reply("Bonsoir :wave:");
        console.log('Le bot dit Bonsoir');
    }
    
    if(message.content === "noël"){
    	message.delete(message.author);
    	
    message.reply("Joyeux Noël !");
    console.log('Le bot fais peur');
    }
    
if(message.content === prefix + "invite") {
	message.delete(message.author);
        var invite_embed = new Discord.RichEmbed()
        .setColor("#0800F6")
        .setTitle("Invitation du Bot !")
	.addField("InviteBot", ('[Lien du Bot](https://discordbots.org/bot/511104745096609792)') , true)
	.setFooter("SecurityProtect®/!\『🚫』", bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(invite_embed)
  }
    
if(message.content === prefix + "help") {	message.delete(message.author); var help_embed = new Discord.RichEmbed() 
           .setColor("#0800F6") 
           .setTitle("Voici la page d'aide !") 
           .addField("__**Modération**__ - (3)", "``/clear`` ``/mute`` ``/unmute``") 
           .addField("__**Administration**__ - (2)", "``/ban`` ``/kick``") 
           .addField("__**Fun**__ - (3)", "``/say`` ``/vcs`` ``/8ball``") 
           .addField("__**Autres**__ - (2)", "``/info`` ``/invite``") 
           .setFooter("SecurityProtect®/!\『🚫』", bot.user.displayAvatarURL) 
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
	 .setColor("#0800F6")
	 .setFooter("SecurityProtect®『🚫』", bot.user.displayAvatarURL)
	 .setTimestamp()
	 
message.channel.sendEmbed(info_embed)
         console.log("Un utilisateur a effectuer la commande d'info discord!")  
} 

       
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

      if (message.content.startsWith(prefix + "vcs")) {
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
        .setAuthor("SecurityProtect BOT - VCS", bot.user.avatarURL)
        .addField("Serveur", message.guild.name, true)
        .addField("Utilisateur", message.author.tag, true)
        .addField("Message", vcsmsg)
        .setFooter("SecurityProtect®/!\『🚫』", bot.user.displayAvatarURL)
        .setTimestamp()
        bot.channels.findAll('name', 'vcs-security').map(channel => channel.send(embed)) 
          }
  
      if (message.content.startsWith(prefix + "alertes")) {
        message.delete(message.author); 
        let argson = message.content.split(" ").splice(1);
        let vcsmsg = argson.join(" ")
        if(!message.guild.channels.find("name", "🚨alertes")) return message.reply("Erreur, le channel 🚨alertes est introuvable");
        if(message.channel.name !== "🚨alertes") return message.reply("Commande à effectuer dans 🚨alertes");
        if(!vcsmsg) return message.reply("Merci d'envoyer un message dans la globalité des discords");
    
        var replys = [];
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("SecurityProtect BOT - INFO", bot.user.avatarURL)
        .addField("Information",vcsmsg)
        .addField("Autres","**``Merci d'avoir lu'.``**")
   .setFooter("SecurityProtect®/!\『🚫』", bot.user.displayAvatarURL)
        .setTimestamp()
        bot.channels.findAll('name' ,'🚨alertes').map(channel => channel.send(embed))
}
  });
