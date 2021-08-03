import React from "react";
import preloader from "../../assets/photos/Spinner-1s-200px.svg";

let Preloader= (props) => {
    return <div>
        <img src={preloader} alt={"loading"}/>

    </div>
}
export default Preloader;