export default class ErrorRepository{
    constructor() {
        this.errors = new Map([
            [400, 'Bad Request'],
            [401, 'Unauthorized'],
            [402, 'Payment Required'],
            [403, 'Forbidden'],
            [404, 'Not found'],
            [405, 'Method Not Allowed'],
            [500, 'Internal Server Error'],
            [501, 'Not Implemented'],
            [502, 'Bad Gateway'],
            [503, 'Service Unavailable'], 
            [504, 'Gateway Timeout'], 
            [505, 'HTTP Version Not Supported']
        ])
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code)
        } else {
            return 'Unknown error'
        }
    }
}