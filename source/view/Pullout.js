enyo.kind({
    name: "Pullout",
    kind: "enyo.Slideable",
    events: {
	onDropPin: "",
	onShowTraffic: "",
	onMapTypeSelect: "",
	onBookmarkSelect: ""
    },
    components: [
	{name: "shadow", classes: "pullout-shadow"},
	//{kind: "onyx.Grabber", classes: "pullout-grabbutton"},
	{kind: "FittableRows", classes: "enyo-fit", components: [
	    {name: "client", classes: "pullout-toolbar"},
	    {fit: true, style: "position: relative;", components: [
		{name: "info", kind: "Scroller", classes: "enyo-fit", components: [
        {content: "A", tag: "p"}, 
        {kind: "onyx.Button", content: "Close", ontap: "clo"}
		]},
		{name: "bookmark", 
		 kind: "FittableRows", showing: false, classes: "enyo-fit", components: [
         {content: "B", tag: "p"}
		]}
	    ]}
	]}
    ],
    max: 100,
    value: 100,
    unit: "%", 
    clo: function() {
       toggle("info"); 
    }, 
    toggle: function(inPanelName) {
	var t = this.$[inPanelName];
	if (t.showing && this.isAtMin()) {
	    this.animateToMax();
	} else {
	    this.animateToMin();
	    this.$.info.hide();
	    this.$.bookmark.hide();
	    t.show();
	    t.resized();
	}
    },
    valueChanged: function() {
	this.inherited(arguments);
	this.$.shadow.setShowing(this.value !== this.max);
    },
    dropPinChange: function(inSender) {
	this.doDropPin({value: inSender.getValue()});
    },
    showTrafficChange: function(inSender) {
	this.doShowTraffic({value: inSender.getValue()});
    },
    mapTypeChange: function(inSender, inEvent) {
	var o = inEvent.originator;
	this.doMapTypeSelect({mapType: o.parent.mapType});
    },
    itemSelect: function(inSender, inEvent) {
	this.doBookmarkSelect({item: inEvent.item});
    }
});
