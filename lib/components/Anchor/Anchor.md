# Anchor

Adds a theme matching outline and can be customized a bit. By default takes content color, but can be toggled to get the main color.

<img src='../../../images/Anchor/anchor.png' style='max-height:30px' />

### Properties

`color`  
The color of the text. By default it takes content color, but can bt toggled to use the main one.

`highlights`  
If `true` will apply a class with color changing props.

`underlined`  
Adds underline.

`hoverUnderline`
Adds underline on hover, if there isn't one already.

`hoverUnderlineOffset`  
Offsets the underline, so it moves a bit on hover.

`transitions`  
Adds transition animations.

`useBgColor`  
Default is `false`. If set to `true` will use main color instead of content one.

`as`  
Use to render the component as another type. Useful for `Link` and `NavLink` if using react router for example.
