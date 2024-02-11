import { useState , useEffect } from "react"
import {MENU_API} from "./constants"


const useMenu=(id)=>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])
    
    const fetchMenu = async () => {
            const data = await fetch(MENU_API+id+"&catalog_qa=undefined&submitAction=ENTER");
            const jsonData = await data.json();
            
            console.log(jsonData);

            setResInfo(jsonData)
        }
    console.log(resInfo);
    
    return resInfo;
}

export default useMenu;