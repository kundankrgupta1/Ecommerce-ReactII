import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {

	const [cat, setCat] = useState([]);
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("");

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/category`)
			const resPro = await axios.get(`http://localhost:8080/products?category=${filter}`)
			setCat(res.data)
			setData(resPro.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])


	return (
		<div className="w-7xl max-w-7xl m-auto mt-5 p-2">
			<div>
				<select name="category" className="w-full border-2 p-2 rounded-md capitalize" onChange={(e) => setFilter(e.target.value)}>
					{cat.map((e, ind) => <option key={ind} value={e.name}>{e.name}</option>)}
				</select>
			</div>
			<div className="flex gap-5 justify-between items-center flex-wrap mt-5 ">
				{
					data.map((e, ind) =>
						<div key={ind} className="p-3 w-[250px] h-[310px] text-center border-2 rounded-md">
							<div className="w-full h-52 flex justify-center items-center">
								<img src={e.image} className="h-full" alt={e.title} />
							</div>
							<p className="overflow-hidden text-ellipsis whitespace-nowrap">{e.title}</p>
							<p>₹ {e.price}</p>
							<div className="flex gap-2">
								<button className="bg-yellow-500 rounded-md px-3 py-1 text-white font-semibold">Add to Cart</button>
								<button className="bg-blue-500 rounded-md px-3 py-1 text-white font-semibold">Buy Now</button>
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default AllProducts