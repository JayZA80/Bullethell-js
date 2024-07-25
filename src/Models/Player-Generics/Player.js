class Player {
    #username;
    #power = 1;
    #lives = 3;
    #bombs = 3;
    #cannon;

    getUsername = () => {
        return this.#username;
    }
    setUsername = (username) => {
        this.#username = username;
    }

    getPower = () => {
        return this.#power;
    }
    powerModifier = (x) => {
        this.#power = this.#power * x;
    }

    getLives = () => {
        return this.#lives;
    }
    gainLife = () => {
        this.#lives++;
    }
    loseLife = () => {
        this.#lives--;
    }

    getBombs = () => {
        return this.#bombs;
    }
    useBomb = () => {
        this.#bombs--;
    }
    gainBomb = () => {
        this.#bombs++;
    }

    getCannon = () => {
        return this.#cannon;
    }

    constructor(username = 'Player', cannon) {
        this.#username = username;
        this.#cannon = cannon;
    }
}

export default Player;
