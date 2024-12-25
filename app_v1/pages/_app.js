import "@/styles/globals.css";
import { AuthProvider } from "@/utils/contexts/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
