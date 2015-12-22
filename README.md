# ZingChart

Build v2.2.2

For more info on using ZingChart, see the docs: http://www.zingchart.com/docs

```
Note : The new default theme for v2.2.0 will break charts created using previous builds.
A 'classic' theme is provided for backwards compatibility.
The new theme can be set in three different ways:
    1. Global (ex : zingchart.THEME = 'light';)
    2. In the render object with the 'theme' parameter
    3. In the chart object.
```

## Install

#### *bower*
```
bower install zingchart
```

#### *npm*
```
npm install zingchart
```

#### *cdn*
```
http://cdn.zingchart.com/zingchart.min.js
```


## Quick Start
Include a reference to the zingchart library

```
<script src="zingchart.min.js"></script>
```
The `zingchart` object is now accessible. Happy charting!
```
<div id="chart"></div>
<script>
window.onload = function() {
zingchart.render({
    id: "chart",
    data: {
        type: "line",
        series: [{ values: [5,10,15,5,10,5] }]
    }
    });
};
</script>
```

## Browserify
This package supports the CommonJS module format to be used with bundlers such as [Browserify](http://browserify.org/) when being used with NPM.

Usage : `var zingchart = require('zingchart');`



## Package Directory
The package includes the following:
```
|   README.md
├── client
│   ├── zingchart.min.js
│   ├── modules
├── custom
│   ├── build.js
|   ...
```

## Custom Build
***(requires Node.js)***

The zingchart.min.js file in the root directory is a fully functional build which includes the majority of functionality within the library. If you wanted to slim down the library and only provide functionality that you need, we have included a build tool that allows you to create a custom library build for the client side version. The /modules folder contains a complete collection of dependencies for the zingchart library.

For example, if you wanted to create a build that only contained functionality for line and pie charts, you would run the command

```
$ node build.js <configPath> <modules>
```
* `configPath` (optional) - The path to the .cnf file to provide module options
* `modules` (optional) -The module arguments to provide the build tool without using a .cnf file.

Both examples will provide the same functionality for the line/pie example.

#### Example 1
```
$ node build.js zingchart.cnf
```
Inside `zingchart.cnf`:
```
{"modules":["line","pie"]}
```

#### Example 2
```
$ node build.js line pie
```

## Integrations

ZingChart is wrapped in a variety of ways for easy consumption with popular JS libraries and frameworks. Official releases are shown here.  If you have a third party integration please contact us for inclusion.

* [JQuery](https://github.com/zingchart/ZingChart-jQuery)
* [AngularJS](https://github.com/zingchart/ZingChart-AngularJS)
* [Ember](https://github.com/zingchart/ember-zingchart)
* [Backbone](https://github.com/zingchart/backbone-zingchart)

## Contextual Demos

We're always working on new demos to help users get started using ZingChart with their framework or database. Take a look at our [Demo repo](https://github.com/zingchart/ZingChart-Demos/) to see if we've covered your toolset. [Let us know](http://www.zingchart.com/support/) if we haven't or if you need help with an existing implementation.

## Support
If you need any assistance or would like to report any bugs found in ZingChart, please contact us at support@zingchart.com or through our chat client on our website www.zingchart.com
