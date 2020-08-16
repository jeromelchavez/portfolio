let actions = {
  TOGGLE_DRAWER({ commit }) {
    commit("TOGGLE_DRAWER");
  },
  SHOW_MODAL({ commit }, show, project_key) {
    commit("SHOW_MODAL", show, project_key);
  },
};
export default actions;
