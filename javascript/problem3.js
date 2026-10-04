function deepFreeze(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    for (const value of Object.values(obj)) {
        if (value !== null && typeof value === "object") {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
}

const config = deepFreeze({
    api: {
        baseUrl: "https://x.com",
        retries: 3
    },
    debug: false
});

config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl); // "https://x.com"
console.log(config.debug);       // false
console.log(Object.isFrozen(config.api)); // true