"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const natural_1 = require("natural");
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
    // Ask question
    ask(input) {
        let highestScore = 0;
        let highestKeyword = "";
        this.questions.forEach((question) => {
            question.questions.forEach((text) => {
                const distance = natural_1.JaroWinklerDistance(text, input);
                if (distance > highestScore) {
                    highestScore = distance;
                    highestKeyword = question.keyword;
                }
            });
        });
        try {
            if (highestScore >= 0.7) {
                return this.questions.get(highestKeyword).answer +
                    ` (${Math.round(highestScore * 1000) / 1000} likeness)`;
            }
            else {
                return "I am not sure what you are asking.";
            }
        }
        catch (ex) {
            return "I am not sure what you are asking.";
        }
    }
}
App.instance = new App();
exports.App = App;
