class Match {
    constructor(id, team1, team2, round, next_game) {
        this.id = id;
        this.team1 = team1;
        this.team2 = team2;
        this.round = round;
        this.next_game = next_game;
        if (this.is_bye) {
            this.winner = team1;
        } else {
            this.winner = null;
        }
    }

    is_bye() {
        if (team2.check_bye()) {
            return true;
        }
        return false
    }

    get result() {
        return this.winner;
    }
}