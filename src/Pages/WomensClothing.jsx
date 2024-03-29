import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard";

const WomensClothing = () => {

	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=womens`)
			setData(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])


	return (
		<div className="max-w-7xl m-auto border-2 mt-5">
			<img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-WHP-210324-MainBanner-golive.gif" alt="banner" className="w-full" />
			<div>
				{
					data.map((e, ind) =>
						<ProductCard key={ind} {...e} />
					)
				}
			</div>
		</div>
	)
}

export default WomensClothing