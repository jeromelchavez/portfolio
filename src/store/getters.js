let getters = {
    isOpen: state => {
        return state.drawer.open
    },
    component: state => {
        return state.component
    },
}
export default getters
