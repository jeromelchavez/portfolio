let actions = {
    TOGGLE_DRAWER({commit}) {
        commit('TOGGLE_DRAWER')
    },
    LOAD_BODY({commit},component) {
        commit('LOAD_BODY',component)
    },
    SHOW_MODAL({commit},show,project_key) {
        commit('SHOW_MODAL',show,project_key)
    }
}
export default actions
