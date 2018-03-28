import axios from '~/plugins/axios'

export default function({ isServer, req }) {
  if (isServer) {
    if (req.headers && req.headers.cookie) {
      axios.service.defaults.headers.common.cookie = req.headers.cookie
    }
  }
}
