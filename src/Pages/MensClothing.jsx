import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard";

const MensClothing = () => {

	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=mens`)
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
			<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" alt="banner" className="w-full" />
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

export default MensClothing