<template>
        <el-container>
            <el-header>
                <router-link to="/">
                    <el-button type="danger">Inicio</el-button>
                </router-link>
            </el-header>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="6"><div class="grid-content"></div></el-col>
                    <el-col :span="8">
                            <div class="alinear">
                                <img src="../assets/images/RegisterLogo.png" alt="Register">
                            </div>
                    </el-col>
                    <el-col :span="8"><div class="grid-content"></div></el-col>
                </el-row>

                <el-row :gutter="5">
                    <el-col :span="6"><div class="grid-content"></div></el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <section class="alinear">
                                <el-input type="text" placeholder="Usuario" v-model="usuario"></el-input>
                            </section>    
                            <section class="alinear">
                                <el-input type="password" placeholder="Clave" v-model="clave"></el-input>
                            </section>
                            <section class="alinear">
                                <el-input type="password" placeholder="Repite clave" v-model="repiteClave"></el-input>
                            </section>
                            <section class="alinear">
                                <el-button @click="registrar" type="primary">Register</el-button>
                            </section>
                        </div>
                    </el-col>
                    <el-col :span="8">
                            <section class="alinear">
                                <el-alert
                                    v-if="error"
                                    :closable="false"
                                    title="Ningun campo puede estar vacio"
                                    type="error"
                                    show-icon>
                                </el-alert>
                              </section>
                              <section class="alinear">
                                <el-alert
                                    v-if="errorExiste"
                                    :closable="false"
                                    title="El usuario ya existe"
                                    type="error"
                                    show-icon>
                                </el-alert>  
                              </section>
                              <section class="alinear">
                                <el-alert
                                    v-if="errorClavesNoCoinciden"
                                    :closable="false"
                                    title="Las claves no coinciden"
                                    type="error"
                                    show-icon>
                                </el-alert>  
                              </section>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>    
</template>

<script>
import RegisterService from '@/services/RegisterService'

export default {
    name :'register',
    data (){
        return{
            usuario: '',
            clave: '',
            repiteClave: '',
            error: false,
            errorExiste: false,
            errorClavesNoCoinciden: false
        }
    },
     methods: {
         registrar(){
             if(this.usuario != null &&
                this.clave != null &&
                this.repiteClave != null &&
                this.usuario.length > 0 &&
                this.clave.length > 0 &&
                this.clave.length > 0)
            {
                if(this.clave == this.repiteClave){
                    if(!RegisterService.verificaExistenciaNombre(this.usuario)){
                        RegisterService.guardarUsuario(this.usuario, this.clave);
                        this.$store.commit('setToken', 'DYjIuHtOX6msh1D27tHb6VkXK64ap1x2eN8jsnMifhVNq0CHp4');
                        this.$router.push({name:'home'});    
                    } else {
                        this.errorExiste = true;
                    }
                } else{
                    this.errorClavesNoCoinciden = true;
                }
            } else {
                this.error = true;
            }
         }
     }
}
</script>


<style scoped>
    .el-input {
        max-width: 300px;
        margin: 5px;
    }

    .alinear {
        text-align: center;
    }

    img {
        height: 200px;
        width: 200px;
    }

    .el-header {
    text-align: right;
    }

  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-alert {
      margin: 5px;
      max-width: 250px;
  }
</style>
