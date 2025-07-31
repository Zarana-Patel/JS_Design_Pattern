import React ,{useState} from 'react';
import { logger } from '../services/Loggers';

const LoggerTester  =()=>{
    const [logs,setLogs] = useState([]);
    const handlelogs =()=>{
        logger.log("user click the button from LoggerTester Component");
        setLogs([...logger.getLogs()]);
    }

    return(
        <>
            <h2>Logger Singleton Pattern in React App</h2>
            <button onClick={handlelogs}>Click</button>
                <ul>
                    {logs.map((log,id)=>(
                        <li key={id}>{log}</li>
                    ))}
                </ul>
        </>
    )
}
export default LoggerTester;