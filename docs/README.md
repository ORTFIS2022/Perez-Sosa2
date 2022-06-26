# <center> Repositorio Git </center> 

## Creación y uso de repositorios locales y remotos
Se creó un repositorio remoto en GitHub, al cual ambos integrantes del equipo tienen acceso. Además, cada integrante creó un repositorio local clonando el creado en GitHub. Desde allí, ambos participantes del trabajo pudieron trabajar offline, modificando el archivo y agregando información. Una vez finalizados estos cambios, fueron apuctualizados en el repositorio remoto, utilizando los comandos git.

## Comandos Git ejecutados desde terminal y desde el IDE

##### git clone urlRepoRemoto
Nos permite clonar el repositorio remoto ya creado en GitHub para obtener una versión local del mismo.

 ##### git checkout -b develop
 Se crea la nueva rama llamada develop y nos posiciona en ella

 ##### git add .
Envía los cambios realizados en el archivo del directorio en el que estoy trabajando al Staging Area

 ##### git commit -m "Mensaje"
 Crea un commit de la rama con los cambios realizados previamente (se encuentran en el Staging área). Además asocia un mensaje acerca de qué cambios se realizaron en la versión.

 ##### git push
Envía los cambios realizados en el repositorio local al remoto.

 ##### git log
 Nos permite visualizar el historial de los commits realizados sobre la rama: quien los hizo, cuando y el mensaje que dejó.

 ##### git pull
Permite traer toda la información actualizada del repositorio remoto al repositorio local donde estoy trabajando.

 ##### git status
 Indica en qué rama estás posicionado. Además permite ver los cambios realizados en el proyecto. De ellos los que están en el Staging Area y los que aún no.


# <center> Versionado </center>

## Buenas prácticas de versionado y uso de ramas separadas de 'main'
Para este trabajo obligatorio decidimos guiarnos por las buenas prácticas de versionado para poder desarrollar un trabajo de forma prolija y ordenada. Para ello creamos dos ramas: main y develop. En la rama develop, ambos integrantes del equipo fuimos añadiendo información y haciendo cambios para corregir aspectos del trabajo. Cada vez que llegamos a una versión estable y definitiva de una porción del proyecto, recién ahí hicimos un merge con la rama principal. De esta forma, en la rama principal "main" únicamente se almacenó contenido que consideramos completo y al cual no realizaremos más cambios.

Escogimos este método para que la información que aún estaba en estado de modificación y cambios se encontrará únicamente en la rama develop (de ahí su nombre, en estado de desarrollo). Ahí nosotros hacíamos pull y push de la información constantemente, modificando las versiones hasta llegar a la que nos pareció lo más completa posible.

De esta forma, nos aseguramos de que en la rama main podíamos encontrar únicamente información definitiva y verificada por ambos integrantes, la cual no se iba a modificar más.


## Resumen de commits y evolución del proyecto

