import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "./Login"
import Cart from "../Pages/Cart"
import Wishlist from "../Pages/Wishlist"
import Electronics from "../Pages/Electronics"
import MensClothing from "../Pages/MensClothing"
import WomensClothing from "../Pages/WomensClothing"
import ProductPage from "../Pages/ProductPage"
import Mobiles from "../Pages/Mobiles"
import AllProducts from "../Pages/AllProducts"

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<AllProducts />} />
			<Route path="/mobile" element={<Mobiles />} />
			<Route path="/electronics" element={<Electronics />} />
			<Route path="/mens" element={<MensClothing />} />
			<Route path="/womens" element={<WomensClothing />} />
			<Route path="/product/:id" element={<ProductPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/wishlist" element={<Wishlist />} />
		</Routes>
	)
}

export default AllRoutes