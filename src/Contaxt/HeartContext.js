import { createContext, useContext, useEffect, useState } from "react";
import { AdsBodyContaxt } from "./AdsBodyContaxt";

export const HeartContext=createContext({
    listsave:()=>{},
    toggleHeart:()=>{}
})


export const HeartContextProvider=({children})=>{
    const adsbody=useContext(AdsBodyContaxt)
    const [savelist, setsavelist] = useState([]);


 
    const toggleHeart = (id) => {
      const isSaved = savelist.some((item) => item.id === id);
      if (isSaved) {
        const updatedList = savelist.filter((item) => item.id !== id);
        setsavelist(updatedList);
      } else {
        const find = adsbody.adsbodylist.find((item) => item.id === id);
        setsavelist([...savelist, find]);
      }
    };

    
const valueval={
    listsave:savelist,
    toggleHeart:toggleHeart
}
    return <HeartContext.Provider value={valueval}>{children}</HeartContext.Provider>
}