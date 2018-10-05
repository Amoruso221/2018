<template>
    <section>
			<h2>Lista aplicando filtro</h2>
			<select v-model="selected">
					<option disabled value="">seleccione genero</option>
	  				<option value="femenino">Femenino</option>
	  				<option value="masculino">Masculino</option>
			</select>
			<button @click="filtrar()">Filtrar</button>
            <ul>
				<li v-for="(persona, index) in listado" :key="index">
					<p>Nombre: {{persona.nombre}} - Edad: {{persona.edad}} - Sexo: {{persona.sexo}}</p>
				</li>
			</ul>
		</section>    
</template>


<script>
export default {
    name: 'listaFiltrada',
    props: {
        lista: Array
    },
    data(){
        return {
            selected: "masculino",
            listado: [],
            personas: this.lista
        }
    }, 
    methods: {
        filtrar(){
					this.listado = this.personas.filter(persona => persona.sexo === this.selected);
				}
    }
};
</script>
