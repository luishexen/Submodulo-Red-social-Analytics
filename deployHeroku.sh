#!/bin/bash

#Iniciamos sesión
sudo heroku login

#Descargamos el repositorio
echo 'Descargando repositorio...'
git clone https://github.com/luishexen/Submodulo-Red-social-Analytics.git

#Nos colocamos en el repositorio
cd Submodulo-Red-social-Analytics

#Creamos la aplicación
echo 'Creando aplicación...'
sudo heroku apps:create --region eu submodulo-red-social-analytics

#Desplegamos la aplicación a Heroku
echo 'Desplegando aplicación...'
sudo git push heroku master

#Abrimos el navegador
echo 'Abriendo navegador...'
sudo heroku open
