import { Layout } from '../layout'

import { PriceTitle } from '../components/priceTitle'
import { ListPrice } from '../components/listPrice'

import { GroupHeader, GroupCard, GroupTitle, GroupPrice } from '../PRICE/group'


const Group = () => {
  return (
    <Layout>
      <PriceTitle title={GroupHeader} card={GroupCard} back={"#fafafa"}/>
      <ListPrice title={GroupTitle} price={GroupPrice}/>
    </Layout>
  )
}


export default Group