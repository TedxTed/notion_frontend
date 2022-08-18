import "./App.css";
import Sidebar from "./component/Sidebar";
import Title from "./component/Title";
import View from "./component/View";

function App() {
	return (
		<div className="App  flex  border border-sky-500">
			<div className="w-1/5 h-screen border border-red-500 ">
				<Sidebar className="  " />
			</div>

			<div className="w-4/5 h-screen   border border-green-500">
				<Title />
				<View />
			</div>
		</div>
	);
}

export default App;
