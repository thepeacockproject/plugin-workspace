`newEvent` is called when the server gets an event from the client.
`newEvent` is a sync hook.

## Parameters

The hook will get the following parameters:

-   `event` - The event object from the client. (See type `EventQueueEvent`)
-   `request` - The Express request object.
-   `session` - The active contract session for the user who's game sent the event. (See type `ContractSession`)
