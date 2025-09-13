# WebLoadBalancer
Proyecto de simulación de balanceo de carga web utilizando Nginx y múltiples servidores Express en contenedores Docker.
## Tecnologías
- Nginx
- Node.js / Express
- Docker / Docker Compose
- Git

## Requisitos previos
- Docker
- Git

## Instalación y Uso

1. Descargar o clonar el repositorio:
```bash
git clone https://github.com/kevinandresbenitez/WebLoadBalancer
```
```
cd BalanceadorDeCarga
```
2. Levantar los contenedores:
```bash
docker compose up
```
3. Abrir el navegador e ir a:
```
http://localhost:1234
```
4. Recargar la página varias veces para ver cómo el balanceador distribuye las solicitudes entre los servidores.

## Configuración
* Los servidores Express están configurados para escuchar en el puerto 3000 internamente.
* Nginx está configurado como balanceador en el puerto 80.
* Algoritmo de balanceo por defecto: **round-robin**.
* Para cambiar los servidores o puertos, editar `docker-compose.yml` y `nginx/conf.d/default.conf`.

## Aclaraciones
* El balanceador está configurado para usar el puerto 1234.
* Si hay otro servicio ocupando ese puerto, no funcionará.
* Cada servidor Express usa volúmenes, por lo que las dependencias (`node_modules`) se generan dentro de tu carpeta local `Servers/ServerX`.

## Licencia

[MIT](LICENSE)
