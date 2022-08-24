import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGlobalContext } from "./context";
const SearchAndFilter = () => {
	const {
		showDropdown,
		DropdownClicked,
		search,
		SearchChanged,
		currentRegion,
	} = useGlobalContext();

	return (
		<div
			className="px-20 w-[100%] flex
    justify-between bg-DVeryDarkBlue items-center
    py-5
    "
		>
			<form className="mx-2 my-auto">
				<div className="font-nunito">
					<input
						type="text"
						className="bg-DDarkBlue   
                        font-roboto
                        text-white rounded-lg 
                        block w-full p-2.5 
                        placeholder-gray-400 
                        
                        outline-DVeryDarkBlue
                        "
						placeholder="Search"
						value={search}
						onChange={(e) => SearchChanged(e)}
						required
					/>
				</div>
			</form>
			<div>
				<Dropdown></Dropdown>
				<button
					onClick={DropdownClicked}
					className=" relative
            h-[40px] w-[156px]
             bg-DDarkBlue
            rounded-lg
            font-roboto
            text-gray-400 
            flex gap-1 items-center
            justify-between
            hover:brightness-125
            transition-all
            "
				>
					<h4 className="m-auto mx-3">{currentRegion}</h4>
					<RiArrowDropDownLine
						className={`
                m-auto scale-150 
                transition-all mr-2
                duration-[200ms]
                ${showDropdown ? "rotate-0" : "rotate-90"}
                `}
					/>
				</button>
			</div>
		</div>
	);
};

const Dropdown = () => {
	const { showDropdown } = useGlobalContext();
	return (
		<div
			className={`absolute
        text-gray-400
        font-roboto
        top-[135px]
         w-[156px] grid
         bg-DDarkBlue
         rounded-lg
         transition-all
         duration-[200ms]
         overflow-hidden
         ${showDropdown ? "scale-y-100" : "scale-y-0"}
         origin-top
         `}
		>
			<FilterItem region="Africa" />
			<FilterItem region="Americas" />
			<FilterItem region="Asia" />
			<FilterItem region="Europe" />
			<FilterItem region="Oceania" />
		</div>
	);
};

const FilterItem = ({ region }) => {
	const { FilterByRegion } = useGlobalContext();
	return (
		<div
			onClick={() => FilterByRegion(region)}
			className="m-1 ml-3
    hover:brightness-150
    hover:bg-DVeryDarkBlue/[.5]
    hover:cursor-pointer
    p-1
    "
		>
			{region}
		</div>
	);
};

export default SearchAndFilter;
