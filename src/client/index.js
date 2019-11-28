import axios from 'axios';
import { sleep } from "utils";
import io from 'socket.io-client';

import PlayersStore from 'store/players';
import GameStore from 'store/game';
import MyInfoStore from 'store/myInfo';

const serviceUrl = "http://localhost:3000";

let socket = null;
let name = null;
let roomId = null;

export const getConnectionInfo = () => ({
    name,
    roomId,
});

export function connect(n, rid) {
    if (socket != null) {
        if (socket.connected && name === n && roomId === rid) {
            return;
        } else {
            disconnect();
        }
    }

    name = n;
    roomId = rid;
    socket = io(`${serviceUrl}/${roomId}`);

    socket.on("connect", () => {});

    socket.on("connected-players", data => {
        PlayersStore.setValue(data);
    });

    socket.on("game-started", () => {
        socket.emit("get-info");
    });

    socket.on("game-state", state => {
        GameStore.setValue(state);
    });

    socket.on("info", info => {
        MyInfoStore.setValue(info);
    });

    socket.on("wire-snipped", () => {
        socket.emit("get-info");
    });

    socket.on("game-over", team => {
        console.log(`${team} won the game!`);
    });

    socket.on("new-game", () => {
        socket.emit("get-info");
    });

    socket.emit("set-name", name);
}

export const disconnect = () => {
    if (socket != null) {
        socket.disconnect();
    }
    socket = null;
};

export function startGame() {
    if (socket != null && socket.connected) {
        socket.emit("start-game");
    }
}

export async function createGame() {
    await sleep(1000);
    const res = await axios.post(`${serviceUrl}/create-game`);
    return res.data;
}

export async function checkGame(roomId) {
    await sleep(1000);
    try {
        await axios.get(`${serviceUrl}/check/${roomId}`);
        return true;
    } catch {
        return false;
    }
}

export async function snipWire(idx) {
    return new Promise((res, rej) => {
        if (socket != null && socket.connected) {
            socket.emit("snip-wire", idx, (err, wireType) => {
                if (err == null) {
                    res(wireType);
                } else {
                    rej(err);
                }
            });
        } else {
            rej();
        }
    });
}

export async function startNewGame() {
    socket.emit("new-game");
}