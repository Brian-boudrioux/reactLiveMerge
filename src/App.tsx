import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchFilters from "./components/SearchFilters";
import CardList from "./components/CardList";
import "./App.css";

function App() {
	const [cards, setCards] = useState([]);

	return (
		<>
			<Navbar />
			<Header />
			<main>
				<SearchFilters setCards={setCards} />
				<CardList cards={cards}/>
			</main>
			<Footer />
		</>
	);
}

export default App;
