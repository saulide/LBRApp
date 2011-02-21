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

/*
 * Handlers
 */
var rootPanel;
var tapHander;
var tapHanderTrue;
var tapHanderFalse;
var cardViewClickHandler;
var one ;
var carussel;
var backBtn;
var learningItemsTrueBtn;
var learningItemsFalseBtn;
var backToolbar;
var learningItemsBtn;
var cardViewItem1;
var cardViewItem2;
var learningItemsFront;
var learnPanel;
var cardOverview;
var main;
Ext.setup({
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	onReady: function() {
		rootPanel = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			items: [one]
		});

		$('#lernWords').live('click', function(){
			rootPanel.setActiveItem(cardOverview);
		});
		if(!Ext.is.iPhone){
			Ext.Msg.alert("Iphone", "This app is specially designed for iOS");
		}
		
		
var tapHander = function(button, event) {
	rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
            });
}
tapHanderTrue = function(button, event) {
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
            });
}
tapHanderFalse = function(button, event) {
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
                reverse: true
            });
}
cardViewClickHandler = function(button, event) {
		rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
            });
}

one = {
	style: "background: url('img/background.png')",
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
carussel = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	fullscreen:true,
	items: [three, four]
});

/*
 * Here are the panels for the Learning views
 */

/*
 * Choose card view
 */
// Items ( demo items)

backBtn = {
	text: 'backs',
	ui:'back',
	handler: tapHander	
}
learningItemsTrueBtn = {
	text: 'I knew it',
	ui:'confirm',
	handler: tapHanderTrue		
}
var learningItemsFalseBtn = {
	text: 'Repeat it',
	ui:'decline',
	handler: tapHanderFalse		
}

var backToolbar = {
	xtype: 'toolbar',
	ui:'light',
	items: [backBtn],
	dock: 'top'
};
var learningItemsBtn = {
	xtype: 'toolbar',
	ui:'light',
	items: [learningItemsTrueBtn, learningItemsFalseBtn],
	dock: 'bottom'
};

// learningItemsBtn.items = [learningItemsTrueBtn, learningItemsFalseBtn];

var cardViewItem1 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div id="showCardCreate"><img class="intro" src="img/CardOverviewBackground.png"/></div><section><title>Labas</title><details>Keistas</details></section></div>',
	handler: cardViewClickHandler
};
var cardViewItem2 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div id="showCardCreate"><img class="intro" src="img/CardOverviewBackground.png"/></div><section><title>Labas</title><details>Keistas</details></section></div>'
};

var learningItemsFront = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div id="showCardCreate"><img class="intro" src="img/learningWordsBig.png"/></div><section><title>Labas</title><details>Keistas</details></section></div>'	
}



// Overview of the cards
var learnPanel = new Ext.Panel({
	fullscreen:true,
	items: [learningItemsFront, learningItemsBtn],
	dockedItems: [backToolbar,learningItemsBtn]
});
var cardOverview = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	items : [cardViewItem1,cardViewItem2],
	dockedItems: [backToolbar],
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
				rootPanel.setActiveItem(learnPanel);
			}
		}
	}
});
/*
var cardOverview = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	items : [cardViewItem1,cardViewItem2],
	dockedItems: [backToolbar, learningItemsTrueBtn, learningItemsFalseBtn],
	listeners: {
		click: {
			element: 'el', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
			}
		}
	}
});
*/

var main = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			items: [one],
			cardSwitchAnimation : 'slide',
			reverse: true
		});




function emptyFn(){
	
}

	}
	
});



