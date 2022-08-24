import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
const SingleCountry = () => {
	const { unChangedCountries, fetcheTry, url } = useGlobalContext();
	const [country, setCountry] = useState({});
	const [loading, setLoading] = useState(true);
	const { name } = useParams();

	const BorderButtons = () => {
		if (country.borders == undefined)
			return <div className="mx-2 text-gray-400"> No Info</div>;
		const borders = country.borders
			.map((border, index) => {
				const bord = unChangedCountries.find((co) => {
					return (
						co.cca2 === border ||
						co.cca3 === border ||
						co.ccn3 === border ||
						co.cioc === border
					);
				});
				if (bord != undefined)
					return (
						<Link
							key={index}
							to={`/country/${bord.name.common}`}
							className=" m-2"
						>
							<button
								className=" bg-DDarkBlue rounded
						 hover:brightness-150
						 p-1 px-2
						 font-[300]"
							>
								{bord.name.common}{" "}
							</button>
						</Link>
					);

				return <></>;
			})
			.slice(0, 3);

		if (borders != undefined) {
			return borders;
		} else {
			return <></>;
		}
	};

	const getCountry = async () => {
		setLoading(true);
		if (unChangedCountries.length == 0) {
			const fetched = await fetch(url);
			const data = await fetched.json();
			setCountry(
				data.find((co) => {
					return co.name.common === name;
				})
			);
		} else {
			setCountry(
				unChangedCountries.find((co) => {
					return co.name.common === name;
				})
			);
		}
		setLoading(false);
	};

	useEffect(() => {
		getCountry();
	}, [name]);

	return (
		<>
			{loading ? (
				<div className="w-screen h-[500px] m-auto text-center text-gray-400 font-roboto text-[40px] ">
					Loading...
				</div>
			) : (
				<div
					className="
					transform-top
					mt-[-20px]
					lg:mt-[-90px]
					justify-center w-full h-screen flex
				 "
				>
					<div className="m-auto p-1">
						<div className="w-[100%] mx-auto">
							<div className="w-[10px]">
								<Link to={`/`} className="object-fit">
									<button
										className="bg-DDarkBlue
							rounded shadow-2xl font-roboto
							text-white m-2 p-1 px-2 font-[300]
							hover:brightness-150 flex items-center gap-1"
									>
										<IoMdArrowBack></IoMdArrowBack>
										<div> Back </div>
									</button>
								</Link>
							</div>
						</div>
						<div className=" w-[100%] lg:flex mx-auto">
							<img
								src={country.flags.svg}
								alt={name}
								className="w-[500px]  m-2
								shadow-2xl"
							/>
							<div
								className="text-white py-5 px-5
								font-roboto"
							>
								<div className="text-[25px]">{name}</div>
								<div className="flex gap-10">
									<div key={0}>
										<InfoItem
											key={0}
											name="Native Name"
											val={country.name.common}
										/>

										<InfoItem
											key={1}
											name="Population"
											val={numberWithCommas(country.population)}
										/>
										<InfoItem key={2} name="Region" val={country.region} />
										<InfoItem
											key={3}
											name="SubRegion"
											val={country.subregion}
										/>
										<InfoItem key={4} name="Capital" val={country.capital} />
									</div>
									<div key={1}>
										<InfoItem key={0} name="Status" val={country.status} />

										<InfoItem
											key={1}
											name="StartOfWeek"
											val={numberWithCommas(country.startOfWeek)}
										/>
									</div>
								</div>

								<div className="w-[100%] m-3 flex items-center">
									<div>Border Countries:</div>
									<BorderButtons />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const InfoItem = ({ name, val }) => {
	return (
		<div className=" flex items-center my-2">
			<div className="text-[15px]"> {name}: </div>
			<div className=" mx-1 text-[15px] text-gray-400 font-[300]">{val}</div>
		</div>
	);
};

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default SingleCountry;
