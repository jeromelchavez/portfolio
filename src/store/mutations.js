let mutations = {
  TOGGLE_DRAWER(state) {
    state.drawer.open = !state.drawer.open;
  },
  SHOW_MODAL(state, show, project_key) {
    state.dialog.show = show;
    state.dialog.project_key = project_key;
  },
};
export default mutations;
