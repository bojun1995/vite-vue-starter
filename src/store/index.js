import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  state: () => ({
    token: '123123123',
  }),
  getters: {
    token: state => state.token,
  },
  actions: {
    chgToken(newToken) {
      this.token = newToken
    },
  },
})