![](https://i.imgur.com/LIVXy3g.png)
![](https://i.imgur.com/b3e9Vyx.png)
![](https://i.imgur.com/P5aOiGq.png)
![](https://i.imgur.com/hF93WDu.png) 

| ![](https://i.imgur.com/ZWevg0Q.png)|![](https://i.imgur.com/zHQwuYV.png) | 
| -------- | -------- | 
# <center> Elicitación </center>

## Ingeniería inversa

Decidimos aplicar la técnica de ingeniería inversa en el Marketplace de NFTs más grande y reconocido del mundo: OpenSea. Esto nos ayudó a investigar más sobre el tema, comparar nuestras ideas sobre lo que sería nuestro marketplace y el que OpenSea ofrece, qué aspectos se asemejan a lo que buscamos nosotros y cuáles no.

* Un aspecto a destacar es la interfaz de la plataforma, siendo muy clara e intuitiva para el usuario. Esto es clave ya que muchas personas entran al sitio para investigar y conocer sobre el tema. Que sea fácil de entender y utilizar es importante para que todo tipo de persona pueda navegar en ella y no solo expertos en el área. 
* Los NFT se publican a un precio base y los usuarios realizan ofertas hasta que finalice el tiempo límite de la venta.
* Hay un buscador que permite buscar según ítems, colecciones o cuentas.
* Existe también la opción de explorar según la categoría: arte, coleccionables, música, fotografía, deportes, etc.
* Cuando apenas se entra al sitio, aparecen dos botones centrados en la pantalla: explorar o crear. Esto es útil para el usuario ya que puede acceder rápida y específicamente a lo que busca, si explorar el sitio o si crear un NFT.
* Arriba a la derecha, donde suele aparecer en cualquier sitio, está la opción de iniciar sesión o de registrarse, acompañado de un botón para vincular tu billetera electrónica. El lugar donde se encuentran estas opciones siguen con la idea de ser una interfaz intuitiva.
* Más abajo, también en la página principal, hay un listado de las “Top collections” en los últimos 7 días (o 24 horas, o 30 días). Ahí se encuentran las colecciones que fueron tendencia los últimos días.
* Si se continúa bajando en la página principal, hay un breve instructivo de los pasos a seguir si se quiere crear y vender NFTs. 
* Están a disposición otros instructivos de distintos “How to”.
  
En conclusión, es una interfaz amigable para cualquier tipo de usuario, tanto comprador como vendedor, o incluso únicamente un observador. Además, brinda todo tipo de información acerca de cómo interactuar con los NFTs: como crearlos, como obtener tu billetera electrónica, como encontrar NTFs de tu interés, etc. No solo es el mayor marketplace de NTFs sino que también es una gran fuente de información acerca del tema, facilitando al usuario el uso de la plataforma.

  
## Investigación

Parte de la investigación acerca del nuevo mundo de los NFTs, proviene de la nota “El arte después del NFT: el valor digital de la obra” publicada por Agustina Lombardi en Montevideo Portal. A partir de esta lectura se puede comprender en mayor profundidad todo lo que refiere al concepto y manejo de los NFTs.

De ella extraimos ciertos aspectos interesantes acerca de la evolución del arte y la aparición de los NFTs:
* Primero que nada, su definición, Qué son los NFTs?
“Las siglas NFT refieren a lo que en español es un activo no fungible, o sea, un bien único e irrepetible que se presenta en forma de archivo digital, como una foto en formato .jpg, por ejemplo. El arte se asocia al NFT, justamente, por su valor de autenticidad y unicidad, el mismo valor que ha tenido siempre en su comercialización.”
* El NFT tuvo su mayor impacto en 2021, cuando muchos artistas decidieron comenzar a mintear (acción de crear un NFT) sus obras y así valorizarlas.
* Hasta la llegada del NFT, el arte digital no era comercializable, por lo tanto, esto significa una nueva era en el mundo del arte y la posible necesidad, para los artistas y amantes del arte, de tener que adaptarse a esto.
* Al mercado de los NFT se lo denomina como volátil, donde hay personas que invierten millones de dólares para luego, idealmente, generar una ganancia aún mayor. “Al fenómeno se le llama burbuja económica: es el aumento desmedido de valor de un bien que se aleja de su valor razonable, aunque sea un archivo digital el caso.”
* Tennistico, un coleccionista, divide los NFT en dos categorías:
    * Los PFPs “-siglas que refieren simplemente a “foto de perfil”- tratan el arte digital con el fin de aportar valor a la personalidad e identidad virtual.” Un claro ejemplo de esto es la colección de Bored Ape: diez mil monos, los cuales, ser dueño de uno de ellos brinda el beneficio de “pertenecer a una comunidad de más o menos élite, una comunidad a la que se busca pertenecer por algún interés”.
    * El arte uno a uno, en idioma cripto 1/1. Se trata de artistas que ofrecen piezas únicas. Por parte del comprador, hay una inversión a largo plazo donde se apuesta al artista y su obra, en que gane valor con el tiempo. 
* Se relatan los casos de varios artistas y sus caminos dentro del cripto arte: Glitchdo, Shloms, Banksy. 

## Entrevista

A la hora de decidir a qué tipo de persona íbamos a entrevistar, notamos que entrevistar a aquellas personas que no saben que es un NFT o saben pero no tienen ninguna relación con ellos no nos brindaría mucha información relevante. Por lo tanto buscamos a alguien que esté involucrado de cierta forma con el arte digital y los NFTs. Es así que llegamos a Juan Luis Villar, artista y productor de NFTs.

Juan desde hace varios años es artista, le encanta la música y la fotografía.  Se introdujo a este mundo del arte digital el año pasado, cuando conoció el término de los Non-Fungible Tokens. Fue ahí que decidió seguir averiguando sobre esta nueva forma de mostrar y vender piezas artísticas y decidió comenzar a crear una colección. La publicó en OpenSea, ya que es la plataforma más famosa y vio que había más posibilidad de vender algún NFT. Aun así, por el momento no ha logrado vender ninguno.

Hoy en día forma parte de un equipo que trabaja con un proyecto, ya más formal y profesional, llamado Viral Collectibles. Él es el artista del equipo y lo que hacen es crear una colección de NFTs de virus pixelados, donde hay una variedad enorme y cada uno presenta rasgos únicos.

Juan Luis comenzó creando NFTs de forma individual y casera, pero cuando vio que era un mundo que está creciendo cada día más y que le interesaba, decidió formar un equipo de tres personas para ir por algo más grande e importante.

Este es un claro ejemplo de un artista tradicional que conoce la nueva revolución del arte y se adhiere a ella. Es un fenómeno que creció mucho en los últimos tiempos y que continuará haciéndolo, por lo tanto Juan Luis vio que allí había un lugar en el que iba a poder crecer aún más como artista.

## Referencias a fuentes de información

##### Ingeniería inversa
Fuente: https://opensea.io/ 

##### Investigación 
Fuente: https://www.montevideo.com.uy/Noticias/El-arte-despues-del-NFT-el-valor-digital-de-la-obra-uc818788 

##### Entevista

Fuentes:
* https://www.viralcollectibles.club/ 
* https://twitter.com/mademan_verdano 
* https://twitter.com/nft_virus 

## Caracterización de usuarios: User Personas
![](https://i.imgur.com/ZDzlKot.png)
![](https://i.imgur.com/YWg2HhI.png)

## Modelo conceptual del problema
![](https://i.imgur.com/vgA3cMJ.png)
# <center> Especificación </center>

## <center> Requerimientos Funcionales </center>

### RF1: Búsqueda NFT
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá contar con una funcionalidad que permita a los usuarios realizar una búsqueda de NFTs según sus intereses.

**Prioridad:** Baja

### RF2: Filtrar por categoria
**Actor:** Usuario- comprador 

**Descripción:** El sistema deberá poder filtrar los NFTs según distintas categorías.

**Prioridad:** Baja

### RF3: Filtrar por precio
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá poder filtrar los NFTs según sus precios: se menor a mayor, de mayor a menor, el tipo de moneda, etc.

**Prioridad:** Media

### RF4: Busqueda de usuario
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá contar con la funcionalidad de poder buscar los NFTs publicados por cierto usuario.

**Prioridad:** Media

### RF5: Agregar a favoritos
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá contar con una lista de favoritos que permita al usuario guardar sus NFTs.

**Prioridad:** Media

### RF6: Reseñas
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá mostrar un apartado de reseñas del vendedor, con el objetivo de brindar confianza al usuario a la hora de comprar.

**Prioridad:** Media

### RF7: Sincronización de la wallet
**Actor:** Sistema

**Descripción:** El sistema deberá sincronizar y asociar al usuario su billetera electrónica.

**Prioridad:** Alta

### RF8: Ver ofertas
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá mostrar las ofertas realizadas por demás usuarios al NFT.

**Prioridad:** Alta

### RF9: Realizar oferta
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá permitir al usuario ingresar una oferta al NFT que desea comprar.

**Prioridad:** Alta

### RF10: Pago
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá debitar el monto del NFT de la wallet del usuario. 

**Prioridad:** Alta

### RF11: Validación de pago
**Actor:** Usuario- comprador

**Descripción:** El sistema deberá confirmar la compra, enviando un token de validación por sms/mail al usuario. 

**Prioridad:** Alta

### RF12: Publicar NFT
**Actor:** Usuario- vendedor

**Descripción:** El sistema deberá permitir al usuario publicar su NFT o colección.

**Prioridad:** Alta

### RF13: Fijar precio base
**Actor:** Usuario- vendedor

**Descripción:** El sistema deberá permitir al usuario fijar un precio base para su NFT.

**Prioridad:** Alta

### RF14: Fecha límite
**Actor:** Usuario- vendedor

**Descripción:** El sistema deberá permitir al usuario fijar una fecha límite de expiración de su NFT.

**Prioridad:** Alta

### RF15: Venta
**Actor:** Usuario- vendedor

**Descripción:** El sistema deberá acreditar el monto del NFT vendido al usuario que lo publicó.

**Prioridad:** Alta

## <center> Requerimientos no funcionales </center>

#### RNF1: 
La interfaz para los usuarios será, por el momento, móvil.

#### RNF2: 
El sistema deberá soportar x cantidad de usuarios concurrentes.

#### RNF3: 
El sistema deberá aceptar únicamente la publicación de archivos de tipo: JPG, PNG, GIF, PDF, MP4, MP3, MPEG, AVI, WAV y SVG.

#### RNF4: 
El usuario, al momento de ofertar, deberá ingresar un monto que supere la oferta anterior.

#### RNF5: 
El sistema deberá comprobar que el usuario dispone en su wallet el monto necesario para comprar el NFT, de lo contrario no se podrá realizar la oferta.

#### RNF6: 
El usuario podrá elegir su idioma de preferencia para el sitio. Las opciones serán: ingles, español, frances, italiano, portugues, aleman.

#### RNF7: 
El usuario podrá elegir la moneda en la que aparecen los precios de los NFTs y sus ofertas.


## <center> User Stories </center>

#### US1:
**Título:** Vinculación de wallet

**Narrativa:** Como usuario comprador/ vendedor de NFTs quiero vincular mi wallet para poder realizar compras y ventas.

**Criterios de aceptación:**
* Debe haber iniciado sesion
* Debera tener una wallet

#### US2:
**Título:** Publicación de NFT

**Narrativa:** Como usuario vendedor quiero publicar mi NFT para obtener una ganancia.

**Criterios de aceptación:**
* Debe haber iniciado sesion
* Debe tener un archivo que cumpla con los requerimientos de formato
* Debe determinar precio base y fecha limite 

#### US3:
**Título:** Compra de NFT

**Narrativa:** Como usuario comprador quiero ofertar para obtener mi NFT y en un futuro venderlo a un monto mayor, obteniendo una ganancia.

**Criterios de aceptación:**
* Debe haber iniciado sesion
* Debera tener suficiente dinero en su wallet como para realizar la oferta

#### US4:
**Título:** Investigar sobre NTFs

**Narrativa:** Como usuario quiero investigar el mundo de los NFTs para tener una mayor comprensión acerca del tema y tal vez evaluar la posibilidad de compra/ venta.

## <center> Use Cases </center>

#### CU1: 
**Título:** Búsqueda de NFTs 

**Actor:** Usuario

**Curso normal:**
1. Seleccionar barra de búsqueda
2. Filtrar por categoría o precio
3. Buscar NFT por nombre/ colección
4. Buscar colecciones de determinado artista
5. Seleccionar NFT

**Curso alternativo:**
Nombre/ colección/ artista no encontrado. Buscar con otro nombre.

#### CU2:
**Título:** Visualización datos NFT

**Actor:** Usuario

**Curso normal:**
1. Seleccionar botón “Favoritos” para agregar el NFT a la lista de favoritos
2. Seleccionar “Ver reseñas” para ver las reseñas de otros usuarios al vendedor del NFT
3. Visualizar ofertas realizadas al NFT

**Curso alternativo:**
1. No se desea agregar a favoritos
2. No se desea ver las reseñas

#### CU3:
**Título:** Realizar oferta a NFT

**Actor:** Usuario

**Curso normal:**
1. Seleccionar “realizar oferta”
2. Ingresar monto de la oferta
3. Confirmar

**Curso alternativo:**
2. Monto es menor a la oferta anterior. Seleccionar un monto mayor

#### CU4:
**Título:** Realizar compra NFT

**Actor:** Usuario

**Curso normal:**
1. Confirmar la compra ingresando el token
2. Se debita el monto del NFT de la wallet del usuario
3. Usuario pasa a ser dueño del NFT

**Curso alternativo:**
1. El token no es válido, revisar token/ recibir un nuevo token por sms/mail
2. No hay fondos suficientes para la compra del NFT. Se cancela la compra

#### CU5: 
**Titulo:** Publicar NFT

**Actor:** Usuario

**Curso normal:**
1. Selecciona “publicar”
2. Selecciona un archivo para subir
3. Selecciona una categoría
4. Define un precio
5. Define un plazo
6. Confirma datos y se publica

**Curso alternativo:**
2. El archivo no es válido, seleccionar otro archivo
4. El precio excede el límite, seleccionar otro precio

#### CU6: 
**Título:** Venta NFT

**Actor:** Usuario

**Curso normal:**
1. Confirma compra
2. Acredita el monto del NFT a la wallet
3. NFT deja de pertenecer al usuario vendedor

| | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 | RF11 | RF12 | RF13 | RF14 | RF15 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |-------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|CU1|x|x|x|x||||||||||||
CU2 |||||x|x||x|
|CU3|||||||||x|
|CU4|||||||x|||x|x|
|CU5||||||||||||x|x|x|
|CU6|||||||x||||||||x|
## <center> Bocetos de IU </center>
Busqueda de NFTs:

![](https://i.imgur.com/F4Rl2Rb.jpg)

Filtrar por precio:

![](https://i.imgur.com/qOI1Lyu.jpg)

Buscar colecciones:

![](https://i.imgur.com/huVrUwQ.jpg)

Visualizacion NFT:

![](https://i.imgur.com/Pa8HFJU.jpg)

Compra NFT:

![](https://i.imgur.com/nSr5iUS.jpg)

### Validación y verificación

## Verificar la especificación

#### Verificación requerimientos
| | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 | RF11 | RF12 | RF13 | RF14 | RF15 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |-------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|**Completitud**||||||||||||||||
Están correctamente priorizados?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Están los usuarios identificados?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
Están las características de calidad?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|**Verificabilidad y no ambiguedad**|||||||||||||||
|Tiene única interpretación?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
Es verificable?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|**Correctitud y consistencia**||||||||||||||||
|Es consistente?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|Conflictos con otros requerimientos?|No|No|No|No|No|No|No|No|No|No|No|No|No|No|No|
|Está dentro del alcance del problema?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|
|**Trazabilidad**||||||||||||||||
|Es identificable e único?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|

#### Verificación casos de uso

| | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 | RF11 | RF12 | RF13 | RF14 | RF15 |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |-------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
|Cumple un unico objetivo?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si
Actores claros?|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si
|Secuencia logica de pasos|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si
|Libre de detalles de diseño e implementacion|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si
|Se detallan cursos alternativos|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si|Si

## Validar la solución con personas no involucradas en el proyecto

Realizamos dos validaciones, con dos personas de ambientes diferentes. Una de ellas, Pedro de 25 años, es una persona que está constantemente inmerso en los cambios de la tecnología por lo cual conoce el mundo de los NFT y nos contaba que es usuario frecuente de diferentes tipos de plataformas ya sea para la compra-venta de NFT o cualquier tipo de criptomoneda. Al mostrarle nuestro prototipo comentó que cumple con la mayoría de las funciones que él usa o usaría. Un aspecto que nos mencionó que sería bueno tener en cuenta es una sección donde se muestren las tendencias de NFT en los últimos días, semanas. El, como comprador y vendedor de NFTs, se interesa por estar al tanto de novedades y seguir las tendencias.

La otra persona, Ana de 63 años, no conoce el mundo de los NFT ni criptomonedas, no más de lo que escucha en el noticiero, pero sabe que el mundo está en constante desarrollo y cada año que pasa surgen nuevas tecnologías que aportan valor al mercado. Al presentarle nuestro prototipo, dijo que le resultó fácil navegar en el sitio siendo este bastante intuitivo. También mencionó que, al no saber nada acerca de NFTs, le parecería bueno tener una sección informativa acerca de que son, como se compran, como se crean, etc.

### Reflexión

Creemos que el obligatorio fue una buena experiencia para abordar los temas dados en clase, así como fortalecer ciertos puntos que no nos habían quedado del todo claros. La herramienta GitHub es nueva para nosotros por lo que fue natural encontrarnos con obstáculos que al principio eran complicados pero más cerca del final, gracias a las técnicas que fuimos aprendiendo se nos hizo más sencillo poder sobrellevar el problema.
