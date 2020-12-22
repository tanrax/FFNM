# FFNM (Front-End for the next master)

``` html
<button is-click="class:add('open', 'article')">open</button>

<article></article>
```
👇 🖱 **Click!** 👇
``` html
<button is-click="class:add('open', 'article')">open</button>

<article class="open"></article>
```

Simple utility to **avoid writing Javascript** when working with **classes**. It only takes up **3.8Kb**!

- Simplifies the **click**.

- Simplifies the **scroll**.

- Simplifies **hover**.

- Simplifies when the elements are **visible** or not.

## DEMOS

[Click](https://codepen.io/androsfenollosa/pen/dyGdRVE) | [Scroll](https://codepen.io/androsfenollosa/pen/xxZQxNV) | [Visible](https://codepen.io/androsfenollosa/pen/YzwBLGW)

## Documentation

- [English](#user-content-english)
- [Spanish/Español](#user-content-spanishespañol)

---

## English

### Install

Add to your `<head>` the following tag.

```html
<script src="https://cdn.jsdelivr.net/gh/tanrax/FFNM@1.4.0/dist/ffnm.min.js" integrity="sha384-WsAoFj8H5Jl3+nG7ON5XXiozrADpSLshx/XdN7xu2GUVkJEZB5C3AGrFtdi6tARh" crossorigin="anonymous"></script>
```

### Examples

#### Click

##### Add the class `press` to `button` when the button is pressed.

```html
<button is-click="class:add('press')">open</button>
```

##### Remove the class `press` to `button` when the button is pressed.

```html
<button is-click="class:remove('press')">close</button>
```

##### Switch the classs `show` to `button` when the button is pressed.

```html
<button is-click="class:toggle('show')">view</button>
```

##### Add the class `show` to the `#nav` selector when the button is pressed.

```html
<button is-click="class:add('show', '#nav')">open</button>
<nav id="nav"></nav>
```

##### Remove the `show` class from the `#nav` selector when the button is pressed.

```html
<button is-click="class:remove('show', '#nav')">close</button>
<nav id="nav" class="show"></nav>
```

##### Switch the `show` class to the `#nav` selector when the button is pressed.

```html
<button is-click="class:toggle('show', '#nav')">view</button>
<nav id="nav" class="show"></nav>
```

#### Scroll up

##### Add the class `show` to `nav` when the scroll goes up.

```html
<nav is-scroll-up="class:add('show')"></nav>
```

##### Remove the `show` class from `nav` when the scroll goes up.

```html
<nav is-scroll-up="class:remove('show')"></nav>
```

#### Scroll down

##### Add the class `show` to `nav` when the scroll down.

```html
<nav is-scroll-down="class:add('show')"></nav>
```

##### Remove the `show` class from `nav` when the scroll down.

```html
<nav is-scroll-down="class:remove('show')"></nav>
```

#### Scroll top

##### Add the class `show` to `nav` when the scroll is top of the page.

```html
<nav is-scroll-top="class:add('show')"></nav>
```

##### Remove the `show` class from `nav` when the scroll top of the page.

```html
<nav is-scroll-top="class:remove('show')"></nav>
```


#### Hover

##### Add the class `show` to `div` when hover.

```html
<div is-hover="class:add('show')"></div>
```

##### Remove the `show` class from `div` when hover.

```html
<div is-hover="class:remove('show')"></div>
```

##### Toggle the `show` class from `div` when hover.

```html
<div is-hover="class:toggle('show')"></div>
```

##### Add the class `show` to `#button` when `div` hover.

```html
<div is-hover="class:toggle('show', '#button')"></div>
<button id="button">Hi</button>
```

#### Visible

##### Add the class `show` to `div` when is visible.

```html
<div is-visible="class:add('show')"></div>
```

##### Remove the `show` class from `div` when is visible.

```html
<div is-visible="class:remove('show')"></div>
```

##### Toggle the `show` class from `div` when is visible.

```html
<div is-visible="class:toggle('show')"></div>
```

##### Add the class `show` to `#button` when `div` is visible.

```html
<div is-visible="class:toggle('show', '#button')"></div>
<button id="button">Hi</button>
```

#### Not visible

##### Add the class `show` to `div` when is not visible.

```html
<div is-not-visible="class:add('show')"></div>
```

##### Remove the `show` class from `div` when is not visible.

```html
<div is-not-visible="class:remove('show')"></div>
```

##### Toggle the `show` class from `div` when is not visible.

```html
<div is-not-visible="class:toggle('show')"></div>
```

##### Add the class `show` to `#name` when `div` is not visible.

```html
<div is-not-visible="class:toggle('show', '#button')"></div>
<input id="name">
```

---

## Spanish/Español

### Instalar

Añade a tu `<head>` la siguiente etiqueta.

```html
 <script src="https://cdn.jsdelivr.net/gh/tanrax/FFNM@1.4.0/dist/ffnm.min.js" integrity="sha384-lAUBI0wOuUBOb4gGjqjeuJlFgrl1YixuQdG/OngLda/8+ZPThlN2xk+EJAkl7gEd" crossorigin="anonymous"></script>
```

### Ejemplos de uso

#### Clic

##### Añadir la clase `apretado` a `button` cuando sea pulsado.

```html
<button is-click="class:add('apretado')">Apreta</button>
```

##### Quitar la clase `apretado` a `button` cuando sea pulsado.

```html
<button is-click="class:remove('apretado')">cerrar</button>
```

##### Intercambiar la clase `apretado` a `button` cuando sea pulsado.

```html
<button is-click="class:toggle('apretado')">ver</button>
```

##### Añadir la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button is-click="class:add('show', '#menu')">abrir</button>
<nav id="menu"></nav>
```

##### Quitar la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button is-click="class:remove('show', '#menu')">cerrar</button>
<nav id="menu" class="show"></nav>
```

##### Intercambiar la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button is-click="class:toggle('show', '#menu')">ver</button>
<nav id="menu" class="show"></nav>
```

#### Subir scroll

##### Añadir la clase `show` al selector `nav` cuando el scroll sube.

```html
<nav is-scroll-up="class:add('show')"></nav>
```

##### Quitar la clase `show` al selector `nav` cuando el scroll sube.

```html
<nav is-scroll-up="class:remove('show')"></nav>
```

#### Bajar scroll

##### Añadir la clase `show` al selector `nav` cuando el scroll baja.

```html
<nav is-scroll-down="class:add('show')"></nav>
```

##### Quitar la clase `show` al selector `nav` cuando el scroll baja.

```html
<nav is-scroll-down="class:remove('show')"></nav>
```

#### Scroll esta arriba de la pagina (principio)

##### Añadir la clase `show` al selector `nav` cuando el scroll esta al inicio.

```html
<nav is-scroll-top="class:add('show')"></nav>
```

##### Quitar la clase `show` al selector `nav` cuando el scroll esta al inicio.

```html
<nav is-scroll-top="class:remove('show')"></nav>
```

#### Hover

##### Añade la clase `show` al `div` cuando sea hover.

```html
<div is-hover="class:add('show')"></div>
```

##### Quita la clase `show` al `div` cuando sea hover.

```html
<div is-hover="class:remove('show')"></div>
```

##### Intercambia la clase `show` al `div` cuando sea hover.

```html
<div is-hover="class:toggle('show')"></div>
```

##### Añade la clase `show` a `#button` cuando `div` sea hover.

```html
<div is-hover="class:toggle('show', '#button')"></div>
<button id="button">Hi</button>
```

#### Visible

##### Añade la clase `ver` en el `div` cuando es visible.

```html
<div is-visible="class:add('ver')"></div>
```

##### Quita la clase `ver` en el `div` cuando es visible.

```html
<div is-visible="class:remove('ver')"></div>
```

##### Intercambia la clase `ver` cuando el `div` es visible.

```html
<div is-visible="class:toggle('ver')"></div>
```

##### Añade la clase `ver` en `#boton` cuando el `div` es visible.

```html
<div is-visible="class:toggle('ver', '#boton')"></div>
<button id="boton">Hi</button>
```

#### No visible

##### Añade la clase `ver` en el `div` cuando no es visible.

```html
<div is-not-visible="class:add('ver')"></div>
```

##### Quita la clase `ver` en el `div` cuando no es visible.

```html
<div is-not-visible="class:remove('ver')"></div>
```

##### Intercambia la clase `ver` cuando el `div` no es visible.

```html
<div is-not-visible="class:toggle('ver')"></div>
```

##### Añade la clase `ver` en `#boton` cuando el `div` no es visible.

```html
<div is-not-visible="class:toggle('ver', '#boton')"></div>
<button id="boton">Hi</button>
```


---

## Development

### Install

```javascript
npm i
```

### Build

```javascript
gulp
```

### Watch mode

```javascript
gulp dev
```
