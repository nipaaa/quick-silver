import TypeContextProvider from "@/Context/TypeProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TypeContextProvider>
      <Component {...pageProps} />
    </TypeContextProvider>
  );
}
