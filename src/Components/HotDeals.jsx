import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

const HotDeals = () => {

	const [mobile, setMobile] = useState([]);
	const [electronics, setElectronics] = useState([]);
	const [mens, setMens] = useState([]);
	const [womens, setWomens] = useState([])

	const fetchDataMobile = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=mobile&_limit=1`)
			setMobile(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	const fetchDataElectronics = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=electronics&_limit=1`)
			setElectronics(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	const fetchDataMens = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=mens&_limit=1`)
			setMens(res.data)
		} catch (error) {
			console.log(error);
		}
	}


	const fetchDataWomens = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=womens&_limit=1`)
			setWomens(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchDataMobile();
		fetchDataElectronics();
		fetchDataMens();
		fetchDataWomens();
	}, [])


	const newArray = [mobile, electronics, mens, womens];

	return (
		<div className="grid grid-cols-2 gap-3">
			{
				newArray.map((e, ind) =>
					<div key={ind} className="h-44 w-44 p-2 flex justify-center items-center rounded-md"
					style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
						{
							e.map((e, ind) =>
								<Link key={ind} to={`product/${e.id}`} className="size-full flex justify-center items-center">
									<img src={e.image} alt={e.title} className="h-full" />
								</Link>
							)
						}
					</div>
				)
			}
		</div>
	)
}

export default HotDeals