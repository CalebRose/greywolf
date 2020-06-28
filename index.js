require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const Enmap = require('enmap');
const fs = require('fs');
const config = require('./config.js');
const firebase = require('firebase/app');
const admin = require('firebase-admin');
const serviceAccount = require('./cred/serviceAccount.json');

// Firebase initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

client.config = process.env;

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity('The Greywolf Crusades');
});

// fs.readdir('./events/', (err, files) => {
//   if (err) return console.log(err);
//   files.forEach((file) => {
//     const event = require(`./events/${file}`);
//     let eventName = file.split('.')[0];
//     client.on(eventName, event.bind(null, client));
//   });
// });

// client.commands = new Enmap();
var dialog;
fs.readFile('./Dialog/dialog.json', 'utf8', (err, data) => {
  if (err) throw err;
  dialog = JSON.parse(data);
});

fs.readdir('./commands', (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split('.')[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(client.config.PREFIX) !== 0) return;

  const args = msg.content
    .slice(client.config.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, msg, args, db, dialog);
});

client.on('error', (e) => console.log(e));
client.on('warn', (e) => console.log(e));
client.on('debug', (e) => console.log(e));
client.login(process.env.BOT_TOKEN);
