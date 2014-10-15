## ZingChart-Bower

ZingChart build 0.140806


Install [Zingchart](http://www.zingchart.com) with Bower:

```
bower install zingchart
```

Include a reference to the zingchart script:
```
<script src="bower_components/zingchart/src/zingchart-html5-min.js"></script>
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


For more info on using ZingChart, see the docs: http://www.zingchart.com/docs