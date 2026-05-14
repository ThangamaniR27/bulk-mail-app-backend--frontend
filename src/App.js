import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SignIn from "./SignIn";
import MailForm from "./components/MailForm";
import History from "./components/History";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<SignIn />} />

        <Route path="/mail" element={<MailForm />} />

        <Route path="/history" element={<History />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;