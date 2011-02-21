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

var test = function(button, event){
	console.log("test");
}
var backToIntro = function(button, event) {
	console.log(event.gesture.type);
	
	console.log('Been beim tapHandler'),
	rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
       		});
}
var tapHanderTrue = function(button, event) {
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
            });
}
var tapHanderFalse = function(button, event) {
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
                reverse: true
            });
}
var cardViewClickHandler = function(button, event) {
		rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
            });
}

var one = {
	id: 'intro',
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
var carussel = new Ext.Carousel({
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

var backBtn = {
	text: 'backs',
	ui:'back',
	handler: backToIntro	
}
var learningItemsTrueBtn = {
	text: 'I knew it',
	ui:'confirm',
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
				rootPanel.setActiveItem(cardViewItem2);
			}
		}
	}	
}
var learningItemsFalseBtn = {
	text: 'Repeat it',
	ui:'decline',
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				//TODO: Give the next card and set card to failed
				console.log('Flase clicked');
				rootPanel.setActiveItem(learnPanel);
			}
		}
	}		
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
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
				rootPanel.setActiveItem(learnPanel);
			}
		}
	}
};
var cardViewItem2 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div id="showCardCreate"><img class="intro" src="img/CardOverviewBackground.png"/></div><section><title>Labas</title><details>Keistas</details></section></div>'
};

var learningItemsFront = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div id="showCardCreate"><img class="intro" src="img/learningWordsBig.png"/></div><section><details>Keistas</details></section></div>',
	listeners: {
		scope: this,
		'render': function(panel) {
                panel.getEl().on({
                    'click': function() {
							$('details').text('hello');
					},
					'swipe':function() {
						
					}
                });
				
          }
	}
	
	
}



// Overview of the cards
var learnPanel = new Ext.Panel({
	fullscreen:true,
	items: [learningItemsFront],
	dockedItems: [backToolbar, learningItemsBtn],
	cardSwitchAnimation: 'slide'
});
var learnPanel2 = new Ext.Panel({
	fullscreen:true,
	items: [learningItemsFront],
	dockedItems: [backToolbar, learningItemsBtn],
	cardSwitchAnimation: 'slide'
});
var cardOverview = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	items : [cardViewItem1,cardViewItem2],
	dockedItems: [backToolbar]
});

var main = new Ext.Panel({
			fullscreen: true,
			layout: 'card',
			items: [one],
			cardSwitchAnimation : 'slide',
			reverse: true
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
			items: [one]
		});

		$('#lernWords').live('click', function(){
			rootPanel.setActiveItem(cardOverview);
		});
/*
		if(!Ext.is.iPhone){
			Ext.Msg.alert("Iphone", "This app is specially designed for iOS");
		}
*/
	
	}
	
});


