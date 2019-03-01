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