import { useGlobalContext } from "./context";
import Countries from "./Countries";
import SearchAndFilter from "./SearchAndFilter";
function Home() {
	const { loading } = useGlobalContext();
	return (
		<>
			<div className="w-[100%] z-[-1] h-[100%] absolute bg-DVeryDarkBlue"></div>
			<div className="w-[100%]">
				<SearchAndFilter></SearchAndFilter>
				{loading ? (
					<div className="w-screen h-[500px] m-auto text-center text-gray-400 font-roboto text-[40px] ">
						Loading...
					</div>
				) : (
					<Countries></Countries>
				)}
			</div>
		</>
	);
}

export default Home;
