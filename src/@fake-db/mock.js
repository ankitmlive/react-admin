import MockAdapter from "axios-mock-adapter"
import axios from "axios"

const mock = new MockAdapter(axios)

//mock.onAny().passThrough() its only for testing live api's

export default mock