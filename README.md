# t3_act4_react · Mi primera app en React

Mini aplicación hecha con **React** y **Vite**. Es mi primer proyecto en React: practico los conceptos fundamentales del framework (componentes, props, estado, eventos, renderizado condicional y listas) y lo despliego en **GitHub Pages**.

🔗 **Demo:** https://TU_USUARIO.github.io/t3_act4_react/

---

## Descripción del proyecto

La aplicación está en una sola página con cuatro secciones, y cada una es un componente:

1. **Encabezado**: muestra el título de la app y una breve descripción.
2. **Tarjeta de perfil**: muestra mi nombre, carrera y escuela. Estos datos no están escritos dentro del componente, sino que se los envía `App.jsx` por medio de props.
3. **Contador**: muestra un número que aumenta, disminuye o se reinicia con tres botones.
4. **Lista de tareas**: muestra una lista de tareas generada a partir de un arreglo. Como funcionalidad adicional, se pueden **agregar** tareas nuevas desde un campo de texto y **eliminar** cualquier tarea. El título muestra cuántas tareas hay y, si la lista queda vacía, aparece el mensaje "No hay tareas".

No se conecta a ninguna API; todos los datos viven en el estado de los componentes.

### Conceptos aplicados

| Concepto | Dónde se usa |
|---|---|
| a) Componente funcional simple | `src/components/Encabezado.jsx` |
| b) Componente que recibe y muestra props | `src/components/TarjetaPerfil.jsx` |
| c) Componente con estado (`useState`) | `src/components/Contador.jsx` y `src/components/ListaTareas.jsx` |
| d) Lista dinámica con `.map()` y `key` | `src/components/ListaTareas.jsx` |
| Eventos | `onClick` en los botones y `onChange` en el campo de texto |
| Renderizado condicional | Mensaje "No hay tareas" cuando la lista está vacía |

### Estructura

```
t3_act4_react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx          # Punto de entrada: monta <App /> en el DOM
    ├── App.jsx           # Componente principal que une a los demás
    ├── index.css         # Estilos
    └── components/
        ├── Encabezado.jsx
        ├── TarjetaPerfil.jsx
        ├── Contador.jsx
        └── ListaTareas.jsx
```

### Tecnologías

- React 18
- Vite 5
- gh-pages (para el despliegue)
- CSS

---

## Cómo ejecutarlo en local

Requisito: tener instalado [Node.js](https://nodejs.org) (versión LTS).

```bash
git clone https://github.com/TU_USUARIO/t3_act4_react.git
cd t3_act4_react
npm install
npm run dev
```

Después se abre en el navegador la dirección que muestra la terminal: `http://localhost:5173/t3_act4_react/`.

## Cómo se desplegó en GitHub Pages

1. Se instaló `gh-pages` como dependencia de desarrollo:
   ```bash
   npm install gh-pages --save-dev
   ```
2. En `vite.config.js` se agregó el nombre del repositorio como `base`:
   ```js
   base: '/t3_act4_react/'
   ```
3. En `package.json` se agregaron los scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Se ejecutó el comando que genera el build y lo publica en la rama `gh-pages`:
   ```bash
   npm run deploy
   ```
5. En **Settings › Pages** del repositorio se seleccionó la rama `gh-pages` como fuente.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son los datos que un componente **recibe desde afuera**, normalmente de su componente padre. Funcionan como los parámetros de una función: el componente las usa para mostrarse, pero **no puede modificarlas**, porque le pertenecen a quien se las envía. En mi proyecto, `TarjetaPerfil` recibe `nombre`, `carrera` y `escuela` como props desde `App.jsx`. Si quisiera mostrar a otro estudiante, solo cambiaría los valores que le paso, sin tocar el componente.

El **state** (estado) son los datos que un componente **maneja internamente** y que **pueden cambiar** mientras la aplicación está en uso, por ejemplo cuando el usuario hace clic en un botón. Cuando el estado cambia, React vuelve a dibujar el componente con el valor nuevo. En mi proyecto, el número del `Contador` y el arreglo de tareas de `ListaTareas` son estado.

En resumen: las props vienen de afuera y son de solo lectura; el state es propio del componente y se actualiza con el tiempo.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La `key` es un identificador **único** que React usa para saber cuál elemento de la lista es cuál. Cuando la lista cambia (se agrega, elimina o reordena un elemento), React compara la lista anterior con la nueva usando las keys, y así actualiza **solo los elementos que cambiaron** en lugar de volver a crear toda la lista.

Sin una key, o usando una que no es única, React puede confundir los elementos: por ejemplo, borrar el elemento equivocado en pantalla o mezclar los datos entre elementos. Además, React muestra una advertencia en la consola.

En mi proyecto, cada tarea tiene un `id` único (las nuevas usan `Date.now()`) y lo uso como key:

```jsx
{tareas.map((tarea) => (
  <li key={tarea.id}>
    {tarea.texto}
    <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
  </li>
))}
```

Así, cuando elimino una tarea, React sabe exactamente cuál `<li>` debe quitar.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un *hook* de React que le da **memoria** a un componente funcional. Recibe el valor inicial y devuelve un arreglo con dos cosas:

1. La **variable** con el valor actual.
2. Una **función** para cambiar ese valor.

Cuando llamo a esa función con un valor nuevo, React guarda el cambio y **vuelve a renderizar** el componente para que la pantalla muestre el valor actualizado. Si usara una variable normal de JavaScript, el valor cambiaría pero la pantalla no se actualizaría.

Lo usé en el componente `Contador`:

```jsx
const [numero, setNumero] = useState(0)

<button onClick={() => setNumero(numero + 1)}>+</button>
```

`numero` empieza en `0`. Cada vez que se presiona el botón **+**, se llama a `setNumero(numero + 1)` y React muestra el nuevo número en pantalla. Los botones **−** y **Reiniciar** funcionan igual, con `setNumero(numero - 1)` y `setNumero(0)`.

También lo usé en `ListaTareas`, con dos estados: `tareas`, que guarda el arreglo de tareas, y `nueva`, que guarda lo que el usuario escribe en el campo de texto. Al agregar o eliminar una tarea, actualizo el arreglo con `setTareas` y la lista se redibuja sola.

### d) Enlace del repositorio de GitHub

https://github.com/CristianMartinezz1/t3_act4_react

### e) Enlace del proyecto desplegado en GitHub Pages

https://TU_USUARIO.github.io/t3_act4_react/

---

## Autor

**Cristian**
Ingeniería en Sistemas Computacionales, Instituto Tecnológico de Oaxaca
