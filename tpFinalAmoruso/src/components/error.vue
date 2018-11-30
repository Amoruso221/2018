<template>
    <el-row type="flex" justify="center">
        <el-col :span="12">
            <section>
                <img src="../assets/images/Errores.png" alt="eror">
            </section>
            <section>
                <p style="margin=5px;">Ocurrio algun error</p>
                <el-button @click="inicio" type="primary">Volver a Inicio</el-button>
            </section>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'error',
    data(){
        return{}
    },
    methods: {
        inicio(){
            this.$router.push('cardsBySet');
        }
    }
}
</script>
