let actions = {
    TOGGLE_DRAWER({commit}) {
        commit('TOGGLE_DRAWER')
    },
    LOAD_BODY({commit},component) {
        commit('LOAD_BODY',component)
    }
}
export default actions
