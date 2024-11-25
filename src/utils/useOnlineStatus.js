import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlinestatus, setonlinestatus] = useState(true);
    useEffect(() =>{
        window.addEventListener("offline", (event) => {
            setonlinestatus(false)
        });
        window.addEventListener("online", (event) => {
            setonlinestatus(true)
        });
    },[])

    return onlinestatus;
}

export default useOnlineStatus;