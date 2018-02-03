import { App } from './lib/App';

import { readdirSync, readdir } from 'fs';
import { join } from 'path';

import { BayesClassifier } from 'natural';
import * as Telegraf from 'Telegraf';

import * as log from 'fancy-log';

log('Booting..');

const app: App = App.getInstance();
app.loadConfig();

app.telegram = new Telegraf(app.config.telegramApiKey);
app.classifier = new BayesClassifier();

// Train the classifier
let files = readdirSync(join('dist', 'data'));
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
readdir(join('dist', 'commands'), (error, files) => {
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
readdir(join('dist', 'events'), (error, files) => {
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
