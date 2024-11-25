import { Provider } from "react-redux";
import Route from "./components/Route";
import appStore from "./utils/appstore";

function App() {
  return (
    <Provider store={appStore}>
      <Route/>
    </Provider>
  );
}

export default App;
