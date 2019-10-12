import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const storage = window.localStorage

export default new Vuex.Store({
  state: {
    player: storage.key('player') >= 0 ? JSON.parse(storage.getItem('player')) : null
  },
  mutations: {
    set(state, { key, val }) {
      state = _.set(state, key, val)
      storage.setItem('player', JSON.stringify(state.player))
    }
  },
  actions: {
    set({ commit }, { key, val }) {
      commit('set', { key, val })
    }
  },
  getters: {
    get(state) {
      return (key = undefined, val = undefined) => {
        if (key) {
          return _.get(state, key, val)
        }
        return state
      }
    }
  }
})
