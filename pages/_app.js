import "../styles/globals.css"
import "uno.css";
import Script from "next/script"

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-D4BXHY930J" />
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D4BXHY930J');
      `  
    }}/>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
