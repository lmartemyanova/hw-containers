export default class Character {
    constructor(name, strategy) {
        this._name = name;
        this._strategy = strategy;
        this.level = 1;
    }

    get name() {
        return this._name;
    };
    
    set name(value) {
        this._name = value;
    };

    get strategy() {
        return this._strategy;
    };

    set strategy(value) {
        this._strategy = value;
    };
}