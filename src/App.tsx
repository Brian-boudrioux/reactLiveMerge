import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<main>{/* todo list and filter here */}</main>
			<Footer />
		</>
	);
}

export default App;
