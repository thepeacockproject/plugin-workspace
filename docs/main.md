## Loading Plugins

JavaScript files present in the Peacock installation directory that match either of the following patterns will be loaded (where `*` is any value):

-   `*Plugin.js`
-   `*.plugin.js`
-   Those 2 patterns, but the file extension `.cjs` (CommonJS) _also works_

So the following names would be loaded as plugins:

-   `HelloPlugin.js`
-   `helloPlugin.js`
-   `hello.plugin.js`
-   `Hello-plugin.plugin.js`

Plugins themselves are just CommonJS modules that export a single function, which accepts
the plugin system instance as an argument, for example:

```js
module.exports = function myCoolPlugin(controller) {
    // plugin logic
}
```

The most important part of the plugin system is its hooks, which allow listening for events or adding
content. See the `hooks` property typedef of the `Controller` class. You can access the hooks at `controller.hooks`.

## Hooks

Hooks are an event-based system that plugins can listen for and react to.

The system was originally inspired by https://github.com/webpack/tapable, but we have since modified it to be faster for our case.

You can find documentation for each of the individual hooks in the hooks directory.
