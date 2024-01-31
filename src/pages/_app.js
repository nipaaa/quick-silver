import TypeContextProvider from "@/Context/TypeProvider";
import Main from "@/Layout/Main";
import { store } from "@/app/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Main>
        <TypeContextProvider>
          <Component {...pageProps} />
        </TypeContextProvider>
      </Main>
    </Provider>
  );
}
