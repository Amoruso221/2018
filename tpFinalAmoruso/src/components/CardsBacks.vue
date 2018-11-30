<template>
    <el-row>
    <!-- spinner -->
        <el-row :gutter="20" class="spinnerRow" v-if="loading"  type="flex" justify="center">
            <el-col :span="6" :offset="6">
                <i class="el-icon-loading"></i>
            </el-col>
        </el-row>
    <!-- fin spinner -->

    <!-- tarjetas -->
        <el-row :gutter="20">
                <el-col :span="5" v-for="(item, key) in cards" :key="key">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px;">
                            <b>{{item.name}}</b>
                            <div class="bottom clearfix">
                                <p>{{item.howToGet}}</p>
                                <div v-if = "item.imgAnimated">
                                    <a :href="item.imgAnimated" target="_blank">Image</a>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
        </el-row>
    <!-- fin tarjetas -->
  </el-row>
</template>

<script>
import ApiService from '@/services/ApiService'

export default {
    name:'cardsBacks',
    data(){
        return {
            cards: [],
            loading: false
        }
    },
    beforeMount(){
         this.cardsBacks();
     },
    methods: {
      cardsBacks: async function(){
          console.log('entro al metodo');
                this.loading = true;
                this.cards = [];
                let info = await ApiService.cardsBacks();
                console.log(info)
                this.cards = info;
                this.loading = false;                
          }
    }
}
</script>

<style scoped>

    .el-select {
        margin: 5px;
    }

    .el-alert {
      margin: 5px;
      max-width: 300px;
      display: inline;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  a {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  span {
      margin: 5px;
      display: block;
      font-family: Arial, Helvetica, sans-serif;
  }

   .el-col {
       margin: 5px;
   }

   .el-card {
       height: 130px;
       background-color: whitesmoke;
   }

   p {
       line-height: 15px;
       margin: 5px;
   }
</style>