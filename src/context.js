import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();
const url = "https://restcountries.com/v3.1/all";
const AppProvider = ({ children }) => {
	const [unChangedCountries, setUnChangedCountries] = useState([]);
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showDropdown, setShowDropdown] = useState(false);
	const [currentRegion, setCurrentRegion] = useState("Europe");

	const [search, setSearch] = useState("");

	const SearchChanged = (e) => {
		setSearch(e.target.value);
	};
	useEffect(() => {
		FilterBySearch();
	}, [search]);

	const DropdownClicked = () => {
		setShowDropdown((old) => !old);
	};
	const FilterByRegion = (region) => {
		setCurrentRegion(region);

		let arr = [...unChangedCountries];
		arr = arr.filter((country) => {
			return country.region === region;
		});
		setCountries(arr);
		setSearch("");
	};

	const FilterBySearch = () => {
		let arr = [...unChangedCountries];
		arr = arr
			.filter((country) => {
				return country.region === currentRegion;
			})
			.filter((country) => {
				return country.name.common
					.toLowerCase()
					.includes(search.toLowerCase().replace(/ /g, ""));
			});
		setCountries(arr);
	};
	const fetcheTry = async () => {
		const fetched = await fetch(url);
		const data = await fetched.json();
		console.log(data[0]);
		const europe = data.filter((country) => {
			return country.region === "Europe";
		});
		setCountries(europe);
		setUnChangedCountries(data);
		setLoading(false);
	};
	useEffect(() => {
		fetcheTry();
	}, []);
	return (
		<AppContext.Provider
			value={{
				countries,
				FilterByRegion,
				loading,
				showDropdown,
				DropdownClicked,
				FilterBySearch,
				SearchChanged,
				search,
				currentRegion,
				unChangedCountries,
				fetcheTry,
				url,
				setUnChangedCountries,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
