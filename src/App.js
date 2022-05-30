import "./App.css";
import Home from "./Component/Home/Home";
import LoginPage from "./Component/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("users") == undefined ||
      localStorage.getItem("users") == null ? (
        <LoginPage />
      ) : (
        <Home />
      )}
<<<<<<< HEAD
=======
   
>>>>>>> fe65c9ed830e39ba33dded68a5aee3410bdd09f4
    </div>
  );
}

export default App;
