# Challenge Recursiva

## Resumen
El proyecto se plantea con un mini servidor, el mismo hace uso de un csv como fuente de datos. Para separar algunas responsabilidades se crea una capa de mock, la cual parsea esa información y la entrega a la aplicación para ser utilizada por la misma. La lógica de negocio y resolución de consignas radica en la capa de service.

## Lanzar el proyecto
- **Backend**

En el directorio raíz podemos lanzar el servidor localmente. Corre en el puerto 3000.
```
npm run start
```
## Visualización de los resultados
 Una vez lanzado el servidor, los resultados se podrán observar en el navegador de manera muy sencilla, un html plano. A su vez el proyecto cuenta con endpoints dinámicos que entregan JSON para poder ser consumidos por un frontend. En el siguiente [enlace](https://recursiva-front.netlify.app/) se puede testear un pequeño front que consume esa info del localhost.