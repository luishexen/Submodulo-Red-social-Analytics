[![Build Status](https://travis-ci.org/luishexen/Submodulo-Red-social-Analytics.svg?branch=master)](https://travis-ci.org/luishexen/Submodulo-Red-social-Analytics)

[![Heroku](https://www.herokucdn.com/deploy/button.png)](http://submodulo-red-social-analytics.herokuapp.com/)

[![Docker](https://dl.dropboxusercontent.com/u/31245679/Im%C3%A1genes%20de%20Github/dockerImagen.PNG)](https://hub.docker.com/r/luishexen/submodulo-red-social-analytics/)

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


## Despliegue en PaaS
La aplicación se despliega en heroku. Se ha elegido esta plataforma porque ofrece varios servicios de forma gratuita además de su facilidad de uso. El archivo de configuración de dicho despliegue es el archivo Procfile. Se puede acceder a la aplicación desde la dirección [http://submodulo-red-social-analytics.herokuapp.com/](http://submodulo-red-social-analytics.herokuapp.com/).

Este Paas soporta el lenguaje que hemos elegido para nuestro desarrollo "Node.js", además de múltiples lenguajes.

Otro motivo para su utilización es la utilización del proceso de despliegue automático a partir de un repositorio, en este caso soportando el cliente Github donde se encuentra el repoitorio de mi proyecto. Lo voy a explicar en dos pasos, primero conectamos con nuestro repositorio en Github proporcionandole la dirección, y segundo, habilitando la opción de "Automatic deploys" desde una rama del repositorio, en nuestro caso la rama Master.

![img](https://dl.dropboxusercontent.com/s/vozd7h6opcy9gzd/CC-Hito3-1.png?dl=0)

En el siguiente enlace se puede ver un ciclo completo de despliegue en heroku de nuestra app:

**[Prueba Despliegue](https://github.com/luishexen/Submodulo-Red-social-Analytics/blob/master/docs/PruebaDespliegue.md)**


## Instalación

  * Código
  ```
  git clone https://github.com/luishexen/Submodulo-Red-social-Analytics.git
  cd Submodulo-Red-social-Analytics
  ```

  * Instalación de dependencias
  `npm install`

  * Ejecución
  `npm start`

  Y por último usamos este enlace [localhost](http://localhost:5000/)
  
## Docker
  
En este [enlace](https://hub.docker.com/r/luishexen/submodulo-red-social-analytics/) está la imagen para el despliegue automático del submódulo de la red social. Es necesario utilizar docker para desplegarlo y luego lanzarlo.

Cabe destacar que ha sido sincronizado con este repositorio para actualizarse automáticamente.

