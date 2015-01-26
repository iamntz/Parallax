### How it looks?

Like this: http://codepen.io/iamntz/pen/QwgVGY

### How to use

1. Obviously, include jQuery and this script;
- On the element you want to add the parallax effect to, just add a new attribute: `data-image="path-to-image.jpg"`;
- Initialize the plugin by using `$('[data-image]').parallax()`;
- done.

#### Options
You also have a couple of options:

- `defaultStyling` - either the default styling is used or not (if not, you need to add them manually);
- `speed` - how fast the background will move in relation with the scroll event. A higher value means a faster scroll ( `1` means that there will be no effect whatsoever)
- If you need to force resizing (e.g. you inject some elements into DOM that change the initial position of the parallax-ed element), you can do it by using `$( window ).trigger('re-parallax');`

### Some hints

- use larger enough images (take a look in your google analytics at most common resolutions, to avoid large images!);
- even if you need real large images, save them at 1.5 size (e.g. if you need 1000px wide, save it as 1500px wide) with very high JPG compression (quality down to 20% or even less);
- make sure your content won't exceed the image height, otherwise the image will be too stretched
- Chrome on Windows doesn't have smooth scroll enabled, so this won't be too visible. However! You could make good use of a plugin like [this one](https://github.com/simov/simplr-smoothscroll)

### Browser compatibility
This should be compatible with whatever browser supports `background-size:cover`. I.e. IE9 and up.
