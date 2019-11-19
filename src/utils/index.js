
export async function sleep(time) {
    await new Promise(res => { setTimeout(res, time) });
}
