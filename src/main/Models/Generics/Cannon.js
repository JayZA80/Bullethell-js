class Cannon {
    #currentStage = 1;
    #secondaryCannons = false;
    #fullArmament = false;
    #baseDMG = 100;

    getBaseDMG = () => {
        return this.#baseDMG;
    }

    getSecondaryCannonStatus = () => {
        return this.#secondaryCannons;
    }
    toggleSecondaryCannons = () => {
        this.#secondaryCannons = !this.#secondaryCannons;
    }

    getFullArmamanetStatus = () => {
        return this.#fullArmament;
    }
    toggleFullArmament = () => {
        this.#fullArmament = !this.#fullArmament;
    }

    getCurrentStage = () => {
        return this.#currentStage;
    }
    nextStage = () => {
        if (this.#currentStage < 3) {
            this.#currentStage++;
        }
    }
    resetStage = () => {
        this.#currentStage = 1;
    }
    // updateStage = (x) => {
    //     if (x > 1) {
    //         this.#baseDMG = 100 * x;
    //     } else if (x > 2 && x < 3) {
    //         this.toggleSecondaryCannons();
    //     } else if (x === 3) {
    //         this.toggleFullArmament();
    //     }
    // }

    constructor() {
        this.#baseDMG;
        this.#fullArmament;
        this.#secondaryCannons;
        this.#currentStage;
    }
}

export default Cannon;
