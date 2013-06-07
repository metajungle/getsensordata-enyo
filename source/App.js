enyo.kind({
    name: "App",
    kind: "Control",
    components: [{
        kind: "FittableRows",
        name: "map",
        fit: true, 
        classes: "enyo-fit",
        components: [{
            kind: "onyx.Toolbar",
            components: [{
                content: "getsensordata.net", 
                tag: "p"
            }, 
            {
                name: "menu",
                defaultKind: "onyx.Button",
                components: [{
                    content: "A",
                    panel: "info",
                    ontap: "togglePullout"
                }, {
                    content: "B",
                    panel: "bookmark",
                    ontap: "togglePullout"
                }, ]
            }, {
                kind: "onyx.Button",
                src: "assets/images/menu-icon-bookmark.png",
                active: true,
                ontap: "togglePullout",
                panel: "info", 
                classes: "onyx-affirmative menu",
                content: "M"
            }, ]
        }, {
            kind: "MapView",
            fit: true
        }, ]
    }, {
        kind: "Pullout",
        classes: "pullout",
        components: []
    }, ],
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
