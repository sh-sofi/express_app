export class BadRequestError extends Error {
    constructor (message) {
        super(message);

        this.customMessage = message;
        this.statusCode = 400;
    }
}