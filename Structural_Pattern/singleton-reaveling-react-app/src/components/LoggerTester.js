import React,{useState} from 'react';
import logger from '../services/Logger';

const LoggerTester = ()=>{
    const [logs,setLogs] = useState([]);
    const handlelogs = ()=>{
        logger.log("User clicked button");
        setLogs([...logger.getLogs()]);
    }
     const handleClear = () => {
    logger.clearLogs();
    setLogs([]);
  };
    return(
        <div>
            <h2>Singleton pattern with Revealing Pattern for Logger</h2>
            <button onClick={handlelogs}>Click</button>
              <button onClick={handleClear} style={{ marginLeft: '10px' }}>Clear Logs</button>
            <ul>
                {logs.map((log,id)=>(
                    <li key={id}>{log}</li>
                ))}
            </ul>
        </div>
    )
}
export default LoggerTester;