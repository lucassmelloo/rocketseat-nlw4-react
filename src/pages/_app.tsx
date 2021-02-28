import '../styles/global.css';

import { ChallengeProvider, ChallengesContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return (
    <ChallengeProvider>
     <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
