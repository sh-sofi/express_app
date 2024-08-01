const ERROR_MESSAGE = 'The server has failed to identify the user';

export class NotAuthenticatedError extends Error {
    constructor () {
        super(ERROR_MESSAGE);

        this.customMessage = ERROR_MESSAGE;
        this.statusCode = 401;
    }
}
