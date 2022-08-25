Note: contract manifests are sometimes called "Mission JSONs" outside of Peacock.

`getContractManifest` is called when the client requests a contract's data.
`getContractManifest` is a sync _bail_ hook. Whenever any plugin that taps this function returns anything other than `undefined` or `null`, that manifest will be used for internal calculations, and then be sent to the client.

Where possible, you should instead use the `controller.addMission()` method.
This function accepts the mission manifest as a parameter.

FOR EXAMPLE:

```javascript
// mission manifest here
const MYMISSION = { Data: {}, Metadata: {} }

module.exports = function pluginThatAddsAMission(controller) {
    controller.addMission(MYMISSION)
}
```

This hook still exists in case you need your manifest to be prioritized over another plugin.
