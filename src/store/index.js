import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        all: []
    },
    mutations: {
        setAulas (state, aulas) {
            state.all = aulas
        },
        setAulaAtivado (state, aula) {
            state.all.forEach(item => {
                if(item.identifier == aula){
                    item.ativado = !item.ativado
                } 
            })
        },
        setAulaHover (state, objHover) {            
            state.all.forEach(item => {
                if(item.identifier == objHover.aula){
                    if(objHover.cond == 'enter') item.ativaHover = true
                    else item.ativaHover = false
                } 
            })
        }
    },
    getters: {
        getAulasDiaHora: (state) => (dia,hora) => {
            return state.all.filter(aula => aula.horario.dia == dia && aula.horario.hora == hora)
        }
    }
})