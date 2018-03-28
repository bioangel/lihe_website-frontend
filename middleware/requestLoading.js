
export default function ({ isServer, store, req }) {
  store.commit('option/REQUEST_LOADING_START')
}
