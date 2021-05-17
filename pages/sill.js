import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'
import { InfoText } from '../components/infoText'

import { SillHeader, SillCard, SillTitle, SillPrice, SillInfoText } from '../PRICE/sill'

const Sill = () => {
  return (
    <Layout>
      <PriceTitle title={SillHeader} card={SillCard} back={"#fafafa"}/>
      <ListPrice title={SillTitle} price={SillPrice}/>
      <InfoText info={SillInfoText} />
    </Layout>
  )
}


export default Sill