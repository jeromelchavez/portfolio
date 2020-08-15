let mutations = {
    TOGGLE_DRAWER(state) {
        state.drawer.open = !state.drawer.open
    },
    LOAD_BODY(state,component) {
        state.component = component
    },
    SHOW_MODAL(state,show,project_key) {
        state.dialog.show = show
        state.dialog.project_key = project_key
    }
}
export default mutations
