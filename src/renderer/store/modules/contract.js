
const state = {
  abi: '',
  contractAddress: '',
  result: {},
  contracts: [{
    name: 'Default',
    abi: '',
    contractAddress: '',
    selectAccount: '',
  }],
};

const mutations = {
  SET_ABI(state, abi) {
    state.abi = abi;
  },
  SET_CONTRACT_ADDRESS(state, address) {
    state.contractAddress = address;
  },
  ADD_RESULT(state, result) {
    state.result = result;
  },
  ADD_CONTRACT(state, { name }) {
    const w = [...state.contracts, { name }];
    state.contracts = [...w];
  },
  REMOVE_CONTRACT(state, name) {
    state.contracts = state.contracts.filter(a => a.name !== name);
  },
};

const actions = {
  changeABI({ commit }, abi) {
    commit('SET_ABI', abi);
  },
  changeContractAddress({ commit }, address) {
    commit('SET_CONTRACT_ADDRESS', address);
  },
  addResult({ commit }, result) {
    commit('ADD_RESULT', result);
  },
  addContract({ commit }, { name }) {
    commit('ADD_CONTRACT', { name });
  },
  rmContract({ commit }, name) {
    commit('REMOVE_CONTRACT', name);
  },
};

export default {
  state,
  mutations,
  actions,
};
