import '../styles/global.css';

import { ChallengeProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return (
    
        <Component {...pageProps} />
  )
}

export default MyApp
