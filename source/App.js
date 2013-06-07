enyo.kind({
    name: "App",
    kind: "FittableRows",
    fit: true,
    components: [{
        kind: "onyx.Toolbar",
        content: "getsensordata.net"
    }, {
        kind: "Panels",
        name: "main",
        fit: true,
        classes: "panels-sample-sliding-panels",
        arrangerKind: "CollapsingArranger",
        wrap: false,
        components: [{
            content: "Test",
            tag: 'p', 
        }, {
            kind: "MapView",
            fit: true, 
        }]
    }], 
    setupItem: function(inSender, inEvent) {
        this.$[inSender.item].setContent("This is row number: " + inEvent.index);
    },
    helloWorldTap: function(inSender, inEvent) {
        //this.$.main.addContent("The button was tapped.<br/>");
        alert('hello');
    },
    togglePane: function(inSender, inEvent) {
        map.invalidateSize();
        this.$.main.setIndex(this.$.main.index ? 0 : 1);
        this.$.contentPanels.setIndex(this.$.contentPanels.index ? 0 : 1);
    },
    toggleServices: function(sender, event) {

    },
    toggleTime: function(sender, event) {

    },

});
