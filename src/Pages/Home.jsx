import { Link } from "react-router-dom";
import ElectronicsCat from "../Components/ElectronicsCat";
import HotDeals from "../Components/HotDeals";
import MensCat from "../Components/MensCat";
import MobileCat from "../Components/MobileCat";
import WomensCat from "../Components/Womens";

const Home = () => {

	return (
		<>
			<div className="flex justify-between mt-5 w-full m-auto px-2">
				<div className="border-2 p-2 rounded-md">
					<div className="flex items-center justify-between font-bold text-xl pl-1 mb-2">
						<p>Today Hot Deals</p>
						<p>End in:
							<span className="text-red-600"> 00:00:00</span>
						</p>
					</div>
					<HotDeals />
				</div>
				<div>

				</div>
			</div>



			<div className="flex justify-between mt-5 w-full m-auto px-2">
				<div>
					<div className="flex items-center justify-between font-bold text-xl pl-1 mb-2">
						<p>Top Mobiles Deals</p>

						<Link to="/mobile" className="text-red-600 text-xs"> see more</Link>

					</div>
					<MobileCat />
				</div>
				<div>
					<div className="flex items-center justify-between font-bold text-xl pl-1 mb-2">
						<p>Top Electronics Deals</p>

						<Link to="/electronics" className="text-red-600 text-xs"> see more</Link>

					</div>
					<ElectronicsCat />
				</div>
				<div>
					<div className="flex items-center justify-between font-bold text-xl pl-1 mb-2">
						<p>Top Mens Fashion</p>

						<Link to="/mens" className="text-red-600 text-xs"> see more</Link>

					</div>
					<MensCat />
				</div>


				<div>
					<div className="flex items-center justify-between font-bold text-xl pl-1 mb-2">
						<p>Top Woman Fashion</p>

						<Link to="/womens" className="text-red-600 text-xs"> see more</Link>

					</div>

					<WomensCat />
				</div>
			</div>


		</>
	)
}

export default Home