import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import { getUserAuth } from "./actions";

function App(props) {
  // useMemo(() => first, [second]);
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
