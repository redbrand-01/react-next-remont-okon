import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'
import { Info } from '../components/info'

import { FurnitPrice, FurnitTitle, FurnitHeader, FurnitCard, FurnitInfoText } from '../PRICE/furnitura'

const Furnitura = () => {
  return (
    <Layout>
      <PriceTitle title={FurnitHeader} card={FurnitCard} back={"#fafafa"}/>
      <Info text={FurnitInfoText} />
      <ListPrice title={FurnitTitle} price={FurnitPrice}/>
    </Layout>
  )
}


export default Furnitura