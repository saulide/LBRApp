/*
new Ext.Application({
        launch: function() {
            new Ext.Panel({
                fullscreen: true,
                html: 'Hello World!'
            });
        }
});
*/
// to active items write rootPanel.setActiveItem(number);
// Defining items

var one = {
	style: "background-color: #FFBF00, color:white",
	title: "one",
	html: '<div id="lernWords"><img class="intro" src="img/learnWordsBig.png"/></div><div id="readTexts"><img class="intro" src="img/readTextBig.png"/></div>'
	//html: '<img src="img/learnWordsBig.png"/><p><img src="img/learnWordsBig.png"/> ',
};
var two = {
	style: "background-color: #FFBF00, color:white",
	title: "one",
	html: "two"
};
var three = {
	style: "background-color: #FFBF00, color:white",
	title: "one",
	html: "three"
};
var four = {
	style: "background-color: #FFBF00, color:white",
	title: "one",
	html: "four"
};
var multiple = {
	
}
var alert = {
	text : "Put as native",
	ui : 'decline',
}
var carussel = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	fullscreen:true,
	items: [three, four]
});

var rootPanel;

function emptyFn(){
	
}

Ext.setup({
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	onReady: function() {
		rootPanel = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			items: [one, carussel]
		});
		$('#lernWords').live('click', function(){
			rootPanel.setActiveItem(carussel);
		});
		if(!Ext.is.iPhone){
			Ext.Msg.alert("Iphone", "This app is specially designed for iOS");
		}
		
	}
	
});



