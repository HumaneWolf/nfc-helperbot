"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class App {
    // Constructor
    constructor() {
        if (App.getInstance()) {
            throw new Error("Error: Could not create app. Use App.getInstance() instead of new.");
        }
        App.instance = this;
        this.questions = new Map();
    }
    // Singleton class.
    static getInstance() {
        return App.instance;
    }
    // Load configuration file.
    loadConfig() {
        this.config = require(`${path_1.resolve(".")}/config/config.json`);
    }
    // As question
    ask(question) {
        try {
            // console.log(this.classifier.getClassifications(question));
            const keyword = this.classifier.classify(question);
            const q = this.questions.get(keyword);
            return q.answer;
        }
        catch (ex) {
            return "I am not sure what you are asking.";
        }
    }
}
App.instance = new App();
exports.App = App;
