class Shooter {
    #secondaryCannons = false;
    #fullArmament = false;
    #baseDMG = 100;

    getBaseDMG = () => {
        return this.#baseDMG;
    }

    toggleSecondaryCannons = () => {
        this.#secondaryCannons = !this.#secondaryCannons;
    }

    toggleFullArmament = () => {
        this.#fullArmament = !this.#fullArmament;
    }

    updateStage = (x) => {
        if (x > 1) {
            this.#baseDMG = 100 * x;
        } else if (x > 2 && x < 3) {
            this.toggleSecondaryCannons();
        } else if (x === 3) {
            this.toggleFullArmament();
        }
    }
}

export default Shooter;
