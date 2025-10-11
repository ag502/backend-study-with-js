export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hello World",
            version: "1.0.0",
        }
    },
    // api docs의 위치
    apis: ["./swagger/*.swagger.js"]
}