<template>
  <div id="app">
    <section>
        <h2>Agregar persona - Cantidad actual: {{total}}</h2>
		
			<input type="text" v-model="persona.nombre" placeholder="Nombre">
			<input type="number" v-model="persona.edad" placeholder="Edad">

			<select v-model="persona.sexo">
  				<option value="femenino">Femenino</option>
  				<option value="masculino" selected>Masculino</option>
			</select>
	
			<button @click="agregar()">Ingresar</button>
			
			<ul>
				<li v-for="(persona, index) in personas" :key="index">
					<p @click="borrarPersona(persona.id)">Nombre: {{persona.nombre}} - Edad: {{persona.edad}} - Sexo: {{persona.sexo}}</p>
				</li>
			</ul>
    </section>
    <listaFiltrada :lista="personas"></listaFiltrada>
  </div>
</template>
    


<script>
import ListaFiltrada from './components/ListaFiltrada.vue'

export default {
  name: 'app',
  data() {
    return {
      idInicial: 0,
      personas: [],
        persona: {
            nombre: "",
            edad: 0,
            sexo: ""
          }
	    }
  },
  computed: {
				total(){
					return this.personas.length;
				}
			},
  methods: {
				agregar(){
					if(this.persona.nombre != null &&
							this.persona.nombre.length > 0 &&
							 this.persona.edad != null &&
							 this.persona.edad > 0 &&
						 	this.persona.edad.length > 0)
						 	{ 
								this.personas.push({
									id: this.idInicial++,
									nombre: this.persona.nombre,
									edad: this.persona.edad,
									sexo: this.persona.sexo
								});

								this.persona.nombre= "";
								this.persona.edad= "";
							} else { alert('ningun campo debe estar vacio y la edad no debe ser negativa');}
				},
				borrarPersona(id){
					this.personas = this.personas.filter(persona => persona.id !== id);
				}
			},
      components: {
        'listaFiltrada' : ListaFiltrada
  }
}
</script>

