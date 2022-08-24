import { Link } from "react-router-dom";
const Country = ({ name, capital, population, region, img }) => {
	return (
		<Link to={`country/${name}`}>
			<div
				className="w-[250px] mx-auto my-1
          text-white font-sans 
         font-[300] bg-DDarkBlue rounded-[6px]
         overflow-hidden hover:cursor-pointer 
         hover:brightness-125"
			>
				<div className="w-[100%] h-[150px]  overflow-hidden ">
					<img
						src={img}
						alt={name}
						className="
                 overflow-hidden w-[100%] h-[100%] "
					/>
				</div>
				<div className="m-3 mx-7 mb-10">
					<h2
						className="font-roboto font-[500]
                text-[20px] m-1 mt-3 mb-2"
					>
						{name}
					</h2>
					<div className="font-roboto flex text-[15px]">
						Population:
						<p className="text-white/[.7] mx-1 text-[15px]">
							{numberWithCommas(population)}{" "}
						</p>
					</div>

					<div className="font-roboto flex text-[15px]">
						Region:
						<p className="text-white/[.7] mx-1 text-[15px]">{region} </p>
					</div>

					<div className="font-roboto flex text-[15px]">
						Capital:
						<p className="text-white/[.7] mx-1 text-[15px]">{capital} </p>
					</div>
				</div>
			</div>
		</Link>
	);
};

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Country;
