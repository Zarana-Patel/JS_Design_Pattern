import React ,{useState} from 'react';
import { logger } from '../services/Loggers';

const Logger2  =()=>{
    const [logs,setLogs] = useState([]);
    const handlelogs =()=>{
        logger.log("user click the button from Logger2 component");
        setLogs([...logger.getLogs()]);
    }

    return(
        <>
            <h2>Logger Singleton Pattern</h2>
            <button onClick={handlelogs}>Click</button>
                <ul>
                    {logs.map((log,id)=>(
                        <li key={id}>{log}</li>
                    ))}
                </ul>
        </>
    )
}
export default Logger2;