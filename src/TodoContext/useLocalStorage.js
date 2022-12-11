import React from "react";

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'cocinar las calabazas', completed: false},
// ]

//creamos un custom hoock para persistir los datos en localStorage y manejar
// el estado 
function useLocalStorage(itemName, initialValue) {
    // creamos el estado de error y carga
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false);
    const [ item, setItem ] = React.useState(initialValue);
  
    //Sumulamos el tiempo de respuesta de una API
    React.useEffect(() => {
  
      //simulamos un segundo de carga
      setTimeout(() => {
      //envolvemos en la strustura "try y catch" para menejar los errores
        try {
          // Persistir los datos con localStorage
          const localStorageItems = localStorage.getItem(itemName);
  
          let parsedItem;
  
          if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItems);
          }
  
          setItem(parsedItem);
        } catch (error) {
          setError(error);
        } finally {
          // tambien podemos usar funally para indicar que ya no esta cargando
          setLoading(false)
        }
      }, 1000);
  
    }, []);
   
  
    // saveTodos
    const saveItem = (newItem) => {
      try {
        const parseTodoItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, parseTodoItem) 
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
  }

  export { useLocalStorage };