// import Vue from 'vue';
const state = {
  wallets: [],
};

const mutations = {
  ADD_WALLET(state, wallet) {
    const w = [...state.wallets, wallet];
    // 判断有没填的状态，就不让创建新的
    const isEditMode = state.wallets.find(val => val.editMode === true);
    console.log('isEditMode', isEditMode);
    if (isEditMode) {
      return;
    }
    state.wallets = [...w];
  },
  UPDATE_WALLET(state, { wallet, index }) {
    state.wallets[index] = wallet;
  },
  DEL_WALLET(state, index) {
    // state.wallets[index] = wallet;
    state.wallets = state.wallets.filter((a, n) => n !== index);
  },
};

const actions = {
  addWallet({ commit }) {
    commit('ADD_WALLET', {
      name: '',
      privateKey: '',
      editMode: true,
      address: '',
    });
  },
  setWallet({ commit }, { wallet, index }) {
    commit('UPDATE_WALLET', { wallet, index });
  },
  delWallet({ commit }, index) {
    commit('DEL_WALLET', index);
  },
};

export default {
  state,
  mutations,
  actions,
};
