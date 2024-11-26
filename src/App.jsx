import "./App.css";
import Router from "./routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  );
}

export default App;
