import React from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const LoadingScreen = () => {
	const navigate = useNavigate();
	const [parms] = useSearchParams();

	const requestId = parms.get('request_id')
	const [status, setStatus] = useState('pending');

	useEffect(() => {
		const interval = setInterval(async () => {
			const res = await axios.get(`https://hassanabbasnaqvi.pythonanywhere.com//api/check-status/${requestId}/`);
			if (res.data.status === 'ready') {
				setStatus('ready');
				clearInterval(interval);
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [requestId]);


	if (!requestId) {
		return <><p>No data received</p></>
	}

	if (status == "ready"){
		navigate("/hotels?request_id="+requestId);
	}



	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F1F1F1] h-[882px]">
				<div className="self-stretch bg-[#D9D9D9D9] pt-[99px] pb-[347px] rounded-[31px]">
					<div className="flex flex-col items-start self-stretch bg-[#D9D9D9] pt-[57px] pb-[72px] ml-[411px] mr-[363px] rounded-[9px] border-2 border-solid border-[#00000000]">
						<span className="text-black text-lg mb-[23px] ml-14" >
							{"Sending Request to hotels"}
						</span>
						<span className="text-black text-lg mb-[27px] ml-14" >
							{"Matching your price"}
						</span>
						<span className="text-black text-lg mb-[18px] ml-14" >
							{"Gernating deals on your price"}
						</span>
						<span className="text-black text-lg mb-[18px] ml-[62px]" >
							{"finding best options"}
						</span>
						<span className="text-black text-lg ml-[62px]" >
							{"optimizing location information"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoadingScreen;