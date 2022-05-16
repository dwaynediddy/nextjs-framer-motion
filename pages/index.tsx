import type { NextPage } from 'next'
import BottleContainer from '../components/BottleContainer'
import Header from '../components/Header'
import LeavesContainer from '../components/LeavesContainer'
import TextContainer from '../components/TextContainer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
        <LeavesContainer />
      </main>
    </div>
  )
}

export default Home
