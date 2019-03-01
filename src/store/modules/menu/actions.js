import { menuColRef } from '@/firebase'

const actions = {
  async getMenu({ commit }) {
    let menu = {}

    const next = (snapshot) => {
        snapshot.forEach((doc) => {
            menu[doc.id] = doc.data()
        })
        commit('setMenuItems', menu)
        menu = {}
    }

    const err = (error) => {
        console.log(error)
    }


    menuColRef.onSnapshot(next, err)
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