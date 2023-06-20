/*==================================================================================
[0] Imports
==================================================================================*/
import { useEffect } from "react";


/*==================================================================================
[?] Generate Final
==================================================================================*/
const Blob = () => {
    useEffect(() => {
        const myBlob = document.getElementById("blob");

        if(myBlob) {
            document.body.onpointermove = event => {
                const {clientX, clientY} = event;
        
                myBlob.animate({
                    left: `${clientX - 150}px`,
                    top: `${clientY - 100}px`
                }, {duration: 3000, fill: "forwards"});
            }
        }
    }, [])
    
    
    
    return (
        <div>
            <div id="blob" className="blob"></div>
            <div id="blur" className="blur"></div>
        </div>
        
    );
}


export default Blob;
