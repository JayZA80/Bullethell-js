class Boss {
    #name;
    #health;
    #patterns;
    #bonus = false;

    getName = () => {
        return this.#name;
    }
    setName = (name) => {
        this.#name = name;
    }

    getHealth = () => {
        return this.#health;
    }
    setHealth = (health) => {
        this.#health = health;
    }

    getPatterns = () => {
        return this.#patterns;
    }

    getBonus = () => {
        return this.#bonus;
    }
    toggleBonus = () => {
        this.#bonus = !this.#bonus;
    }

    constructor(name = 'Boss', health = 1000, patternList) {
        this.#name = name;
        this.#health = health;
        this.#patterns = patternList;
    }
}

export default Boss;
