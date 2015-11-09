![[Build Status](https://travis-ci.org/luishexen/Submodulo-Red-social-Analytics.svg?branch=master)](https://travis-ci.org/luishexen/Submodulo-Red-social-Analytics)

# Submodulo Red social: Analytics y BD de juegos

Este proyecto participa en el Certamen de Proyectos Libres de la Universidad de Granada 2015-2016 como parte del proyecto [Red social](https://github.com/albertogarf91/Red-social-ETSIIT). 

Para consultar las bases, ir [aquí](https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit)


## Descripción
Este submódulo se encargará de hacer un análisis de datos de los usuarios dentro de los juegos de la red social. El módulo también se encargará de la gestión de usuarios de los jugadores. Se enlazará la información de los usuarios de la red social a los juegos para evitar el registro y la autenticación, en caso de que el jugador sea externo a la red social se dispondrá de un registro de usuarios.

Este submódulo pertenece al proyecto llamado Red social el cuál dispondrá de chat, juegos, mensajería interna, bases de datos, análisis y minería de datos de los jugadores...


## Herramientas de desarrollo

-[Node.js](https://nodejs.org/en/): Con esta herramienta se desarrollará el servidor que gestionará los usuarios y el que realizará el análisis de datos.

-[Socket.io](http://socket.io/): Este se utilizará para la comunicación cliente servidor.

-[HTML5](http://www.w3schools.com/html/html5_intro.asp): Lo usaremos para la parte del registro de usuarios de los clientes externos a la red social.

-[R](http://www.revolutionanalytics.com/what-r): Utilizaremos r junto a Knime para el análisis e datos.

-[MongoDB](https://www.mongodb.org/): Es una base de datos NoSql donde se almacenarán los usuarios de los diferentes juegos y los datos para el análisis de datos.

-[Mocha](http://mochajs.org/): Esta herramienta la utilizaremos para los test.

-[Travis CI](https://travis-ci.org/): Con esta herramienta se encargará de la integración continua.

-[Azure](https://azure.microsoft.com/es-es/): Usaremos Azure para el despliegue en un PaaS/IaaS.
