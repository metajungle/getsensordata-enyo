enyo.kind({
    name: "App",
    kind: "Control",
    components: [{
        kind: "Panels",
	name: "main",
	classes: "panels-sample-sliding-panels enyo-fit", 
	arrangerKind: "CollapsingArranger", 
	wrap: false,
	components: [
	    {
		kind: "FittableRows", 
		name: "side", 
		classes: "enyo-fit", 
		components: [
		    {
			kind: "onyx.Toolbar",
			components: [{
			    kind: "onyx.Grabber"
			}], 
		    }, 
		    {
			contents: "Hello", 
			classes: "enyo-fit", 
			tag: "p", 
			fit: true
		    }
		]
	    },
	    {
		kind: "FittableRows", 
		name: "map-main", 
		components: [
		    {
			kind: "onyx.Toolbar",
			components: [{
			    kind: "onyx.Grabber"
			}], 
		    }, 
		    {
			kind: "MapView", 
			fit: true
		    }
		]
	    }
	]
    }],
    setupItem: function(inSender, inEvent) {
	this.$[inSender.item].setContent("This is row number: " + inEvent.index);
    },
    helloWorldTap: function(inSender, inEvent) {
	//this.$.main.addContent("The button was tapped.<br/>");
	alert('hello');
    },
    togglePane: function(inSender, inEvent) {
	this.$.pullout.toggle(inSender.panel);
	//enyo.$.app_pullout.show();
	//map.invalidateSize();
	//this.$.main.setIndex(this.$.main.index ? 0 : 1); 
	// this.$.contentPanels.setIndex(this.$.contentPanels.index ? 0 : 1);
    },
    togglePullout: function(inSender) {
	this.$.pullout.toggle(inSender.panel);
    },
    toggleServices: function(sender, event) {
	
    },
    toggleTime: function(sender, event) {
	
    },
    
});
