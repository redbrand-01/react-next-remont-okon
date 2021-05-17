import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'

import { OtherHeader, OtherCard, OtherTitle, OtherPrice, OtherInfoText } from '../PRICE/other'

const Otdelka = () => {
  return (
    <Layout>
      <PriceTitle title={OtherHeader} card={OtherCard} back={"#fafafa"}/>
      <ListPrice title={OtherTitle} price={OtherPrice}/>
    </Layout>
  )
}


export default Otdelka