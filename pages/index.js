import { Layout } from '../layout'

import { YMInitializer } from 'react-yandex-metrika';
import { Carusel } from '../components/carusel'
import { HomeComponents } from '../components/home'

import { ChooseUs } from '../components/choouseUs'

import { tileData, tileDataMini, tileDataMiniSize, tileDataSize } from '../setting/gallery'
import { ImgCarusel } from '../setting/carusel'
import { card } from '../setting/card'

import { HomeTitleCard, HomeTitleGalery, HoneTitlesUS } from '../setting/title'

const Home = () => {
  return (
    <Layout>
       <YMInitializer accounts={[75257251]} />
      <Carusel ImgCarusel={ImgCarusel} />
      
      <HomeComponents
        tileData={tileData}
        tileDataMini={tileDataMini}
        tileDataSize={tileDataSize}
        tileDataMiniSize={tileDataMiniSize}
        card={card}
        titleCard={HomeTitleCard}
        titleGallety={HomeTitleGalery}
      />
      
      <ChooseUs us={HoneTitlesUS}/>
    </Layout>
  )
}


export default Home
/**
 *  
 */