import React from "react";



const Header = ()=>{

    return (
                        <div className="row-view">
                    <span className="text" >
                        {"Nktravel"}
                    </span>
                    <span className="text2" >
                        {"Home"}
                    </span>
                    <span className="text2" >
                        {"Destinations"}
                    </span>
                    <span className="text2" >
                        {"About Us"}
                    </span>
                    <span className="text3" >
                        {"Contact"}
                    </span>
                    <button className="button"
                        onClick={() => alert("Pressed!")}>
                        <span className="text4" >
                            {"Login/Signup"}
                        </span>
                    </button>
                    <button className="button2"
                        onClick={() => alert("Pressed!")}>
                        <span className="text5" >
                            {"Hotels login/signup"}
                        </span>
                    </button>
                </div>
    )
}


export default Header;