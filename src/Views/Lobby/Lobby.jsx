import { Suspense, useEffect } from "react";
import { insertCoin } from "playroomkit";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";

function Lobby(){
    const navigate = useNavigate()

    useEffect(()=>{
        insertCoin({ matchmaking: true,
        discord:true,gameId: "PZxGB0xEUmXMvazEvEmC"
    }).then(()=>{
            navigate('/gameboard')
        })
    },[])
    return (
        <Suspense fallback={null}>
            <div></div>
        </Suspense>
    )
}



export default Lobby