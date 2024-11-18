import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<CardList />
			</main>
			<Footer />
		</>
	);
}

export default App;
