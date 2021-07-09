const rs = require('readline-sync')
require('colors')

console.log(`
╔═════════════════════════════════╗
║--> 1. Lancer Le Selfbot         ║
╟─────────────────────────────────╢
║--> 2. Mettre Le Selfbot à jour  ║
╚═════════════════════════════════╝
`)

var lancement = rs.question(`Que Voulez Vous Faire ?: `.magenta)


if (lancement == '1') {
  require('./teamrsz/index')
} else {
  if (lancement == '2') {
    const fetch = require('node-fetch')
    const fs = require('fs')
    
    fetch('https://raw.githubusercontent.com/r3ngansasuke/Discord-Selfbot/main/index.js')
    .then(res => res.text())
    .then(body =>
        fs.writeFile('./teamrsz/index.js', body, err => {
            if (err) console.log(err)
        }));

        fetch('https://raw.githubusercontent.com/r3ngansasuke/Discord-Selfbot/main/Data/blacklist.json.')
    .then(res => res.text())
    .then(body =>
        fs.writeFile('./Data/blacklist.json', body, err => {
            if (err) console.log(err)
        }));
  }
}