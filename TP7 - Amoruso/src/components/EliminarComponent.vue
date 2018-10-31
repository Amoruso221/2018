<template>
  <div id="app">
    <section>
        <h2>Eliminar persona - Cantidad actual: {{total}}</h2>

			<table>
				<tr>
					<th>ID</th>
					<th>Nombre</th> 
					<th>Edad</th>
					<th>Sexo</th>
				</tr>
				<tr  v-for="(persona, index) in personas" :key="index">
					<td @click="borrarPersona(persona.id)">{{persona.id}}</td>
					<td @click="borrarPersona(persona.id)">{{persona.nombre}}</td>
					<td @click="borrarPersona(persona.id)">{{persona.edad}}</td> 
					<td @click="borrarPersona(persona.id)">{{persona.sexo}}</td>
				</tr>
			</table>
    </section>
  </div>
</template>

<script>
import personService from '@/services/personService'

export default {
  name: 'app',
  data() {
    return {
      personas: []
	    }
  },
  computed: {
				total(){
					return this.personas.length;
				}
			},
  methods: {
              borrarPersona(id){
                      personService.borrarPersona(id);
                      this.personas = personService.traerTodos();
              }
            },
            created() {
                this.personas = personService.traerTodos();
            }
}
</script>

<style>
th, td {
    padding: 15px;
    text-align: left;
}

table {
	width: 40%;
}
</style>