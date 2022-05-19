# Common Errors and Fixes

> Error while attempting to queue plugin for loading!

This happens when there is an issue while trying to evaluate your plugin.
This likely is an issue with something outside your actual plugin function.
This error can only happen _before_ the plugin's function is run.
Check things such as the global scope of your plugin for potential issues.

> Error while evaluating plugin!

This happens when there is a problem inside your plugin function.

> Contract not found!

Make sure that you have actually registered a contract before you give its ID or details back to us,
since our contract system works on a centralized "registry", allowing us to have one easy way for getting details about any contract.
