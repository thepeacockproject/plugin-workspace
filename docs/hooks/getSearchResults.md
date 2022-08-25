`getSearchResults` is called when the client requests a contract search.
`getSearchResults` is an async series hook that lets you give the game results for its search.
This can be used to let the user customize a contract using the search parameters, or to search through actual contracts.

## Parameters

The hook will get the following parameters:

-   `parameters` - The search input from the game.
-   `ids` - A list of contract IDs to give back to the game. You may modify this however you like.

## Caveats

Make sure any contracts you return from the hook are _registered_.
The server will throw an error if you give it the ID of a contract that isn't registered.
