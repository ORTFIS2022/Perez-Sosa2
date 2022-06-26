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

- Snackbar: Utilizados para los mensajes emergentes ya sean de validación o un error que el usuario haya cometido.
- MCD-Top App Bar: Utilizado para crear la barra superior donde se situan las pestañas "Crear" y "Explorar".
- MCD-Card: Utilizado para mostrar los datos de los Nft.
- MCD-Image List: Utilizado para ubicar las cards de los Nft en la interfaz de una forma organizada.  
- MDC-Texfield: Utilizados para darle lugar al ingreso del nombre y descripcion de los Nft.  
- MDC-Select: Utilizado para poder seleccionar y asignar las categorias correspondientes previamente cargadas.   
- MCD-Button: Utilizados para poder agregar los nft a la lista y poder visualizarlos dentro de las cards.

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
Los test unitarios se realizaron con Jest. Al ejecutarlos encontramos un error que no logramos solucionar al dia de la fecha del code freeze. El mismo cae en el error de que el precio excede el limite, cuando en las pruebas se ingresaron distintos valores dentro de los parametros, todos devolviendo el mismo error. 

![](https://i.imgur.com/fWKKP7V.png)
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

Se documentaron en GitHub.

##### Niveles de severidad

Definimos un rango del 1 al 3 para indicar la severidad de los issues, siendo 1 el nivel de severidad mas alto y 3 el mas bajo. 

-   Issue correspondiente a la barra de categorias: Tiene un nivel de severidad alto, indicado con el numero 1. Corresponde a nuestra idea principal, siendo este uno de los requerimientos a desarrollar. Aun asi, no influye en el funcionamiento de la interfaz.

-  Issue correspondiente a un archivo valido: Nivel de severidad alto, es importante que se ingrese un url de imagen valido. De lo contrario se creara un Nft sin imagen. 
   
-  Issue correspondiente al precio infinito: Nivel de severidad bajo. A pesar de que se podria mejorar este aspecto, no afecta a la funcionalidad del sistema ya que si el precio es mayor a 100 lo validara como incorrecto.

-  Issue correspondiente a fecha no acorde: Nivel de severidad medio. No afecta la funcionalidad del sistema pero no es acorde a la realidad de un marketplace.

-  Issue correspondiente a precio negativo: Nivel de severidad alto. Afecta a la funcionalidad del sistema ya que no se deberian poder ingresar Nfts con precios negativos. 

## Reflexión

###### Santiago Pérez
En lo personal, fue toda una aventura el hecho de aprender una herramienta totalmente nueva para mi como lo es Material Design, fueron muchos los días de tratar de entender cada comando. Si bien la mayor parte del tiempo era bastante estresante porque no salian las cosas como uno planeaba creo que se llego a un buen resultado, logramos una interfaz adecuada a la propuesta de trabajo y eso me deja bastante orgulloso del equipo.
Adicionar que me gusto poder volver a implementar Html y Js que hacia tiempo no tocaba mucho, fue toda una experiencia que sin duda aportó un gran valor a mis conocimientos de aqui en adelante.

###### Chiara Sosa
Fue un gran desafio este trabajo obligatorio para mi ya que no tenia conocimientos previos de HTML, CSS ni JavaScript. A pesar de que me llevo varias horas  investigar acerca de como funcionan y se utilizan esas tecnologias, me llevo un nuevo conocimiento que si duda me va a servir para el resto de la carrera y para mi vida profesional. Con respecto a Material Design, tambien un gran desafio comprender como se utiliza e implementa pero se logro un resultado final que sin duda se adecuo a nuestras expectativas. No fue un trabajo facil, pero me llevo varias herramientas nuevas para seguir utilizando.

### Presentaciones en clase

###### Santiago Pérez
Testing Exploratorio
https://1drv.ms/p/s!AtXxSdGYBKcsih_YBXcsX3bmUsXZ?e=W8H45t 

###### Chiara Sosa
Reporte de Issues
https://docs.google.com/presentation/d/1pSAlanrkfXaL47rbxJUKt9n0Bgiy38lTMBElc1EOD7M/edit?usp=sharing 


