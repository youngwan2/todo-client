

export function getToken(key="accessToken") {
    try {
        localStorage.getItem(key);
    } catch (e) {
        if (e instanceof Error) {
            throw new Error("Access Token Not Available:"+ e.message);
        }
    }
}


export function setToken(key:string, value:string){
    localStorage.setItem(key, value);
}