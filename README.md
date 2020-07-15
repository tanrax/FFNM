# FFNM (Front-End for the next master)

![example](media/example.png)

Simple utility to **avoid writing Javascript** when working with **classes**. It only takes up **1Kb**!

## DEMOS

[Click](https://codepen.io/androsfenollosa/pen/dyGdRVE)

## Documentation

- [English](#user-content-english)
- [Spanish/Español](#user-content-spanishespañol)

---

## English

### Install

Add to your `<head>` the following tag.

```html
<script src="https://cdn.jsdelivr.net/gh/tanrax/FFNM@v1.0.0/dist/ffnm.min.js"></script>
```

### Examples

#### Click

##### Add the class `show` to the `#nav` selector when the button is pressed.

```html
<button i-click="class:add('show', '#nav')">open</button>
```

##### Remove the `show` class from the `#nav` selector when the button is pressed.

```html
<button i-click="class:remove('show', '#nav')">close</button>
```

##### Switch the `show` class to the `#nav` selector when the button is pressed.

```html
<button i-click="class:toggle('show', '#nav')">view</button>
```

#### Scroll up

##### Add the class `show` to `nav` when the scroll goes up.

```html
<nav i-scroll-up="class:add('show')"></nav>
```

##### Remove the `show` class from `nav` when the scroll goes up.

```html
<nav i-scroll-up="class:remove('show')"></nav>
```

#### Scroll down

##### Add the class `show` to `nav` when the scroll down.

```html
<nav i-scroll-down="class:add('show')"></nav>
```

##### Remove the `show` class from `nav` when the scroll down.

```html
<nav i-scroll-down="class:remove('show')"></nav>
```


#### Classes without events

##### Add the class `show` to the `#nav` selector

```javascript
class:add('show', '#nav')
```

##### Remove the `show` class from the `#nav` selector

```javascript
class:remove('show', '#nav')
```

##### Switch the class `show` to the `#nav` selector

```javascript
class:toggle('show', '#nav')
```

---

## Spanish/Español

### Instalar

Añade a tu `<head>` la siguiente etiqueta.

```html
<script src="https://cdn.jsdelivr.net/gh/tanrax/FFNM@v1.0.0/ffnm.min.js"></script>
```

### Ejemplos de uso

#### Clic

##### Añadir la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button i-click="class:add('show', '#menu')">abrir</button>
```

##### Quitar la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button i-click="class:remove('show', '#menu')">cerrar</button>
```

##### Intercambiar la clase `show` al selector `#menu` cuando sea pulsado el botón.

```html
<button i-click="class:toggle('show', '#menu')">ver</button>
```

#### Subir scroll

##### Añadir la clase `show` al selector `nav` cuando el scroll sube.

```html
<nav i-scroll-up="class:add('show')"></nav>
```

##### Quitar la clase `show` al selector `nav` cuando el scroll sube.

```html
<nav i-scroll-up="class:remove('show')"></nav>
```

#### Bajar scroll

##### Añadir la clase `show` al selector `nav` cuando el scroll baja.

```html
<nav i-scroll-down="class:add('show')"></nav>
```

##### Quitar la clase `show` al selector `nav` cuando el scroll baja.

```html
<nav i-scroll-down="class:remove('show')"></nav>
```


#### Clases sin eventos

##### Añadir la clase `show` al selector `#menu`

```javascript
class:add('show', '#menu')
```

##### Quitar la clase `show` al selector `#menu`

```javascript
class:remove('show', '#menu')
```

##### Intercambiar la clase `show` al selector `#menu`

```javascript
class:toggle('show', '#menu')
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
