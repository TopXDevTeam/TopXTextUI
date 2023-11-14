# TopXNotify Documentation

![TopXTextUI](https://cdn.discordapp.com/attachments/1173827107953057862/1173829005535891456/TEXTUI.png?ex=65656073&is=6552eb73&hm=69d81ec4bf714aa213e3ac52defa3318e73d9b0d24562b8c9c22e98069e7bfa9&)

### Thanks For Using Our Script ❤️


## Client Side Show Usage

```lua
exports['TopXTextUI']:TextUI(message, type)
```

## Client Side Show Example

```lua
exports['TopXTextUI']:TextUI("success", "Press [E] To Open")
```

## Client Side Hide

```lua
exports['TopXTextUI']:HideUI()
```

## Server Side Show Usage

```lua
TriggerServerEvent("TopXUI:ShowUI", source, message, type)
```

## Server Side Show Example

```lua
TriggerServerEvent("TopXUI:ShowUI", source, "Press [E] To Open", "info")
```
## Server Side Hide

```lua
TriggerServerEvent("TopXUI:HideUI", source)
```
### Types

- **<span style="color:rgba(71, 215, 100, 1)">success</span><br>**
- **<span style="color:rgba(255, 53, 91, 1)">error</span><br>**
- **<span style="color:rgba(47, 134, 235, 1)">info</span><br>**
- **<span style="color:rgba(255, 192, 33, 1)">warning</span><br>**
- **<span style="color:rgb(209, 128, 6) ">bank</span><br>**
- **<span style="color:rgba(51, 51, 51, 1)">Default/Unknown</span><br>**

![TopXTextUI](https://cdn.discordapp.com/attachments/1083634745172299808/1174025379233681408/image.png?ex=65661756&is=6553a256&hm=413555ae3f952653f2c4205b0d965e6541499c54e18027f626da617ceaa6ddd7&)


<hr>

### source

**Set `-1` To Show/Hide The Text For All Players**

### Message 

**`Message You Want To Show`**

```diff
- Make Sure The File Name Is TopXTextUI
```

### Discord Server invite
[![](https://dcbadge.vercel.app/api/server/vuJQnbEMyu)](https://discord.gg/vuJQnbEMyu)

### Donation
<a href="https://www.buymeacoffee.com/topxteam26" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="35" width="174"></a>
