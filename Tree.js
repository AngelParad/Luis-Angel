class Node {
    constructor (value) {
      this.value = value
      this.right = null
      this.left = null
    }
  }
  
  class Tree {
    constructor () {
      this.root = null
    }
  
    isEmpty () {     //cuando este vacio
      return this.root === null
    }
  

  
     addRecursive (value, node = this.root) { // el nodo es lo mismo que el root, en ese momento es nulo
      if (!node) { //si es diferente del nodo
        this.root = new Node(value)//el root que se le ingrese va a ser el nodo
        return
      }
  
      if (value < node.value) { //si el valor es menor a el nodo que se pase a la izquierda
        if (node.left) {
          return this.addRecursive(value, node.left)//que devuelva el valor que se añadio en la izquida
        }
        node.left = new Node(value)//guardarlo
        return
      } else {
        if (node.right) {
          return this.addRecursive(value, node.right)//que ingrese al que queda vacio, hacia la derecha
        }
        node.right = new Node(value)//que quede guardado en nodo right
        return
      }
    }
  
 //este es con recursividad para facilitar la busqueda y la lectura
//solo colocando condiciones para que haga un proceso rapido y sin necesidad de usar mas codigo
  
    findRecursive(value, node = this.root) { 
      if (node.value === value) { //si el valor del nodo que se busca es igual al valor ingresado
        return node //que devuelva el nodo con el valor
      }
  
      if (node.value < value) { // si es menor el valor que el nodo que esta para buscarse 
        return this.findRecursive(value, node.right) //que devuelva con la llamada de la funcion
      } else if (node.value > value) { //y cuando sea mayor
        return this.findRecursive(value, node.left)
      }
    }

    

  
    delete (value, node = this.root) {
      if (!node) {
        return 
      }
      if (node.value === value) {// si el valor que se ingresa es igual al valor de un nodo es porque si existe
       //entonces pasa abaj
       
        
        if (!node.left && !node.right) {//si los vaores son diferentes entonces sera nula la eliminacion
          return null // o sea que no tienen hijos
          
        }



      
        if (!node.left) { //cuando no se tiene un hijo izquierdo
          return node.right //pero si se tiene el derecho
        }

    
        if (!node.right) {//si el hijo derecho no lo tiene
          return node.left //entonces el izquierdo si
        }
  
        // tiene dos hijos
        // buscamos el menor de los hijos
        var temp = this.findMin(node.right) //definimos y queremos eliminar el menor de los nodos de la derecha
        // con ese valor reemplazamos el valor del nodo que queremos eliminar.
        node.value = temp.value;
        // seguimos iterando para reemplazar la rama que cambio,
        // eliminando el nodo que está repetido
        node.right = this.delete(temp.value, node.right)
        return node;
      }
      // buscamos a la derecha
      if (node.value < value) {
        node.right = this.delete(value, node.right)
        return node
      }
      // buscamos a la izquierda
      if (node.value > value) {
        node.left = this.delete(value, node.left)
        return node
      }
    }

    //buscar el nodo menor

    findMin(node = this.root) { //donde el nodo es la raiz
      if (!this.isEmpty()) { //si es diferente de vacio
    
        while (node.left) { //iteramos en la izquierda de cualquier nodo, hasta llegar al ultimo que es el menor
          node = node.left
        }
        return node
      }
    }


 
    inOrder (node = this.root) {
      if (!node) { //mria que si es diferente del nodo no retorne nada
        return
      }
      this.inOrder(node.left) //recorre los nodos de la parte izquierda hasta el centro
      console.log(node.value) //imprime la raiz que tiene
      this.inOrder(node.right) //hace lo mismo que la izquierda pero en la derecha
    }

    preOrder (node = this.root) {
      if (!node) {
        return
      }
      console.log(node.value) //primero la raiz
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
    
    postOrder (node = this.root) {
      if (!node) {
        return
      }
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
  
  var tree = new Tree()
  var arr = [5,2,3,4,12,9,21,19,25]
  
  for (var i = 0; i < arr.length; i++) {
    tree.addRecursive(arr[i])
  }
  
  tree.inOrder()
  console.log()
  tree.preOrder()
  console.log()
  tree.postOrder()
  console.log()
  console.log(tree.find(12))
  console.log(tree.findRecursive(12))
  console.log(tree.find(4))
  tree.delete(12)
  console.log()
  tree.print()