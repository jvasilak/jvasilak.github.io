class Bracket {
    constructor(num_teams) {
        this.num_teams = num_teams;
        this.rounds = Math.floor(Math.log(num_teams) / Math.log(2));
        this.num_games = num_teams - 1;
        this.team_list = []
        this.match_list = []
    }

    set_teams(teams) {
        this.team_list = teams;
    }

    set_matches(matches) {
        this.match_list = matches;
    }
}