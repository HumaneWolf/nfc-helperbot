"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const Telegraf = require("Telegraf");
const App_1 = require("./lib/App");
const log = require("fancy-log");
log("Booting..");
const app = App_1.App.getInstance();
app.loadConfig();
app.telegram = new Telegraf(app.config.telegramApiKey);
// Train the classifier
const questionFiles = fs_1.readdirSync(path_1.join("dist", "data"));
questionFiles.forEach((file) => {
    const dataFile = require(`./data/${file}`);
    const dataName = file.split(".")[0];
    const dataClass = new dataFile[dataName]();
    app.questions.set(dataClass.keyword, dataClass);
    log(`Data loaded: ${dataName}`);
});
// Load Commands
fs_1.readdir(path_1.join("dist", "commands"), (error, files) => {
    if (error) {
        log.error(error);
        throw error;
    }
    files.forEach((file) => {
        const cmdFile = require(`./commands/${file}`);
        const cmdFileName = file.split(".")[0];
        const cmdClass = new cmdFile[cmdFileName]();
        app.telegram.command(cmdClass.aliases, cmdClass.execute);
        log(`Commandhandler loaded: ${cmdFileName}`);
    });
});
// Load Events
fs_1.readdir(path_1.join("dist", "events"), (error, files) => {
    if (error) {
        log.error(error);
        throw error;
    }
    files.forEach((file) => {
        const eventFile = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        const eventClass = new eventFile[eventName]();
        app.telegram.on(eventClass.event, eventClass.handle);
        log(`Eventhandler loaded: ${eventName}`);
    });
});
log("Starting polling.");
app.telegram.startPolling();
