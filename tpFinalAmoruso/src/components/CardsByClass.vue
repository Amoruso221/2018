<template>
  <el-row>
      <!-- select -->
    <el-row>
        <el-select v-model="value" placeholder="Class Name"> 
            <el-option
                v-for="item in names"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
         
        <el-button @click="cardsByClass(value)" type="primary">
        <i v-if="loading" class="el-icon-loading"></i>
            Search
        </el-button>
        <el-alert
           v-if="error"
           :closable="false"
           title="Debe seleccionar una opcion"
           type="error"
           show-icon>
        </el-alert>
    </el-row>

    <!-- tarjetas -->
        <el-row :gutter="20">
                <el-col :span="5" v-for="(item, key) in lista" :key="key">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <b>{{item.name}}</b>
                            <div class="bottom clearfix">
                                <p>Player Class: <i>{{item.playerClass}}</i></p>
                                <p>Type: <i>{{item.type}}</i></p>
                                <div v-if = "item.img">
                                    <a :href="item.img" target="_blank">Image</a>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
        </el-row>
    <!-- fin tarjetas -->

    <!-- paginacion -->
        <el-row type="flex" justify="center">
            <el-col :span="12">
                  <el-pagination
                    layout="prev, pager, next"
                    :total="totalCartas"
                    :page-size="12"
                    :pager-count="5"
                    :current-page.sync="paginaActual"
                    @current-change="handleCurrentChange"
                    v-if="paginacion">
                </el-pagination>
            </el-col>
        </el-row>
        <!-- fin paginacion -->
  </el-row>
</template>

<script>
import ApiService from '@/services/ApiService'

export default {
    name:'cardsByClass',
    data(){
        return{
            cards: [],
            names: [],
            value: '',
            error: false,
            loading: true,
            totalCartas: 0,
            paginaActual: 1,
            lista: [],
            paginacion: false
        }
    },
     beforeMount(){
         this.classNames();
     },
    methods: {
      cardsByClass: async function(){
            if(this.value != null && this.value.length > 0){
                this.error = false;
                this.loading = true;
                this.cards = [];
                let info = await ApiService.cardsByClass(this.value);
                this.cards = info;
                this.totalCartas = this.cards.length;
                this.loading = false;
                this.handleCurrentChange();                
                this.paginacion = true;
            } else {
                this.error = true;
            }
          },

        classNames: async function(){
            let info = await ApiService.Names();
            this.names = info.data.classes;
            this.loading = false;
        },

        handleCurrentChange(val){
            let pagina = this.paginaActual;
            pagina = pagina - 1;
            this.lista = this.cards.slice(pagina * 12, (pagina + 1) * 12);
        }
    }
}
</script>

<style src="../assets/css/estilos.css"></style>