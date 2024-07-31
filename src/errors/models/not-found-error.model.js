export class NotFoundError extends Error {
    constructor (message) {
        super(message);

        this.customMessage = message;
        this.statusCode = 404;
    }
}
