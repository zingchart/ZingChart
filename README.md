
![ScreenShot](https://github.com/zingchart/ZingChart/blob/assets/assets/zc-logo-small.png)

Build v2.1.3

For more info on using ZingChart, see the docs: http://www.zingchart.com/docs

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
