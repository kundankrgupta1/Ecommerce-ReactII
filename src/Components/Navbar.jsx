import logo from "../assets/main-logo.png"
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
const Navbar = () => {
	const cart = 0;
	const wishlist = 0;
	return (
		<>
			<div className="flex py-2 px-20 bg-slate-800 text-white justify-between items-center">
				<div className="flex">
					<Link to="/">
						<img src={logo} alt="logo" className="h-14" />
					</Link>
				</div>
				<div className="flex items-center border-2 bg-white text-black h-11 border-solid border-slate-950 rounded-md w-2/4">
					<button className="p-2 text-2xl">
						<IoSearch />
					</button>
					<input type="text" placeholder="Search for Products Brand and More..." className="outline-none text-xl rounded-md h-full w-full px-2" />
				</div>
				<div className="flex a justify-between w-1/4 items-center">
					<Link to="/login">
						<button className="flex text-lg items-center gap-2 p-2 hover:bg-white hover:text-black hover:rounded-md">
							<FaRegUser />Sign In <span><IoMdArrowDropdown /></span>
						</button>
					</Link>

					<Link to="/cart">
						<button className="flex items-center gap-2 text-lg relative">
							<FiShoppingCart />
							<p className="absolute bg-red-700 text-white rounded-full w-5 h-5 flex justify-center items-center text-sm ml-1.5 -mt-5"
								style={cart <= 0 ? { display: "none" } : { display: "block" }}>
								{cart}
							</p>
							Cart
						</button>
					</Link>

					<Link to="/wishlist" >
						<button className="flex items-center gap-2 text-lg relative">
							<FaRegHeart />
							<p className="absolute bg-red-700 text-white rounded-full w-5 h-5 flex justify-center items-center text-sm ml-1.5 -mt-5"
								style={wishlist <= 0 ? { display: "none" } : { display: "block" }}>
								{wishlist}
							</p>
							Wishlist
						</button>
					</Link>

				</div>
			</div>
			<NavMenu />
		</>
	)
}
export default Navbar;


