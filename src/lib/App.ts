import { resolve } from "path";

import { JaroWinklerDistance } from "natural";
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

    // Ask question
    public ask(input: string): string {
        let highestScore = 0;
        let highestKeyword = "";

        this.questions.forEach((question) => {
            question.questions.forEach((text) => {
                const distance = JaroWinklerDistance(text, input);
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
            } else {
                return "I am not sure what you are asking.";
            }
        } catch (ex) {
            return "I am not sure what you are asking.";
        }
    }
}
