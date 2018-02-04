import { Question } from "../lib/Question";

export class GamingAchievementsQuestion implements Question {
    public answer: string = "There will be achievements hidden around, near doors, where you can scan your con " +
        "badge. The boxes can tell you a \"ritual\" to perform, such as scanning your badge right after a STEW.\n" +
        "Info: https://www.nordicfuzzcon.org/Program/AchievementHunting";

    public keyword: string = "gaming_achievements";

    public questions: string[] = [
        "Are there hidden achievements?",
        "What are the achievement rituals?",
        "What is this box?",
    ];
}
