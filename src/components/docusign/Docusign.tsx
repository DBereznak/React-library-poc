import React, {useState} from "react";

const Docusign = () => {

    const [ userLoggedIn, setLogIn ] = useState(false);

    function logInHandler(event: React.MouseEvent){
        event.preventDefault();
        setLogIn(!userLoggedIn);
    } 

    if(userLoggedIn){
        return (
            <div>
                <h1>Here is the document that needs to be sign</h1>
                <a href="/pdf/pdf_health_first.pdf" download> Health First PDF</a>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={logInHandler}>Login</button>
            </div>
        )
    }

}

export default Docusign;