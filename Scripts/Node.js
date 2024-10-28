# Instalación de Node.js con `nvm` en Linux, macOS y WSL

Una guía rápida sobre cómo configurar el entorno de desarrollo Node.js.


## Instalar `nvm` para administrar versiones de Node.js

[nvm](https://github.com/nvm-sh/nvm) permite instalar varias versiones de Node.js en el mismo sistema. A veces, las aplicaciones requieren ciertas versiones de Node.js para funcionar. Tener la flexibilidad de usar versiones específicas puede resultar de ayuda.

1. Abra una nueva ventana _Terminal_.
2. Ejecuta el instalador [nvm](https://github.com/nvm-sh/nvm). (Si ya lo tenías, recuerda actualizarlo a versiones más recientes).
   - … con _cualquiera_ `curl` *o* `wget`, dependiendo de lo que tenga disponible su computadora.
     - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
     - `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
   - El script clona el repositorio nvm en `~/.nvm` y agrega la línea de origen a su perfil (`~/.bash_profile`, `~/.zshrc`, `~/.profile` o `~/.bashrc`). (Puede agregar la línea de carga de origen manualmente, si la herramienta de instalación automatizada no la agrega por usted).

     ``mierda
     exportar NVM_DIR="$HOME/.nvm"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Esto carga nvm
     [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # Esto carga nvm bash_completion
     ```

   - Otra opción: cuando tiene una ubicación de directorio consistente entre sistemas, el siguiente ejemplo de configuración de Bash/Zsh permite cargar `nvm` cuando el directorio existe.
   Esto permite compartir de forma más consistente la configuración de su shell entre sistemas, mejorando la confiabilidad del resto de su configuración incluso cuando nvm no existe en un sistema específico.

     ``mierda
     si [ -d "$HOME/.nvm" ]; entonces
       # exportar NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
       exportar NVM_DIR="$HOME/.nvm"

       # Esto carga nvm
       [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

       # Esto carga nvm bash_completion
       [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
     en fin
     ```

3. Si todo salió bien, ahora deberías abrir una nueva ventana/pestaña de Terminal o recargar la configuración del shell ejecutando:
   - `fuente ~/.bashrc`
4. Verificar la instalación
   - Para comprobar si se instaló el comando nvm, ejecute:
     - `comando -v nvm`

## Instalar Node.js con `nvm`

1. Enumere las versiones instaladas de Node.js con:
   - ``no se permite el acceso`
2. **Instalar la última versión LTS de [Node.js](https://nodejs.org/en/)** (para aplicaciones de calidad de producción)
   - `instalación nvm v20.11.1`
3. Instale la última versión actual de [Node.js](https://nodejs.org/en/) (para probar nuevas mejoras de funciones)
   - `instalación nvm v21.6.2`
4. Si desea cambiar la versión predeterminada de Node más adelante, puede ejecutar un comando para ajustarla.
    - `nvm alias default v20.11.1` [registro de cambios](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md#20.11.1) (para aplicaciones de _calidad de producción_)
    - `nvm alias default v21.6.2` [registro de cambios](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V21.md#21.6.2) (si usa las características de Node.js de la versión _Current_)

Puede seleccionar la versión de Node.js ejecutando `nvm use v20.11.1` (u otro número de versión). Otra alternativa: cree un pequeño script de shell Bash para habilitar las variables de entorno adecuadas para su proyecto.

Lee el calendario de soporte a largo plazo (LTS) de Node.js (https://nodejs.org/en/about/releases/ "Releases | Node.js") para comprender mejor su hoja de ruta de lanzamiento. La lista de todos los lanzamientos anteriores también es útil para encontrar detalles sobre el historial de lanzamientos de Node.js.

El repositorio de paquetes [npm](https://www.npmjs.com/) tiene muchos paquetes para descubrir.
Diviértete con las herramientas recién instaladas.

## Migración de paquetes desde una versión anterior de Node.js

Si ya tiene una versión existente de Node.js a través de `nvm`, puede migrar paquetes más antiguos desde las versiones instaladas de Node.js.

- Abra una nueva ventana de Terminal (para asegurarse de tener la última versión de Node.js activa en su entorno de línea de comandos).
- Antes de ejecutar los siguientes comandos, recuerde cambiar a la versión correcta de Node con el comando `nvm use`.
  Por ejemplo:
  - `no se puede utilizar v20.11.1`
  - `no se puede utilizar v21.6.2`
- Vinculación de paquetes globales de la versión anterior:
  - `paquetes de reinstalación nvm v20.3.1`
  - `paquetes de reinstalación nvm v18.16.1`

### Eliminar versiones antiguas de Node.js

- Verifique las versiones instaladas de Node.js con:
  - ``no se permite el acceso`
- Eliminar una versión anterior (si no la utilizas en algunos de tus proyectos):
  - `Desinstalar nvm v20.3.1`
  - `Desinstalar nvm v18.16.1`

---

### Actualización de paquetes obsoletos

> _Advertencia:_ Asegúrate de tener instalada la última versión de `nvm`, por si acaso. Actualiza las instrucciones al principio de este artículo. La versión [nvm `v0.39.2`](https://github.com/nvm-sh/nvm/releases/tag/v0.39.2) corrige posibles problemas que podrían provocar que los entornos de nodos más antiguos se estropeen si se instala accidentalmente `npm v9` en ellos.

#### Lista de paquetes de nivel superior instalados globalmente

``mierda
npm ls -g --depth=0.
```

#### Lista de paquetes globales obsoletos

``mierda
npm desactualizado -g --depth=0.
```

#### Actualización de todos los paquetes npm instalados globalmente

> _Advertencia:_ **Este puede ser un enfoque demasiado riesgoso.** En cambio, es mejor actualizar los paquetes individualmente, ya que eso evita el riesgo de actualizar accidentalmente el paquete `npm` a versiones incompatibles. Se sabe que la instalación de `npm v9` en entornos Node.js más antiguos e incompatibles causa problemas (lo que potencialmente puede dañar el entorno de desarrollo), por lo que es mejor prevenir que curar.

``mierda
actualización npm -g
```

---

#### Alias de CLI para entornos Bash y Zsh

Ejemplo de configuración para sus entornos de línea de comandos Bash y Zsh.

``mierda

# ------------------------------------------------- ----------
# ayudantes de npm
# ------------------------------------------------- ----------

# Enumere qué paquetes (de nivel superior) están instalados globalmente
alias lista-instalada-npm-packages="npm ls -g --depth=0."

# Enumere qué paquetes instalados globalmente están desactualizados
alias list-outdated-npm-packages="npm desactualizado -g --depth=0."

# Actualizar paquetes npm obsoletos instalados globalmente
alias update-npm-packages="actualización npm -g"

```


#### Arreglando versiones antiguas de paquetes

Si tiene paquetes npm más antiguos con extensiones nativas compiladas, volver a compilar las extensiones nativas puede mejorar la compatibilidad con la nueva versión de Node.js. Vaya al directorio raíz de su proyecto y ejecute el comando `npm rebuild`.

``mierda
cd NOMBRE_DEL_PROYECTO
reconstrucción de npm
```

---

## Notas sobre esta documentación

[@d2s](https://github.com/d2s "Perfil de GitHub de Daniel Schildt") probó versiones anteriores de estas instrucciones de instalación con:

- [Debian 11.2](https://www.debian.org/News/2021/20211218)
- [Debian 10](https://www.debian.org/News/2019/20190706)
- [Ubuntu en WSL2 (Subsistema de Windows para Linux)](https://docs.microsoft.com/en-us/windows/wsl/about)
- [Ubuntu 20.04 LTS](http://releases.ubuntu.com/bionic/)
- [Ubuntu 22.04 LTS](https://releases.ubuntu.com/jammy/)

## Contribuciones

Si tienes sugerencias de mejora para simplificar y mejorar estas instrucciones, publica un comentario en el [Gist original de @d2s](https://gist.github.com/d2s/372b5943bce17b964a79 "Instalación de Node.js en Linux, macOS y WSL con nvm") con tus sugerencias de mejora de la documentación. Si estás leyendo una versión bifurcada del documento, consulta el Gist original para obtener instrucciones más recientes.
