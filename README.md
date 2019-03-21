# px2rem-core
```js
/**
 * rem core
 * @param {remUnit, remLimit, original, listen, disableFontScale} conf config
 */
{
    remUnit, // Number; default: 100; example: remUnit:100, 1080px => 10.8rem;
    remLimit, // Number; default: null; exceed 1080 1rem exchange fontSize, rem Unchanged; 
    original, // Number; default: 1080; original image size;
    listen, // Boolean; default: false; listen window resize;
    disableFontScale, // Boolean; default: false; Observe changes in system font size;
}
```

# include
```js
    import px2rem from 'px2rem-core';
    //or
    var px2rem = require('px2rem-core');

    //recommend: <HTML> <head> <script/>
```

# run
```js
    px2rem({remUnit, remLimit, original, listen, disableFontScale});
```

# combine postcss
```js
    //postcss.config.js
    {
        plugins: [require('postcss-px2rem')({ remUnit : 100})], //equal conf.remUnit
    }  
```