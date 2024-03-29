import { Link } from "react-router-dom"

const ProductCard = ({ id, image, title, brand, stockCount, price, oldPrice, rating, highlights }) => {

	
	return (
		<>
			<Link className="flex mt-5 gap-10" to={`/product/${id}`}>
				<div className="p-2 basis-1/3 flex justify-center items-center">
					<img src={image} alt={title} className="h-80" />
				</div>
				<div className="basis-2/3 flex flex-col gap-2">
					<p className="border-2 px-2 py-1 max-w-fit rounded-md uppercase">{brand}</p>
					<h3 className="text-xl font-semibold">{title}</h3>
					<p>
						<span className="bg-green-600 px-1 py-0.5 text-white font-normal text-sm rounded-sm">{rating.rate}★</span>
						<span className="font-semibold text-sm text-gray-500"> {rating.ratings} Ratings & {rating.reviews} Reviews</span>
					</p>
					<div className="flex items-end gap-3">
						<p className="text-2xl font-semibold">₹ {price}</p>
						<del>₹{oldPrice}</del>
					</div>
					<div className="flex gap-5">
						{stockCount === 0 ? <p className="text-red-500 font-bold">Out of Stock</p> : stockCount > 1 && stockCount < 10 ? <p className="text-yellow-600 font-bold">Low Stock</p> : <p className="text-green-500 font-bold">In Stock</p>}
						{stockCount === 0 ? "" : stockCount < 10 ? <p className="text-red-600 font-bold">Only {stockCount} left in stock - order soon</p> : ""}
					</div>
					<div>
						{
							highlights.map((e, ind) => (
								<p key={ind} className="font-semibold text-sm text-gray-500">{e}</p>
							))
						}
					</div>
				</div>
			</Link>
		</>
	)
}

export default ProductCard