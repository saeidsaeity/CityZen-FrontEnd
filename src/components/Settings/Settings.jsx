import { useContext, useState } from "react";
import styles from './Settings.module.css'
import { SettingsContext } from "../../Context/SettingsContext";
export default function Settings({setSettingsOpen}){
    // const [volume, setVolume] = useState(50); 
    const {volume,setVolume}=useContext(SettingsContext)
return (
    <>
    <div className={styles.bg} onClick={() => setSettingsOpen(false)} />
        <div className={styles.centered} >
            <div className={styles.modal}>
                <div className={styles.modalContent}> 
    <label>
          Volume:
          <input 
          type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />
          {volume}
         
        </label>
        </div>
        </div>
        </div>
        </>
       
)
}