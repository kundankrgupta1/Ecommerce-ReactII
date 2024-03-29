import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const WomensCat = () => {

	const [womens, setWomens] = useState([]);

	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products?category=womens`)
			setWomens(res.data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div className="grid grid-cols-2 gap-3">
			{
				womens.map((e, ind) =>
					<Link key={ind} to="/womens" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="h-44 w-44 p-2 flex rounded-md items-center justify-center">
						<img src={e.image} alt={e.title} className="h-full" />
					</Link>
				)
			}
		</div>
	)
}

export default WomensCat