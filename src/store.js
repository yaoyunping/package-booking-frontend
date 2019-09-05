import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    e:{

    }
  },
  mutations: {
  },
  actions: {
    addForm:function(context,value){
      const url ="http://localhost:8082/forms";
      axios.post(url,{
        id: value.id,
        person: value.person,
        phone: value.phone,
        weight: value.weight
      }).catch(function(error){
        aleret(error.response)
      })
    },
  }
})
