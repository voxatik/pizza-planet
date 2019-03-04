import { menuColRef } from '@/firebase'
import { firebaseAction } from 'vuexfire';

const actions = {
  getMenu: firebaseAction(async ({ bindFirebaseRef }) => {
    bindFirebaseRef('items', menuColRef).then((data1, data2) =>{
      console.log(data1, data2)
    })
  }),
  
  async addToMenu({ commit, state }) {
    try {
        await menuColRef.add(state.itemForm)
        //notify user item added to menu
        commit('clearItemForm')
    } catch (error) {
        //todo notify user of error
    }
  }
}


export default actions