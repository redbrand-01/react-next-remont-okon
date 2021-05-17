import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'
import { Info } from '../components/info'

import { NetsHeader, NetsCard, NetsTitle, NetsPrice, NetsInfoText } from '../PRICE/nets'

const Nets = () => {
  return (
    <Layout>
      <PriceTitle title={NetsHeader} card={NetsCard} back={"#fafafa"}/>
      <Info text={NetsInfoText} />
      <ListPrice title={NetsTitle} price={NetsPrice}/>
    </Layout>
  )
}


export default Nets