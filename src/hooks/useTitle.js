import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        //document.title = title
        document.title = `${title} - Chef Recipe Hunter Client`
    },[title])
}

export default useTitle;