import axios from 'axios';
import { sleep } from "utils";
import io from 'socket.io-client';

const serviceUrl = "http://localhost:3000";

function connectToService() {
    // const socket = io.connect(serviceUrl);
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
