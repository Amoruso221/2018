<template>
    <div id="app">
      <div id="nav">
          <router-link to="/">Agregar - </router-link>
          <router-link to="/editar">Editar - </router-link>
          <router-link to="/eliminar">Eliminar - </router-link>
          <router-link to="/filtrar">Filtrar - </router-link>
      </div>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>
