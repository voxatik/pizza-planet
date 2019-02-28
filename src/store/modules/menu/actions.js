import { menuColRef } from '@/firebase'

const actions = {
    async getMenu({ commit }) {
        let menu = {}
        try {
            let snapshot = await menuColRef.get()
            snapshot.forEach((doc) => {
                menu[doc.id] =  doc.data()
            })
            commit('setMenuItems', menu)
        } catch(error) {
          //todo display notification error
        }
    },

    async placeOrder({ commit }) {
        //todo store order in firebase db
        try {
            //todo
        } catch(error) {
            //todo
        }
    }
}


export default actions