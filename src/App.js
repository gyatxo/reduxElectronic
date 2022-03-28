import { Provider } from "react-redux";
import Main from "./Component";
import store from "./Redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Main/>
    </Provider>
    </>
  );
}

export default App;