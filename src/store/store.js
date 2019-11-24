
export default class Store {

    constructor(initialValue) {
        this.value = initialValue;
        this.listeners = {};
    }

    getValue() {
        return this.value;
    }

    setValue(val) {
        this.value = val;
        this.notifyListeners();
    }

    notifyListeners() {
        Object.values(this.listeners).forEach(it => it(this.value));
    }

    addListener(l) {
        let key = null;
        while (true) {
            const potentialKey = `${Math.round(Math.random() * 100000000)}`;
            if (this.listeners[potentialKey] == null) {
                key = potentialKey;
                break;
            }
        }
        this.listeners[key] = l;
        return key;
    }

    removeListener(key) {
        delete this.listeners[key];
    }
}
