# [ZingChart](http://www.zingchart.com)
Build v2.0.5

For more info on using ZingChart, see the docs: http://www.zingchart.com/docs


##Install

####*bower*
```
bower install zingchart
```

####*npm*
```
npm install zingchart
```

####*cdn*
```
http://cdn.zingchart.com/zingchart.min.js
```

##Quick Start
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


##Package Directory
The package includes the following:
```
|   README.md
|   zingchart.min.js
├── modules
│   ├── zingchart-3d.min.js
│   ├── zingchart-animation.min.js
│   ├── zingchart-api-annotations.min.js
├── nodejs
│   ├── zingchart-nodejs.min.js
│   ├── modules-nodejs
├── phantomjs
│   ├── zingchart-phantomjs.min.js
│   ├── modules-phantomjs
├── custom
│   ├── build.js
|   ...
```

##Custom Build
***(requires Node.js)***

The zingchart.min.js file in the root directory is a fully functional build which includes the majority of functionality within the library. If you wanted to slim down the library and only provide functionality that you need, we have included a build tool that allows you to create a custom library build for the client side version. The /modules folder contains a complete collection of dependencies for the zingchart library.

For example, if you wanted to create a build that only contained functionality for line and pie charts, you would run the command

```
$ node build.js <configPath> <modules>
```
* `configPath` (optional) - The path to the .cnf file to provide module options
* `modules` (optional) -The module arguments to provide the build tool without using a .cnf file.

Both examples will provide the same functionality for the line/pie example.

####Example 1
```
$ node build.js zingchart.cnf
```
Inside `zingchart.cnf`:
```
{"modules":["line","pie"]}
```

####Example 2
```
$ node build.js line pie
```
