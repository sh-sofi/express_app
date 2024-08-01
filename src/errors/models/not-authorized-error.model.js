const ERROR_MESSAGE = 'You don\'t have required permissions to access this resource';

export class NotAuthorizedError extends Error {
    constructor () {
        super(ERROR_MESSAGE);

        this.customMessage = ERROR_MESSAGE;
        this.statusCode = 403;
    }
}
