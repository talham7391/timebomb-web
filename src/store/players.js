import _ from "lodash";

export let connectedPlayers = [];
let listeners = [];

export function setConnectedPlayers(cp) {
    connectedPlayers = cp;
    notifyListeners();
}

function notifyListeners() {
    _.each(listeners, it => it(connectedPlayers));
}

export function addListener(listener) {
    listeners.push(listener);
}

export function removeListener(listener) {
    listeners = _.remove(listeners, it => it === listener);
}
