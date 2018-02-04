"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamingAchievementsQuestion {
    constructor() {
        this.answer = "There will be achievements hidden around, near doors, where you can scan your con " +
            "badge. The boxes can tell you a \"ritual\" to perform, such as scanning your badge right after a STEW.\n" +
            "Info: https://www.nordicfuzzcon.org/Program/AchievementHunting";
        this.keyword = "gaming_achievements";
        this.questions = [
            "Are there hidden achievements?",
            "What are the achievement rituals?",
            "What is this box?",
        ];
    }
}
exports.GamingAchievementsQuestion = GamingAchievementsQuestion;
