import { resolve } from "path";

import { BayesClassifier } from "natural";
import { Telegraf } from "Telegraf";

import { Question } from "./Question";

export class App {
    // Singleton class.
    public static getInstance(): App {
        return App.instance;
    }

    private static instance: App = new App();

    // Class vars.
    public config;
    public questions: Map<string, Question>;

    public classifier: BayesClassifier;
    public telegram: Telegraf;

    // Constructor
    constructor() {
        if (App.getInstance()) {
            throw new Error("Error: Could not create app. Use App.getInstance() instead of new.");
        }
        App.instance = this;
        this.questions = new Map();
    }

    // Load configuration file.
    public loadConfig() {
        this.config = require(`${resolve(".")}/config/config.json`);
    }

    // As question
    public ask(question: string): string {
        try {
            // console.log(this.classifier.getClassifications(question));

            const keyword = this.classifier.classify(question);
            const q = this.questions.get(keyword);
            return q.answer;
        } catch (ex) {
            return "I am not sure what you are asking.";
        }
    }
}
