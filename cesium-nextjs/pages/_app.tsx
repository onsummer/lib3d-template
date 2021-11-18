import '../styles/globals.css'
// import 'http://cdn.staticfile.org/cesium/1.87.1/Widgets/widgets.css'
import 'cesium/Build/Cesium/Widgets/widgets.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
