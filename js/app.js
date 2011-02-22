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

function setOrientationIntro()
{
	if (Ext.orientation === "landscape") {
		$('.wrapper').addClass('landscape');
	}
	else {
		$('.wrapper').removeClass('landscape');
	}
}
var tapHander = function(button, event) {
	setOrientationIntro();
	rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
            });
}
var backBtnToOverview = function(button, event) {
	setOrientationIntro();
	rootPanel.setActiveItem(cardOverview, {
                type: 'slide',
                reverse: true
            });
}

var backBtnToOverviewTextHandler = function(button, event) {
	setOrientationIntro();
	rootPanel.setActiveItem(textOverview, {
                type: 'slide',
                reverse: true
            });
}


var tapHanderTrue = function(button, event) {
	setOrientationIntro();
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
            });
}
var tapHanderFalse = function(button, event) {
	setOrientationIntro();
	rootPanel.setActiveItem(learningItemsFront, {
                type: 'slide',
                reverse: true
            });
}
var cardViewClickHandler = function(button, event) {
	setOrientationIntro();
		rootPanel.setActiveItem(main, {
                type: 'slide',
                reverse: true
            });
}

var one = {
	style: "background: url('img/background.png')",
	title: "one",
	html: '<div class="wrapper"><div id="lernWords"><img class="intro" src="img/learnWordsBig.png"/></div><div id="readTexts"><img class="intro" src="img/readTextNewBig.png"/></div></div></div>',
	
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

var backBtnToMenu = {
	text: 'menu',
	ui:'back',
	handler: tapHander	
}

var backBtnToOverview = {
	text: 'quit lerning',
	ui:'back',
	handler: backBtnToOverview	
}

var backBtnToOverviewText = {
	text: 'quit reading',
	ui:'back',
	handler: backBtnToOverviewTextHandler	
}
var learningItemsTrueBtn = {
	text: 'I knew it',
	ui:'confirm',
	handler: tapHanderTrue		
}
var learningItemsFalseBtn = {
	text: 'Repeat it',
	ui:'decline',
	handler: tapHanderFalse		
}

var backToolbarToMenu = {
	xtype: 'toolbar',
	ui:'light',
	items: [backBtnToMenu],
	dock: 'top'
};
var backToolbarToOverview = {
	xtype: 'toolbar',
	ui:'light',
	items: [backBtnToOverview],
	dock: 'top'
};

var backToolbarToOverviewText = {
	xtype: 'toolbar',
	ui:'light',
	items: [backBtnToOverviewText],
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
	html: '<div class="wrapper"><div id="showCardCreate"><img class="landscape-overview" src="img/CardOverviewBackground.png"/></div><section><header>First Cards</header><details>Card deck language:<br>German<br>Items to learn today: 2</details></section></div>',
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
				rootPanel.setActiveItem(learnPanel, {
	                type: 'slide',
              });
			}
		}
	}
};
var cardViewItem2 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div class="wrapper"><div id="showCardCreate"><img class="landscape-overview" src="img/CardOverviewBackground.png"/></div><section><header>PoshEng</header><details>Card deck language:<br>English<br>Items to learn today: 5</details></section></div>'
};

var textViewItem1 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div class="wrapper"><div id="textViewItem"><img class="landscape-overview" src="img/ReadTextNewBigBg.png"/></div><section><header>German History</header><details>Pages: <br>7<br>Already read: 2</details></section></div>'
};
var textViewItem2 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div class="wrapper"><div id="textViewItem"><img class="landscape-overview" src="img/ReadTextNewBigBg.png"/></div><section><header>China</header><details>Pages: 12<br>Already read: 6</details></section></div>'
};
var toolbarAddWord = {
	
	html: '<div id="btn"><img class="addIcon" src="img/addBig.png"></div><div id="text"><p>Haus</p></div>',
	dock: 'top',
	listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').hide();
					}
                });
				
          }
	}
}

