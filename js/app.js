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

var spacer ={
	xtype:'spacer'
};

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
	html: '<div class="wrapper"><div id="lernWords"><img class="intro" src="img/learnWordsBig.png"/></div><div id="readTexts"><img class="intro" src="img/ReadTextNewBig.png"/></div></div></div>',
	
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
	text: 'Menu',
	ui:'back',
	handler: tapHander	
}

var backBtnToOverview = {
	text: 'Quit lerning',
	ui:'back',
	handler: backBtnToOverview	
}

var backBtnToOverviewText = {
	text: 'Quit reading',
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

var helpBtn = {
	text: "Help",
	ui:"Action",
	handler: showHelp
}

function showHelp(){
	Ext.Msg.alert("Help", 'If you tap a word in text, the translation will be shown in translation bar. Click on <img class="helpIcon" src="img/addBig.png"/> icon to add the word to your card deck. If you want to remove the word from card deck that you just added click on <img class="helpIcon" src="img/deleteBig.png"/> icon');
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
	items: [backBtnToOverviewText,spacer, helpBtn],
	dock: 'top'
};


var learningItemsBtn = {
	xtype: 'toolbar',
	ui:'light',
	items: [learningItemsTrueBtn,spacer, learningItemsFalseBtn],
	dock: 'bottom'
};

// learningItemsBtn.items = [learningItemsTrueBtn, learningItemsFalseBtn];

var cardViewItem1 = {
	style : 'background: url("img/background.png")',
	title: "card",
	html: '<div class="wrapper"><div id="showCardCreate"><img class="landscape-overview" src="img/cardOverviewBackground.png"/></div><section><header>First Cards</header><details>Card deck language:<br>German<br>Items to learn today: 2</details></section></div>',
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
	html: '<div class="wrapper"><div id="showCardCreate"><img class="landscape-overview" src="img/cardOverviewBackground.png"/></div><section><header>PoshEng</header><details>Card deck language:<br>English<br>Items to learn today: 5</details></section></div>'
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
				$('#text p').text('Translation Bar');
				$('.addIcon').hide();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
						$('.addIcon').attr("src", "img/deleteBig.png");
					}
                });
				
          }
	}
}

var readingTextTextItself = {
	style : 'background-color: white',
	html : '<div id="readingText"><p>One of the <span class="translate">challenges</span> in setting up the Android project was figuring out how to best support the outside community--from the hobbiest community to large OEMs building mass-market consumer devices. We wanted components to be replaceable, and we wanted interesting components to be able to grow a life of their own outside of Android. We first chose a distributed revision control system, then further narrowed it down to Git.</p></div>',
		listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
						$('.addIcon').attr("src", "img/addBig.png");
						$('.translate').css('border-bottom','3px solid red');
						$('#text p').text('Der Anruf');
						
					}
                });
				
          }
	}
}
var readingTextTextItself2 = {
	style : 'background-color: white',
	html : '<div id="readingText"><p>A topic <span class="translate2">branch</span> is not a copy of the original files; it is a pointer to a particular commit. This makes creating local branches and switching among them a light-weight operation. By using branches, you canisolateone aspect of your work from the others. For an interesting article about using topic branches, see Separating topic branches .</p></div>',
		listeners: {
		'render': function(panel) {
				$('.addIcon').show();
                panel.getEl().on({
                    'click': function() {
						$('.addIcon').show();
						$('.addIcon').attr("src", "img/addBig.png");
						$('.translate2').css('border-bottom','3px solid red');
						$('#text p').text('Der Abzweig');
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
                reverse: false
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
			$('#text p').text('Translation bar');
				$('.addIcon').hide();
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
			Ext.Msg.alert("Warning", "This app is specially designed for iOS 4.0");
		}
		
	}
	
});


