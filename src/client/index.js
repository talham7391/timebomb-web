import axios from 'axios';
import { sleep } from "utils";
import io from 'socket.io-client';

import * as playersStore from 'store/players';
import * as gameStore from 'store/game';
import * as myInfoStore from 'store/myInfo';

const serviceUrl = "http://localhost:3000";

let socket = null;

export function connectToService(name, roomId) {
    if (socket != null && socket.connected) {
        return;
    }

    socket = io(`${serviceUrl}/${roomId}`);

    socket.on("connect", () => {});

    socket.on("connected-players", data => {
        playersStore.setConnectedPlayers(data);
    });

    socket.on("game-state", state => {
        gameStore.setGameState(state);
        socket.emit("get-info");
    });

    socket.on("info", info => {
        myInfoStore.setMyInfo(info);
    });

    socket.emit("set-name", name);
}

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
