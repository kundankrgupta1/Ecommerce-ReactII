import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
const Mobiles = () => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=mobile`)
			setData(res.data)
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div className="w-full max-w-[1380px] m-auto">
			<img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/1448059a7af51ac2.jpg?q=50" alt="banner" className="w-full mt-2" />
			<div className="flex gap-5">
				<div className="border-2 p-5">
					<h1>Filter & Sorting</h1>
					<p>brand</p>
					<p>rating</p>
					<p>price</p>
				</div>
				<div>
					{
						data.map((e, ind) =>
							<ProductCard key={ind} {...e} />
						)
					}
				</div>
			</div>
		</div>
	)
}
export default Mobiles
