import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavMenu = () => {
	const [category, setCategory] = useState([]);
	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/category`);
			setCategory(res.data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData()
	}, [])


	return (
		<div className="flex justify-around h-10 items-center bg-slate-700 text-white capitalize">
			{
				category.map((e, ind) =>
					<Link key={ind} to={e.link} className="h-full flex items-center hover:border-2 hover:px-2 hover:border-solid hover:border-slate-300	border-2 px-2 border-solid border-slate-700">{e.name}</Link>
				)
			}
		</div>
	)
}
export default NavMenu