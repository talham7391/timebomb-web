import _ from "lodash";

export let gameState = null;
let listeners = [];

export function setGameState(s) {
    gameState = s;
    notifyListeners();
}

function notifyListeners() {
    _.each(listeners, it => it(gameState));
}

export function addListener(listener) {
    listeners.push(listener);
}

export function removeListener(listener) {
    listeners = _.remove(listeners, it => it === listener);
}
