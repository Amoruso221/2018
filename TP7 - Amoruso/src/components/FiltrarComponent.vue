<template>
    <div id="listaFiltrada">
        <section>
			<h2>Lista aplicando filtro</h2>
			<el-select v-model="selected" placeholder="Sexo">
				<el-option value="femenino">Femenino</el-option>
				<el-option value="masculino">Masculino</el-option>
			</el-select>
			<el-button type="primary" @click="filtrar()">Ingresar</el-button>

            <br><br>

              <el-table
                :data="listado"
                border
                style="width: 45%">
                <el-table-column
                  prop="id"
                  label="ID"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="nombre"
                  label="Nombre"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="edad"
                  label="Edad">
                </el-table-column>
              <el-table-column
                  prop="sexo"
                  label="Sexo">
              </el-table-column>
              </el-table>
		</section>
    </div>    
</template>


<script>
import personService from '@/services/personService'

export default {
    name: 'listaFiltrada',
    data(){
        return {
            selected: "masculino",
            listado: [],
            personas: []
        }
    }, 
    methods: {
        filtrar(){
					this.listado = this.personas.filter(persona => persona.sexo === this.selected);
				}
    },
    created() {
     this.personas = personService.traerTodos();
    }
};
</script>