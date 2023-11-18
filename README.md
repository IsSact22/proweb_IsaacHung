# Pasos para realizar un repositorio y creacion de branch 
## Paso #1: Usamos la plantilla predeterminada para el repositorio 
![image](https://github.com/IsSact22/proweb_IsaacHung/assets/127360020/a10b4406-434d-455f-a1bc-9ef00b31c5f8)

## Paso #2: presentacion del repositorio creado, en nuestro repositorio tendremos un archivo llamado Readme.md, para documentar todo los progresos del proyecto.
![image](https://github.com/IsSact22/proweb_IsaacHung/assets/127360020/9be57fc4-92c6-4ce6-8247-4fd856391ecc)

## Paso #3 Creacion de las branch para mayor orden de las versiones del proyecto, en este caso crearemos 3 branch nuevas (Main, Staging y Develop)
para ello debemos ir a la opcion de Branch y aqui nos saldra todas las branch que tengamos ahora crearemos las nuevas.
![image](https://github.com/IsSact22/proweb_IsaacHung/assets/127360020/f047cd8b-1c77-470a-a7d0-e98369b01308)

Unas vez agregadas las nuevas branch nos aparecera asi 
![image](https://github.com/IsSact22/proweb_IsaacHung/assets/127360020/e5afd500-6328-4359-9e4a-facb24405587)

![image](https://github.com/IsSact22/proweb_IsaacHung/assets/127360020/27c1b787-24df-49e3-842b-81f2bf6417f5)

## Aparte de esta forma de crear los branch, tambien podemos aplicar los comando de git para hacerlo que son los siguiente:
- **`git branch -m (nombre de la rama)`**: esto lo usamos para crear la branch al repositorio
- **`git checkout`**: es para movernos y trabajar entre las ramas, para esto seleccionamos la rama que queramos trabajar dentro del repositorio.

Y asi finalizamos con la creacion de un repositorio y creacion de las branch esta es una explicacion personal para lo que utilizaria las ramas creadas:

- **`main`**: La rama principal que refleja la versión en producción de tu proyecto. No debes realizar cambios directamente en esta rama a menos que sea una versión estable y lista para ser implementada.

- **`staging`**: La rama donde se preparan los cambios para la próxima versión. Los cambios se fusionan aquí desde la rama `develop` y se prueban antes de la implementación en producción.

- **`develop`**: La rama principal de desarrollo. Las nuevas características y correcciones de errores se implementan en esta rama. Es recomendable realizar nuevas características en ramas separadas basadas en `develop`.


