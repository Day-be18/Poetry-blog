import '../styles/globals.css'; // Убедитесь, что путь к globals.css правильный

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}