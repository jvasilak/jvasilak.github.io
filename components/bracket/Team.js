class Team {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
    }

    get id() {
        return this.rank;
    }

    is_bye() {
        return this.rank == -1;
    }
}