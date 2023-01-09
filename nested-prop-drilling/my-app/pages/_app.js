import '../styles/globals.css'
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  return <Component {...pageProps} count={count} setCount={setCount} />
}

export default MyApp
