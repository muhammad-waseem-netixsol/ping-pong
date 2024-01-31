import styles from './styles.module.css';
import React, { useState, useRef, createContext, useEffect } from 'react';
import HandleGame from './handleGame';
import ButtonGame from './button';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import socket from '@/socket-connection';

export const GameContext = createContext();

const PinPonGame = ({getNameHandler}):JSX.Element => {
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const [fuser, SetFUser]  = useState<any>("");
    const [suser, SetSUser]  = useState<any>("");
    const [pauseGame, setPauseGame] = useState<boolean>(true);
    const [restartGame, setRestartGame] = useState<boolean>(false);
    const [firstPlay, setFirstPlay] = useState<undefined>(undefined);
    // useEffect(() => {
    //     socket.on("testtwo", (msg:string)=> {
    //         alert(msg)
    //     });
    // }, []);
//    useEffect(()=> {
//     console.log(socket)
//     socket.on("gameState",(payload:any)=> {
//         console.log(payload)
//     })
//    }, []);
//    const position = {x:10,y:10}
//     const onPlayGame =  () => {
//         socket.emit("startGame",position);
//         console.log("emitting")
//     };
   
    return (
        <>  
            <div className="block sm:hidden font-extrabold text-[#3f9150] text-sm">*The screen width must be more than 600px to play <SentimentDissatisfiedIcon className="text-[#3f9150] !block !text-9xl !w-auto pl-1/2" /> </div>
            <div className="overflow-hidden mt-20 my-30 w-full hidden sm:block">
                <div ref={gameAreaRef} className={styles.area}>
                    <GameContext.Provider value={{gameAreaRef, pauseGame, setPauseGame, restartGame, firstPlay, setFirstPlay}}>
                        <div className={styles.line}></div>
                    <HandleGame />
                    </GameContext.Provider>
                </div>
                {/* <button onClick={onPlayGame}>play the game</button> */}
                <div
                    className="flex flex-row justify-around mt-3">
                    <ButtonGame 
                        values={{class:'', content:'Pause'}}
                        onClick={() => setPauseGame(true)} />
                    <ButtonGame 
                        values={{class:'', content:'Play'}}
                        onClick={() => {
                        if(fuser === ""){
                            const name1 = prompt("Enter First User...");
                            SetFUser(name1);
                        }
                        if(suser === ""){
                            const name2 = prompt("Enter second name");
                            SetSUser(name2);
                        }  
                        console.log(fuser, suser)
                        getNameHandler({fname: fuser, sname:suser})  
                        setPauseGame(false)
                        } }/>
                    <ButtonGame 
                        values={{class:'', content:'Restart'}}
                        onClick={() => setRestartGame(prevRestart => !prevRestart)} />
        </div>
                <p 
                    className="font-bold text-xs mt-4">
                    * W,S on keybord to LeftPlayer, arrow directions on the keyboard to RightPlayer
                </p>
            </div>
        </>
    )
}

export default PinPonGame