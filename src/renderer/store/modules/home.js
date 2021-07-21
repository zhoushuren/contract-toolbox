
const state = {
  navigate: 'wallet',
};

const mutations = {
  SET_STATE(state, [key, value]) {
    state[key] = value;
  },
};

const actions = {
  changeMenu({ commit }, label) {
    commit('SET_STATE', ['navigate', label]);
  },
};

export default {
  state,
  mutations,
  actions,
};
