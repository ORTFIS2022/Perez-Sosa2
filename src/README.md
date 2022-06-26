# Informe académico entrega 2

## Construcción

##### Implementación de funciones principales 

Se implementaron las funciones de crear nft y explorar, siendo estos los requerimientos funcionales definidos en la primer parte del trabajo, RF12 y RF2 respectivamente. 
Primero se creo la pestaña Crear, en la cual se pide al usuaio que ingrese del nombre, una descripcion, una categoria, el precio, la fecha de expiracion y la imagen del Nft a crear.
Luego, la pestaña Explorar, en la cual se pueden visualizar los Nft disponibles en el sistema: tanto los pre cargados como los creados por el usuario. En los mismos se puede apreciar la imagen, su nombre y su precio en ETH. 

##### Configuración de plataforma tecnológica para desarrollo y producción
La estructura del proyecto se dividio en dos partes, separando el dominio de la interfaz, cada uno con sus respectivos paquetes de node modules.


## Interfaz de usuario

##### Interfaz de usuario web y principios de usabilidad

Con respecto a la interfaz de usuario, intentamos que fuera lo mas intuitiva y agradable a la vista posible, con colores básicos, nombres nemotécnicos, sin tener que invadir al usuario con aspectos complicados de comprender y ejecutar. 
Gracias al uso de los componentes de Material Design, la navegacion en la pagina se hace bastante facil de utilizar, ya sea tanto agregar un nuevo Nft, como realizar una exploración de los Nfts dentro de la página y navegar entre secciones.

##### Implementación: Material Design Web Components

Para la implementacion y diseño de nuestra interfaz se utilizaron los siguientes componentes de Material Design.
Snackbar: Utilizados para los mensajes emergentes ya sean de validación o un error que el usuario haya cometido.
MCD-Top App Bar: Utilizado para crear la barra superior donde se situan las pestañas "Crear" y "Explorar".
MCD-Card: Utilizado para mostrar los datos de los Nft.
MCD-Image List: Utilizado para ubicar las cards de los Nft en la interfaz de una forma organizada.  
MDC-Texfield: Utilizados para darle lugar al ingreso del nombre y descripcion de los Nft.  
MDC-Select: Utilizado para poder seleccionar y asignar las categorias correspondientes previamente cargadas.   
MCD-Button: Utilizados para poder agregar los nft a la lista y poder visualizarlos dentro de las cards.

##### Cumplimiento de estándar de accesibilidad WCAG

La interfaz de usuario cumple con los estandares de accesibilidad WCAG:

Perceptible: Tanto los botones como los cuadros de texto estan centrados y a la vista, facilitando el uso de los mismos por parte del usuario. 

Operable: La mayoria de los componentes de la interfaz son operativos, asi como la navegacion entre las secciones. La barra de categorias se mantiene sin ser operable debido a problemas de desarrollo. Igualmente esta presente por decisiones de diseño. 

Comprensible: Todos los botones y campos de texto son comprendibles al usuario, siendo nombrados de forma nemotecnica. Ademas, se indica con un mensaje de alerta cuando los usuarios cometen un error al ingresar datos.


##### Seguir especificación de estilo

Para el diseño de la interfaz se utilizaron tonos de la paleta de Material Design: Blue 800 como tono secundario y Light Blue 300 como tono principal. 

## Codificación

La implementación y codificacioón realizada por cada integrante desde su propia maquina se realizo en Visual Studio Code, acompañado por los estándares de codificación de Google tanto para HTML, CSS y JavaScript. 



##### Buenas prácticas de OOP

Se tuvieron en cuenta las buenas practicas de OOP, separando la logica de la interfaz en distintos directorios. Dentro del dominio, se utilizaron las siguientes clases:

· lista_categorias.mjs
· lista-nfts.mjs
· nft.mjs


## Test unitario

##### Test unitarios en Jest


## Test de sistema

##### Realizar test de sistema en un entorno separado del desarrollo

Se realizo el test del sistema una vez finalizado el desarrollo y habiendo congelado el codigo. 


##### Detallar sesiones de prueba exploratoria

|  |  |
| -------- | -------- |
| MISIÓN      | Probar casos borde de ingreso de fecha     |
| INICIO     | 26/06/2022 17:00    |
| TESTER     | Santiago    |
| DURACIÓN     | Corta (20 minutos)  |
| TIPOS DE PRUEBAS    | Agregar fecha anterior al dia de la prueba. Agregar fecha del dia de la prueba. Agregar fecha posterior al dia de la prueba    |
| INCONVENIENTES     | Ingreso de un año de mas de 4 digitos. Ademas, mejor si unicamente se aceptan años menores a 2030     |


|  |  |
| -------- | -------- |
| MISIÓN      | Probar casos borde de ingreso de precio     |
| INICIO     | 26/06/2022 19:00    |
| TESTER     | Chiara    |
|  DURACIÓN    | Corta (30 minutos)  |
| NOTAS DE PRUEBAS     | Ingreso precio negativo. Ingreso precio mayor a 100. Ingreso menor a 100 y positivo    |
| INCONVENIENTES     | Se permite el ingreso de numeros negativos. Se deberia poder ingresar solamente un maximo de 3 digitos     |
## Reporte de issues



##### Aplicar buenas prácticas de reporte de issues

##### Definir labels para tipos de issue y niveles de severidad

##### Dejar issues abiertos para correcciones o mejoras futuras

##### Sumarizar número de issues reportados por tipo

##### Realizar una evaluación global de la calidad

## Reflexión

##### Detalle del trabajo individual

##### Técnicas aplicadas y aprendizajes