var readingTextTextItself = {
	style : 'background-color: white',
	html : '<div id="readingText"><p>One of the challenges in setting up the Android project was figuring out how to best support the outside community--from the hobbiest community to large OEMs building mass-market consumer devices. We wanted components to be replaceable, and we wanted interesting components to be able to grow a life of their own outside of Android. We first chose a distributed revision control system, then further narrowed it down to Git.</p></div>',
		listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
					}
                });
				
          }
	}
}
var readingTextTextItself2 = {
	style : 'background-color: white',
	html : '<div id="readingText"><p>A topic branch is not a copy of the original files; it is a pointer to a particular commit. This makes creating local branches and switching among them a light-weight operation. By using branches, you canisolateone aspect of your work from the others. For an interesting article about using topic branches, see Separating topic branches .</p></div>',
		listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
					}
                });
				
          }
	}
}
var readingTextTextItself3 = {
	style : 'background-color: white',
	html : '<div id="readingText"><p>Deleting a client will permanently delete any changes you have not yet uploaded for review.Becauseall state information is stored in your client, you only need to delete the directory from your filesystem:</p></div>',
		listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
					}
                });
				
          }
	}
}

var readingTextView = new Ext.Carousel({
	fullscreen : true,
	items : [readingTextTextItself, readingTextTextItself2, readingTextTextItself3],
	dockedItems : [backToolbarToOverviewText, toolbarAddWord]
	
});



var learningItemsFront = {
	style : 'background: url("img/background.png")',
	layout : 'card',
	title: "card",
	html: '<div class="wrapper"><div id="showCardCreate"><img class="landscape-overview" src="img/learningWordsBig.png"/></div><section class="asking"><details class="antwort">Clean</details></section>',	
	listeners: {
		'render': function(panel) {
                panel.getEl().on({
                    'click': function() {
							$('.antwort').text('Waschen');
					},
					'swipe':function() {
						$('.antwort').text('Waschen (swiped)');
					}
                });
				
          }
	}
};



// Overview of the cards
var learnPanel = new Ext.Panel({
	fullscreen:true,
    style : 'background: url("img/background.png")',
	items: [learningItemsFront],
	dockedItems: [backToolbarToOverview,learningItemsBtn]
});
var cardOverview = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	items : [cardViewItem1,cardViewItem2],
	dockedItems: [backToolbarToMenu],
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click el');
				setOrientationIntro();
				rootPanel.setActiveItem(learnPanel, {
                type: 'slide',
                reverse: true
       		}
			);
			}
		}
	}
});

var textOverview = new Ext.Carousel({
	cardSwitchAnimation: 'slide',
	items : [textViewItem1,textViewItem2],
	dockedItems: [backToolbarToMenu],
	listeners: {
		click: {
			element: 'body', //element: 'el', //bind to the underlying el property on the panel
			fn: function(){
				console.log('click items');
				//TODO: set active panel
				rootPanel.setActiveItem(readingTextView, {
                	type: 'slide',
               		reverse: false
       			}
			);
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
			reverse: true,
			listeners: {
				scope: this,
				orientationchange: function(panel, orientation){
					if (orientation === "landscape") {
						$('.wrapper').addClass('landscape');
					}
					else {
						$('.wrapper').removeClass('landscape');
					}
				}
			}
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
			items: [one],
			listeners: {
				scope: this,
				orientationchange: function(panel, orientation){
					setOrientationIntro();
/*
					if (orientation === "landscape") {
						$('.wrapper').addClass('landscape');
					}
					else {
						$('.wrapper').removeClass('landscape');
					}
*/
				}
			}
		});
		setOrientationIntro();
		$('#lernWords').live('click', function(){
			rootPanel.setActiveItem(cardOverview);
			setOrientationIntro();
		});
		$('#readTexts').live('click', function(){
			rootPanel.setActiveItem(textOverview);
			setOrientationIntro();
		});
		if(!Ext.is.iPhone){
			Ext.Msg.alert("Iphone", "This app is specially designed for iOS");
		}
		
	}
	
});


