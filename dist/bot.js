"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./lib/App");
const fs_1 = require("fs");
const path_1 = require("path");
const natural_1 = require("natural");
const Telegraf = require("Telegraf");
const log = require("fancy-log");
log('Booting..');
const app = App_1.App.getInstance();
app.loadConfig();
app.telegram = new Telegraf(app.config.telegramApiKey);
app.classifier = new natural_1.BayesClassifier();
// Train the classifier
let files = fs_1.readdirSync(path_1.join('dist', 'data'));
files.forEach((file) => {
    let dataFile = require(`./data/${file}`);
    let dataName = file.split('.')[0];
    let dataClass = new dataFile[dataName]();
    app.questions.set(dataClass.keyword, dataClass);
    dataClass.train();
    log(`Data loaded: ${dataName}`);
});
app.classifier.train();
log('Training done.');
// Load Commands
fs_1.readdir(path_1.join('dist', 'commands'), (error, files) => {
    if (error) {
        log.error(error);
        throw error;
    }
    files.forEach((file) => {
        let cmdFile = require(`./commands/${file}`);
        let cmdFileName = file.split('.')[0];
        let cmdClass = new cmdFile[cmdFileName]();
        app.telegram.command(cmdClass.aliases, cmdClass.execute);
        log(`Commandhandler loaded: ${cmdFileName}`);
    });
});
// Load Events
fs_1.readdir(path_1.join('dist', 'events'), (error, files) => {
    if (error) {
        log.error(error);
        throw error;
    }
    files.forEach((file) => {
        let eventFile = require(`./events/${file}`);
        let eventName = file.split('.')[0];
        let eventClass = new eventFile[eventName]();
        app.telegram.on(eventClass.event, eventClass.handle);
        log(`Eventhandler loaded: ${eventName}`);
    });
});
app.telegram.startPolling();
