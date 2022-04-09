import { createStore } from "vuex";

import WordModule from './modules/word.module'

export default createStore({
    modules: {
        WordModule
    }
})