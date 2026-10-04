function diffObjects(oldObj, newObj) {
    const added = {};
    const removed = {};
    const changed = {};

    for (const key of Object.keys(newObj)) {
        if (!Object.hasOwn(oldObj, key)) {
            added[key] = newObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            };
        }
    }

    for (const key of Object.keys(oldObj)) {
        if (!Object.hasOwn(newObj, key)) {
            removed[key] = oldObj[key];
        }
    }

    return {
        added,
        removed,
        changed
    };
}

const oldObj = {
    name: "Emi",
    role: "Engineer",
    country: "Jamaica"
};

const newObj = {
    name: "Emi",
    role: "Senior Engineer",
    city: "Kingston"
};

console.log(diffObjects(oldObj, newObj));