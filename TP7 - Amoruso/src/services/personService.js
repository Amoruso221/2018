export default {
  traerTodos(){
    return JSON.parse(localStorage.getItem("people")) || [];
  },


  guardarLista(lista){
    localStorage.setItem("people", JSON.stringify(lista));
  },


  guardarPersona(nombre, edad, sexo) {
    let persons = this.traerTodos();
    let idx = 0;
    for (let person of persons) {
      idx = person.id ++;
    }
    let people = {
      id: idx,
      nombre: nombre,
      sexo: sexo,
      edad: edad
    } 
    persons.push(people);
    this.guardarLista(persons);
  },
  
  
    borrarPersona(id){
      let lista = this.traerTodos();
      let listaAux = lista.filter(persona => persona.id !== id);
      this.guardarLista(listaAux);
    },
    
    
    editarPersona(id, nombre, edad, sexo){
      let lista = this.traerTodos();

      let persona = {
        id: id,
        nombre: nombre,
        sexo: sexo,
        edad: edad
      }
      
      let indice = lista.findIndex(persona => persona.id == id);
      lista[indice] = persona;

      this.guardarLista(lista); 
    },
    verificaID(id){
      let persons = this.traerTodos();
      
      for (let person of persons) {
        if(person.id == id){
          return true;
        }
      }
      return false;   
    }
}