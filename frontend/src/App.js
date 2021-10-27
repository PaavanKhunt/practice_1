import Navbar from "./components/Navbar";
import Userlist from "./components/Userlist";
import Usercontext from "./context/Usercontext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Usercontext>
        <Userlist />
      </Usercontext>
    </div>
  );
}

export default App;
