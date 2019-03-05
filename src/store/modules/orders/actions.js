import { ordersColRef, serverTimestamp } from '@/firebase'

const actions = {
  fetchOrders({commit}) {
    let processOrders = (snapshot) => {
      let orders = []
      
      snapshot.forEach((doc) => {
        orders.push({id: doc.id,...doc.data()})
      })
      commit('setOrders', orders)
    }
    ordersColRef.onSnapshot(processOrders)  
  },
  async placeOrder({ rootState }, order) {
    try {
        let basket = {
          userId: rootState.auth.user.uid,
          items: order,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }
        const { id } = await ordersColRef.add(basket);
        return Promise.resolve(id)
    } catch (error) {
        return Promise.reject(error)
    }
  }
}

export default actions