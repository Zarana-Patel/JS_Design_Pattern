class Logger{
    constructor(){
        Logger.instance = this;
        this.logs = [];
    }
    log(message){
        const timestamp = new Date().toISOString();
        const entry = `[${timestamp}] ${message}`;
        this.logs.push(entry);
    }
    getLogs(){
        return this.logs;
    }
}
export const logger = new Logger();