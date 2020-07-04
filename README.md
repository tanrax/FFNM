# FFNM (Front-End for the next master)

Simple plugin to avoid writing Javascript in trivial tasks.

## Documentation

- [English](#user-content-english)
- [Spanish/Español](#user-content-spanishespañol)

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
