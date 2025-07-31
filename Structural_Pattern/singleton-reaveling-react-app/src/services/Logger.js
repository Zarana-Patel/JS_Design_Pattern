class Logger{
    constructor(){
        if(Logger.instance){
            return Logger.instance;
        }
        this.logs =[];
        Logger.instance = this;
    }
    log(message){
        const timestamp = new Date().toISOString();
        const entry = `[${timestamp}] ${message}`;
        this.logs.push(entry);
    }
    getLogs(){
        return this.logs;
    }
    clearLogs(){
        this.logs =[];
    }
}
//Revealing only one instance 

const loggerInstance = new Logger();

export default loggerInstance;