import { Layout } from '../layout'


import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'

import { OtdelkaHeader, OtdelkaCard, OtdelkaTitle, OtdelkaPrice } from '../PRICE/otdelka'

const Otdelka = () => {
  return (
    <Layout>
      <PriceTitle title={OtdelkaHeader} card={OtdelkaCard} back={"#fafafa"}/>
      <ListPrice title={OtdelkaTitle} price={OtdelkaPrice}/>
    </Layout>
  )
}


export default Otdelka