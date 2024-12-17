import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker terdaftar dengan sukses:", registration);
        })
        .catch((error) => {
          console.error("Pendaftaran Service Worker gagal:", error);
        });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
