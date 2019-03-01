const mutations = {
    setMenuItems(state, menu) {
        state.items = menu
    },
    clearItemForm(state) {
        state.itemForm = {
            name: "",
            description: "",
            options: [
                {size: null, price: null},
                {size: null, price: null}
            ]
        }
    }
}


export default mutations