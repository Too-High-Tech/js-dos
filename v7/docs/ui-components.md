---
id: ui-components 
title: UI Components
---

`emulators-ui` is a set of components that used to create js-dos player. You can use them one by one. To use `emulators-ui` components, you need to import `emulators-ui.js`.

Package provides following components:

```js title="https://raw.githubusercontent.com/caiiiycuk/js-dos/emulators-ui/src/emulators-ui.ts"
{}
```

## emulatorsUi.network.resolveBundle

Abstraction over XHR to download bundles by url
```js
const bundle = await emulatorsUi.network.resolveBundle(<url>);
```

## emulatrosUi.sound

Default audio processor, it will play sound using AudioNode
```js
emulatorsUi.sound.audioNode(<command-interface>);
```

## emulatorsUi.controls.domToKeyCode

This function transfrom DOM keyCode to jsdos keyCode.
```js
const jsdosKeyCode = emulatorsUi.controls.domToKeyCode(<dom-keycode>);
```