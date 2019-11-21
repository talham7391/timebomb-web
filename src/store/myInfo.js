import _ from "lodash";

export let myInfo = null;
let listeners = [];

export function setMyInfo(i) {
    myInfo = i;
    notifyListeners();
}

function notifyListeners() {
    _.each(listeners, it => it(myInfo));
}

export function addListener(listener) {
    listeners.push(listener);
}

export function removeListener(listener) {
    listeners = _.remove(listeners, it => it === listener);
}
