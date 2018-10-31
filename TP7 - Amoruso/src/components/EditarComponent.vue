<template>
  <div id="editar">
    <section>
        <el-row>

          <!-- columna editar -->
          <el-col :span="12">
              <h2>Editar persona</h2>
              <h4>Pisamos la persona con el mismo ID</h4>
		
              <el-row>
                <label>ID: </label><br>
                <input type="number" v-model="persona.id">
              </el-row>
              <br><br>

              <el-row>
                <label>Nombre: </label>                  
								<el-input v-model="persona.nombre" size="small"></el-input>
              </el-row>
              <br><br>
              
              <el-row>
                <label>Edad: </label><br>
                <input type="number" v-model="persona.edad">
              </el-row>
              <br><br>

              <el-row>
                <el-select v-model="persona.sexo" placeholder="Sexo">
									<el-option value="femenino">Femenino</el-option>
									<el-option value="masculino">Masculino</el-option>
								</el-select>
              </el-row>
              <br><br>

              <el-row>
                <el-button type="primary" @click="editar()">Ingresar</el-button>
              </el-row>
          </el-col>
          <!-- columna editar -->

          <!-- columna tabla -->
            <el-col :span="12">
              <h2>Lista</h2>
                <el-table
                :data="personas"
                border
                style="width: 100%">
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
            </el-col>
          <!-- columna tabla -->
        </el-row>
    </section>
  </div>
</template>

<script>
import personService from '@/services/personService'

export default {
  name: 'editar',
  data() {
    return {
      personas: [],
        persona: {
            id: 0,
            nombre: "",
            edad: 0,
            sexo: ""
          }
	    }
  },
  methods: {
				editar(){
                if(this.persona.nombre != null &&
                    this.persona.nombre.length > 0 &&
                    this.persona.edad != null &&
                    this.persona.edad > 0 &&
                    this.persona.edad.length > 0)
                    { 
                      if(personService.verificaID(this.persona.id)){
                        personService.editarPersona(this.persona.id, this.persona.nombre, this.persona.edad, this.persona.sexo);
                        this.personas = personService.traerTodos();

                        this.persona.id = 0;
                        this.persona.nombre = "";
								        this.persona.edad = 0;
                      } else {
                        alert('El ID no existe');
                      }
                    } 
                    else { alert('ningun campo debe estar vacio y la edad no debe ser negativa');}
              }
            },
            created(){
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

input {
	max-width: 200px;
}
</style>