-hooks =funciones
-extension es7 react/redux.... si vas a details ves los atajos
-funcion return de app (pero creo q es para todos) devuelve html solo puede devolver uno.Como solo es uno lo 
englobas en un div
-los input de html deben si o si cerrarse
-debes refrescar si tenes errores
-en carpeta componentes podes crear 2 carpetas una public y la otra secured. Es para organizar q vistas se van a ver si estas logueado o no
-si instalaste las herramientas haces rafc te hace un react function al component
-los componentes de react se manejan bajo un archivo distinto no es un html ni un javascript es un jsx( es lo q react necesita tonar, entiende q es 
un componente y lo trata como componenete). Asi q lo q colocas en el index.js en render es una porcion de codigo jsx
-si colocas componenetes en otros componentes q no es el index lo colocas de la misma forma ej <footer/>
-si importas una clase no debe llevar llaves 
-rce atajo crea clase componente
-si te aparece error rojo ctrl+shift+r para ver mejor error
-si tengo una clase que otorga estilos no le puedo colocar class es className sino te larga error en la consola del navegador
-si instalaste todo lo de chrome ctrl +shift+i vamos a componenetes. Si haces click podes ver un arbol de componentes
-npx create-react-app my-app --template typescript ( sino te crea con javascrip)
-hook nos permite relacionar en cuanto al pasaje de informacion entre los distintos componentes
-escribis useState luego ctrl+espacio y elegimos la que dice a la derecha useState.
 te hará esto const [state, setstate] = useState (initialState)
 lo cambias a const [clicks, setstate] = useState (0)
parte del array primera: va a existir la variable que va a ser sometida al estado 
                segundo: funcionalidad encargada de cambiar la primera variable
Lo q tiene entre los parentesis es el valor inicial que queremos q tengaf
-si queres hacer una referencia a una variable en el return debes colocar esa variable entre
{}
-si escribis dentro de una etiqueta html escribis on te apareceran muchisimos eventos que son 
propios de react algunos son similares a los de javascript
-primer video hock como llama a la funcion 
-useeffect lo importas donde esta usestate . Es una escucha activa de lo que pasa o cambia del componente para hacer lo q tenga
que hacer 
Nos permite ejecutar codigo arbitrario (codigo que a ti te da la gana) cuando el componente se monta en el dom y cada vez que cambian 
las dependencias que nosotros les digamos.
Primero parametro codigo para ejecutar que como minimo se ejecutara una vez
segundo parametro lista de dependencias que seria valores que nosotros queremos decir cada vez q cambie el valor de aca quiero ejecutar el 
codigo del primer parámetro (este parametro es opcional). Sino no lo colocas el primer parametro se va renderizar cada vez que se
muestre el componente.Si le pasas un array vacio solo se renderizaria cuando se renderiza por primera vez el componente.
Por ejemplo podrias hacer q se renderice cada vez q cambie el turno o el turno puede varios parametros colocando comas.
Asi q si solo tiene una variable en el segundo parametro entonces se renderiza el useeffect 2 veces : primero la primera vez q se renderiza y la
segunda seria cuando cambie esa variable q colocaste.
-useReducer es un hook que permite gestionar el estado de un componente utilizando un patrón de diseño conocido como "reducer"
Este hook es una alternativa al uso del hook useState y se utiliza cuando el estado del componente es más 
complejo o cuando hay una serie de acciones que pueden modificar ese estado.