let mutations = {
    TOGGLE_DRAWER(state) {
        state.drawer.open = !state.drawer.open
    },
    LOAD_BODY(state,component) {
        state.component = component
    }
}
export default mutations
