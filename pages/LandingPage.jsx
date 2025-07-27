import React, { useState } from "react";
import { Link } from "react-router-dom";


const LandingPage = (props) => {
    const [input1, onChangeInput1] = useState('');
    const [input2, onChangeInput2] = useState('');
    const [input3, onChangeInput3] = useState('');
    const [input4, onChangeInput4] = useState('');

    const [userPrice, setUserPrice] = useState(100);


    const [destinationClicked, setDestinationClicked] = useState(false);

    const [checkInClicked, setCheckInClicked] = useState('')
    const [selectedDateCout, setSelectedDateCout] = useState('')

    const [checkOutClicked, setCheckOutClicked] = useState('')
    const [selectedDateCin, setSelectedDateCin] = useState('')


    

    return (
        <div className="contain">
            <div className="scroll-view">

                <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/s78o7cu0_expires_30_days.png"}
                    className="image"
                />
                <div className="column">
                    <div className="column2">
                        <span className="text6" >
                            {"The best hotels selling platform"}
                        </span>
                        <div className="column3">
                            <span className="text7" >
                                {"We have all best & patient Vendors selling group tickets"}
                            </span>
                            <div className="box">
                            </div>
                        </div>
                    </div>
                    <div className="absolute-row-view">
                        <img

                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/9st81hzg_expires_30_days.png"}
                            className="image2"
                        />
                        <div className="column4">
                            <span className="text8" onClick={() => { setDestinationClicked(!destinationClicked) }} >
                                {"Destination"}
                            </span>
                            <div className="dropdown">
                                {destinationClicked && (
                                    <ul className="dropdown-menu">
                                        <li>Naran</li>
                                        <li>Kaghan</li>
                                        <li>Hunza</li>
                                    </ul>
                                )}
                            </div>
                            <span className="text9" >
                                {"Select"}
                            </span>
                        </div>
                        <img
                            style={{ "transform": destinationClicked ? "rotate(180deg)" : "" }}
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/yhrsufwl_expires_30_days.png"}
                            className="image3"
                        />
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/ldev3xnh_expires_30_days.png"}
                            className="image2"
                        />
                        <div className="column5">
                            <span className="text8" onClick={()=>{setCheckInClicked(!checkInClicked)}} >
                                {"Check in"}
                            </span>
                            <span className="text9" >
                                {"Select"}
                            </span>

                            <div className="dropdown">
                                {checkInClicked && (
                                    <input
                                        type="date"
                                        value={selectedDateCin}
                                        onChange={(e) => setSelectedDateCin(e.target.value)}
                                    />
                                )}
                            </div>
                        </div>
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/6j4kxvoq_expires_30_days.png"}
                            className="image4"
                        />
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/4ijrw2ml_expires_30_days.png"}
                            className="image5"
                        />
                        <div className="column6">
                            <span className="text8" onClick={(e)=>setCheckOutClicked(!checkOutClicked)}>
                                {"Check out"}
                            </span>
                            <span className="text9" >
                                {"Select"}
                            </span>

                            {checkOutClicked && (
                                    <input
                                        type="date"
                                        value={selectedDateCout}
                                        onChange={(e) => setSelectedDateCout(e.target.value)}
                                    />
                                )}
                        </div>
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/0feifp07_expires_30_days.png"}
                            className="image6"
                        />
                        <div className="column7">
                            <span className="text8" >
                                {"Guest"}
                            </span>
                            <span className="text9" >
                                {"Select"}
                            </span>
                        </div>
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/zvesq43m_expires_30_days.png"}
                            className="image7"
                        />
                        <div className="column8">
                            <span className="text10" >
                                {"Your Price"}
                            </span>
                            <div className="row-view2">
                                <div className="view"
                                    style={{
                                        backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/d791vtf5_expires_30_days.png)',
                                    }}
                                >
                                    <span className="text11" onClick={(e)=>setUserPrice(userPrice-100)} >
                                        {"-"}
                                    </span>
                                </div>
                                <span className="text12" >
                                    {"~>"}{userPrice}
                                </span>
                            </div>
                        </div>
                        <div className="view2"
                            style={{
                                backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/8jhdfyyu_expires_30_days.png)',
                            }}
                        >
                            <span className="text11"  onClick={(e)=>setUserPrice(userPrice+100)}>
                                {"+"}
                            </span>
                        </div>
                    </div>
                    <div className="absolute-view">
                        <Link className="text13" to={"search"}>
                        <span >
                            {"Search Now"}
                        </span>
                        </Link>
                        
                    </div>
                </div>
                <div className="row-view3">
                    <div className="column9">
                        <span className="text14" >
                            {"Top Destinations"}
                        </span>
                        <span className="text15" >
                            {"Discover our most popular travel spots around the Pakistan, handpicked to offer you the best experiences"}
                        </span>
                    </div>
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/1f7btbm7_expires_30_days.png"}
                        className="image8"
                    />
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/0nd5h4dz_expires_30_days.png"}
                        className="image8"
                    />
                </div>
                <div className="row-view4">
                    <div className="column10">
                        <div className="view3">
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/gx9ukdbt_expires_30_days.png"}
                                className="image9"
                            />
                        </div>
                        <input
                            placeholder={"asd"}
                            value={input1}
                            onChange={(event) => onChangeInput1(event.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="column11">
                        <div className="view3">
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/sd4owkm5_expires_30_days.png"}
                                className="image9"
                            />
                        </div>
                        <input
                            placeholder={"asd"}
                            value={input2}
                            onChange={(event) => onChangeInput2(event.target.value)}
                            className="input2"
                        />
                    </div>
                    <div className="column10">
                        <div className="view3">
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/3h4y2di2_expires_30_days.png"}
                                className="image9"
                            />
                        </div>
                        <input
                            placeholder={"sd"}
                            value={input3}
                            onChange={(event) => onChangeInput3(event.target.value)}
                            className="input3"
                        />
                    </div>
                    <div className="column12">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l7vQbb0GE2/go6kczg6_expires_30_days.png"}
                            className="image10"
                        />
                        <input
                            placeholder={"asd"}
                            value={input4}
                            onChange={(event) => onChangeInput4(event.target.value)}
                            className="input4"
                        />
                    </div>
                </div>
                <div className="view4">
                    <div className="row-view5">
                        <div className="box2">
                        </div>
                        <div className="box3">
                        </div>
                        <div className="box3">
                        </div>
                        <div className="box3">
                        </div>
                        <div className="box3">
                        </div>
                    </div>
                </div>
                <div className="column13">
                    <div className="view5">
                        <span className="text16" >
                            {"Customized Tours"}
                        </span>
                    </div>
                    <div className="view6">
                        <span className="text17" >
                            {"Ready to explore? Book now or reach out for more information!"}
                        </span>
                    </div>
                    <div className="view7">
                        <span className="text18" >
                            {"We have some of best travel agencies in our \npanel help you to find the best rates for your\ndestinations"}
                        </span>
                    </div>
                    <button className="button3"
                        onClick={() => alert("Pressed!")}>
                        <span className="text19" >
                            {"Find a Quote"}
                        </span>
                    </button>
                </div>
                
            </div>
        </div>
    )
}


export default LandingPage;