import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const ProductPage = () => {
	const { id } = useParams();
	const [data, setData] = useState({});


	const fetchData = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/products/${id}`)
			setData(res.data)
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData()
	}, [])


	const { title, price, oldPrice, stockCount, brand, category, image } = data
	// console.log(rating);
	// const {rate, ratings, reviews } = rating

	const rate = data.rating ? data.rating.rate : null;
	const ratings = data.rating ? data.rating.ratings : null;
	const reviews = data.rating ? data.rating.reviews : null;
	const highlights = Array.isArray(data.highlights) ? data.highlights : [];
	const description = Array.isArray(data.description) ? data.description : [];

	const discount = oldPrice - price;
	const get = Math.floor((discount / oldPrice) * 100);
	return (
		<div className="w-7xl max-w-7xl m-auto mt-5">
			<div className="flex gap-10">
				<div className="p-2 basis-2/5 flex justify-center items-center rounded-md">
					<img src={image} alt={title} />
				</div>
				<div className="flex flex-col gap-2 basis-4/5 mt-2">
					<div className="flex justify-between items-center">
						<p className="font-semibold bg-blue-800 text-white rounded-md max-w-fit px-4 py-1.5 capitalize">{brand}</p>
						<button className="text-2xl"><FaRegHeart /></button>
					</div>
					<h1 className="text-3xl font-medium">{title}</h1>
					<div className="flex gap-2 items-end">
						{
							<p className="bg-green-600 max-w-fit px-1 py-0.5 text-white font-normal text-sm rounded-sm">
								{rate}★
							</p>
						}
						{
							<p className="font-semibold text-sm text-gray-500">
								{ratings} Ratings & {reviews} Reviews
							</p>
						}
					</div>
					<div>
						<p className="text-green-700 text-sm font-semibold">Extra ₹{discount} off</p>
						<div className="flex items-end gap-3">
							<p className="text-3xl font-semibold">₹ {price}</p>
							<del>₹{oldPrice}</del>
							<p className="text-green-700 font-medium">{get}% off</p>
						</div>
					</div>
					<p className="border-2 px-2 py-1 max-w-fit rounded-md capitalize">{category}</p>
					<div className="flex gap-5">
						{stockCount === 0 ? <p className="text-red-500 font-bold">Out of Stock</p> : stockCount > 1 && stockCount < 10 ? <p className="text-yellow-600 font-bold">Low Stock</p> : <p className="text-green-500 font-bold">In Stock</p>}
						{stockCount === 0 ? "" : stockCount < 10 ? <p className="text-red-600 blinking font-bold">Only {stockCount} left in stock - order soon</p> : ""}
					</div>
					<div className="flex items-center gap-5">
						<button className="flex items-center gap-2 bg-yellow-600 uppercase text-white font-semibold text-lg rounded-md px-6 py-2">
							{stockCount === 0 ? "Add to Wishlist" : "Add to Cart"}
						</button>
						<button className="flex items-center gap-2 bg-blue-800 text-white font-semibold uppercase text-lg rounded-md px-6 py-2">
							{stockCount === 0 ? "Notify Me" : "Buy Now"}
						</button>
					</div>
				</div>
			</div>
			<div className="flex gap-20 mt-10">
				<div className="basis-1/4">
					{highlights.length === 0 ? "" : <p className="capitalize font-bold text-2xl text-gray-500">highlights</p>}
					{highlights.map((items, ind) => <li key={ind} className="my-2 font-medium">{items}</li>)}
				</div>
				<div className="basis-3/4">
					{description.length === 0 ? "" : <p className="capitalize font-bold text-2xl text-gray-500">product descriptions</p>}
					{description.map((items, ind) => <p key={ind} className="my-4 font-normal">{items}</p>)}
				</div>
			</div>
		</div>
	)
}

export default ProductPage