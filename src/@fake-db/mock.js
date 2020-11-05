import MockAdapter from "axios-mock-adapter"
import axios from "axios"

const mock = new MockAdapter(axios)
mock.onAny().passThrough()

export default mock