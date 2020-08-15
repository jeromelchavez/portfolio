let getters = {
    isOpen: state => {
        return state.drawer.open
    },
    component: state => {
        return state.component
    },
    dialog: state => {
        return state.dialog
    },
}
export default getters
