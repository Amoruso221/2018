<template>
        <el-container>
            <!-- barra lateral -->
            <el-aside width="200px">
              <el-row class="tac">
                <el-col :span="24">
                  <el-menu class="el-menu-vertical-demo"
                        default-active="1"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :router='true'>
                        <img src="../assets/images/HS_logo.png" alt="Logo" @click="inicio">
                    <el-menu-item index="cardsBySet">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Set</span>
                    </el-menu-item>
                    <el-menu-item index="cardsByClass">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Class</span>
                    </el-menu-item>
                    <el-menu-item index="cardsByFaction">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Faction</span>
                    </el-menu-item>
                    <el-menu-item index="cardsByQuality">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Quality</span>
                    </el-menu-item>
                    <el-menu-item index="cardsByRace">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Race</span>
                    </el-menu-item>
                    <el-menu-item index="cardsByType">
                     <i class="el-icon-star-off"></i>
                     <span>Cards by Type</span>
                    </el-menu-item>
                    <el-menu-item index="cardsBacks">
                     <i class="el-icon-star-off"></i>
                     <span>Cards Backs</span>
                    </el-menu-item>       
                </el-menu>
                </el-col>
              </el-row>
            </el-aside>
            <!-- fin barra lateral -->

            <el-container>
                <!-- cabecera -->
                <el-header>
                  <el-input placeholder="Card Name" v-model="NombreCarta"></el-input>
                  <el-button type="primary" icon="el-icon-search">Search</el-button>
                  <el-button @click="logout" type="danger">Logout</el-button>
                </el-header>
                <!-- fin cabecera -->

                <!-- principal -->
                <el-main>
                  <!-- vistas hijas de home -->
                  <router-view/>
                </el-main>
                
                <!-- fin principal -->
                <el-footer>Matias Ezequiel Amoruso</el-footer>
            </el-container>
        </el-container>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
          NombreCarta: '',
        }
    },
    beforeMount() {
        this.rutaDefault();
    },
    methods: {
          logout(){
            this.$store.commit('removeToken');
            this.$router.push('/');
          },

          rutaDefault(){
            this.$router.push('home/cardsBySet');
          },

          inicio(){
            this.$router.push('cardsBySet');
          }
    }
}
</script>

<style scoped>
  .el-footer {
    background-color: #545c64;
    color: white;
    text-align: center;
    line-height: 60px;
  }

  .el-header {
    background-color: #545c64;
    color: #333;
    text-align: right;
    line-height: 60px;
  }
  
  .el-aside {
    text-align: left;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-input {
    max-width: 200px;
    margin: 5px;
  }

  img {
    height: 100px;
    width: 200px;
  }

</style>
