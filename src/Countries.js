import { useGlobalContext } from "./context";
import Country from "./Country";

const Countries = () => {
	const { countries } = useGlobalContext();
	return (
		<div
			className="w-[100%] object-cover
        gap-20 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 bg-DVeryDarkBlue
        px-20"
		>
			{countries.map((country, index) => {
				const { name, capital, population, region, flags } = country;
				return (
					<Country
						key={index}
						name={name.common}
						capital={capital}
						region={region}
						population={population}
						img={flags.png}
					></Country>
				);
			})}
		</div>
	);
};

export default Countries;
