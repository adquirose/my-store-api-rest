*levantar servicios:
docker-compose up -d <NOMBRE_SERVICIO>

*verificar servicios:
docker-compose ps

*verificar estado de todos los servicios:
docker-compose ps -a

*bajar servicio:
docker-compose down <NOMBRE_SERVICIO>

*conectar al contenedor desde la terminal:
docker-compose exec postgres

*ya en el contenedor, conectar a la db:
psql -h localhost -d <DDBB_NAME> -U <USER_NAME>

*para ver la estructura de la db:
\d+
* salir de la db:
\q

*para salir del contenedor
exit
