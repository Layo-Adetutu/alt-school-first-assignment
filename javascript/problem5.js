function validateSchema(obj, schema) {
    const errors = [];

    for (const [key, expectedType] of Object.entries(schema)) {
        if (!Object.hasOwn(obj, key)) {
            errors.push(`missing property '${key}'`);
            continue;
        }

        const actualType = typeof obj[key];

        if (actualType !== expectedType) {
            errors.push(
                `${key}: expected ${expectedType}, got ${actualType}`
            );
        }
    }

    return errors;
}

const schema = {
    name: "string",
    age: "number",
    isAdmin: "boolean"
};

console.log(
    validateSchema(
        {
            name: "Ada",
            age: 21,
            isAdmin: false
        },
        schema
    )
);

console.log(
    validateSchema(
        {
            name: "Ada",
            age: "21"
        },
        schema
    )
);