<template>
  <div id="eliminar">
    <EliminarComponent></EliminarComponent>
  </div>
</template>

<script>
import EliminarComponent from '@/components/EliminarComponent.vue'

export default {
  name: 'eliminar',
  data() {
    return {
        personas: []
	    }
  },
   components: {
     EliminarComponent
   }
}
</script>