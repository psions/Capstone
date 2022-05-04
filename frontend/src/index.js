import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
export { default as Article} from '../src/containers';
export { default as Brand} from '../src/containers';
export { default as CTA} from '../src/containers';
export { default as Feature} from '../src/containers';
export { default as Navbar} from '../src/containers';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
