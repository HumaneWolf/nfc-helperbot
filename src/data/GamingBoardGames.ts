import { Question } from "../lib/Question";

export class GamingBoardGames implements Question {
    public answer: string = "Card and board games will be available in the arcade, as well as in a dedicated room. " +
        "You are free to bring your own games, friends, or to drop in and play with others there.\n" +
        "In addition, there will be a Dungeons and Dragons tournament. It will follow 5th edition rules," +
        "and will take about 2.5 hours per game.\n" +
        "Info: https://www.nordicfuzzcon.org/Program/BoardGames";

    public keyword: string = "boop";

    public questions: string[] = [
        "Boop!",
        "Beep!",
    ];
}
