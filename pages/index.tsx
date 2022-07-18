import type { NextPage } from 'next'
import Header from '../module/header/header'
import Sidebar from '../module/sidebar/sidebar'
import Dash from './dash'
import Isplani from './isplani'
const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="content">
          <Dash />
          <Isplani />
        </div>
      </div>
    </>
  )
}

export default Home
