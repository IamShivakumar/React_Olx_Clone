import { createContext,useState } from "react";

export const productDetailContext=createContext(null)

function Post({children}){
    const [postDetails,setPostDetails]=useState(null)
    return(
        <productDetailContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </productDetailContext.Provider>
    )
}

export default Post
