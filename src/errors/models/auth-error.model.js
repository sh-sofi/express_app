const ERROR_MESSAGE = 'Incorrect login or password';

export class AuthError extends Error {
    constructor () {
        super(ERROR_MESSAGE);

        this.customMessage = ERROR_MESSAGE;
        this.statusCode = 400;
    }
}
