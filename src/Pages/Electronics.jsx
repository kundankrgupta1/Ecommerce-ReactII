import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard";

const Electronics = () => {

	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=electronics`)
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
			<img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/5bd1462b62aab134.jpg?q=50" alt="banner" className="w-full" />
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

export default Electronics