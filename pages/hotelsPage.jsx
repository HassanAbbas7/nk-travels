import React from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const HotelsPage = ()=>{

const navigate = useNavigate();
	const [parms] = useSearchParams();

	const requestId = parms.get('request_id')
	const [status, setStatus] = useState('pending');
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		const interval = setInterval(async () => {
			const res = await axios.get(`https://hassanabbasnaqvi.pythonanywhere.com//api/check-status/${requestId}/`);
			if (res.data.status === 'ready') {
				setStatus('ready');
				setHotels(res.data.hotels);
				clearInterval(interval);
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [requestId]);


    return (<div className="flex flex-col bg-white">
			<div className="flex flex-col items-start self-stretch bg-[#F1F1F1] h-[1071px]">
                 <div className="flex items-start mb-[50px] ml-[158px] gap-[33px]">
                {
                    hotels.map((value, index)=>{

                        return (
                           
					<div className="flex flex-col shrink-0 items-start bg-[#A1A1A1] py-[23px] rounded-[11px]">
						<div className="bg-[#D9D9D9] w-[217px] h-48 mb-[21px] mx-[23px] rounded-md" style={{backgroundImage: `url(${value.imageLink})`}}>
						</div>
						<p>{value.name}</p>
                        <p>{value.locationLink}</p>
                        <p>{value.price}</p>
					</div>
				

                        )
                    })
                }
				</div>
			</div>
		</div>)
}

export default HotelsPage