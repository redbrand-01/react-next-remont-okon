import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'
import { Info } from '../components/info'

import { WindowHeader, WindowCard, WindowTitle, WindowPrice, WindowInfoText } from '../PRICE/window'

const Window = () => {
  return (
    <Layout>
      <PriceTitle title={WindowHeader} card={WindowCard} back={"#fafafa"}/>
      <Info text={WindowInfoText} />
      <ListPrice title={WindowTitle} price={WindowPrice}/>
    </Layout>
  )
}


export default Window