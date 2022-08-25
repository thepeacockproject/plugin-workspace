`contributeCampaigns` is called when the client requests the Hub route.
`contributeCampaigns` is a sync hook that lets you add, remove, or change data on the in-game campaigns menu.

## Parameters

The hook will get the following parameters:

-   `data` - The current data for the menu (array of campaign objects - see the Example Data section).
-   `genSingleMissionFunc` - A function that generates the required data for the specified mission (arguments `id` and `gameVersion`).
-   `genSingleVideoFunc` - A function that generates the required data for the specified video id (arguments `videoId` and `gameVersion`).
    Currently, the way to add videos is by overriding/adding to the `Videos` config, we are currently looking into ways of improving this.
    An example of a `videoId` is `debriefing_peacock`.
-   `gameVersion` - The game's version that is requesting campaigns.

## Example Data

A campaign usually looks something like this:

```json5
{
    Name: "UI_CAMPAIGN_ICA_FACILITY_TITLE",
    Image: "",
    Type: "training",
    BackgroundImage: null,
    StoryData: [
        // In this case, we are creating the menu for the ICA Facility training campaign.
        // For each of the training missions, we call this function for each of the submissions' IDs.
        // genSingleMission("1436cbe4-164b-450f-ad2c-77dec88f53dd"),
        // genSingleMission("1d241b00-f585-4e3d-bc61-3095af1b96e2"),
        // genSingleMission("b573932d-7a34-44f1-bcf4-ea8f79f75710"),
        // genSingleMission("ada5f2b1-8529-48bb-a596-717f75f5eacb"),
    ],
    Subgroups: [],
    Properties: {
        BackgroundImage: "images/story/background_training.jpg",
    },
}
```

## Example Plugin

This plugin adds a campaign to the side missions menu:

```js
module.exports = function addSideMissionExamplePlugin(controller) {
    controller.hooks.contributeCampaigns.tap(
        "AddSideMissionExamplePlugin",
        (campaigns, gsmFunc, gsvFunc, gameVersion) => {
            if (gameVersion === "h3") {
                for (const campaign of campaigns) {
                    if (campaign.Name === "UI_MENU_PAGE_SIDE_MISSIONS_TITLE") {
                        campaign.StoryData.push(gsmFunc("some mission id here"))
                    }
                }
            }
        }
    )
}
```
