import { ordersColRef } from '@/firebase'
import { firebaseAction } from 'vuexfire';

const actions = {
  getOrders: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('orders', ordersColRef);
  }),
  async placeOrder({ state }, order) {
    //todo store order in firebase db
    try {
        order.user_id = state.user.id
        ordersColRef.add(order);
    } catch (error) {
        //todo
    }
  }
}


export default actions