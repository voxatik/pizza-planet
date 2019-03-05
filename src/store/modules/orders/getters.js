const getters = {
  ordersCount: state => { 
    return state.orders.length 
  },
  getOrders: state => {
    return state.orders
  }
}


export default getters