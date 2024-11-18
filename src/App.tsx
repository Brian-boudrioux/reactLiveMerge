import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchFilters from "./components/SearchFilters";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<SearchFilters />
			</main>
			<Footer />
		</>
	);
}

export default App;
