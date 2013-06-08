enyo.kind({
    name: "App",
    kind: "FittableRows",
    fit: true,
    components: [{
        kind: "Panels",
        name: "main",
        fit: true,
        classes: "panels-sample-sliding-panels",
        arrangerKind: "CollapsingArranger",
        // make sure map is updated 
        onTransitionFinish: "redrawMap",
        wrap: false,
        components: [{
            content: "Test",
            tag: 'span',
        }, {
            kind: "FittableRows",
            components: [{
                kind: "onyx.Toolbar",
                components: [{
                    kind: "onyx.Grabber",
                }, {
                    classes: "header-title", 
                    content: "getsensordata.net"

                }]
            }, {
                kind: "MapView",
                fit: true,
            }]
        }]
    }],
    setupItem: function(inSender, inEvent) {
        this.$[inSender.item].setContent("This is row number: " + inEvent.index);
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
    redrawMap: function(sender, event) {
        /* re-draw map when panel transition is finished to make
           sure the new size is taken into consideration */
        if (typeof map != 'undefined') map.invalidateSize(false);
    }

});
