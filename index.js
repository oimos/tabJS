;(function(window, $){
'use strict';
if(typeof $ !== 'function') {
	return;
}
var SwitchTab = function($config){
	this.$config = $config;
	this.$targets = undefined;
	this.targetTabSelector = this.$config.attr('data-targetTab') || this.defaults.selectors.targetTab;
	this.targetTabContentSelector = this.$config.attr('data-targetTabContent') || this.defaults.selectors.tagetTabContent;

	this.$tab = undefined;
	this.$tabContent = undefined;
	this.state = undefined;
	this.initialize();
	this.setEvents();
};

SwitchTab.prototype = {
	defaults: {
		selectors: {
			targetTab: '.tab',
			tagetTabContent: '.tabContent'
		}
	},
	initialize: function(){
		this.$targetTab = $(this.targetTabSelector);
		this.$targetsTabContent = $(this.targetTabContentSelector);
		this.$tabList = this.$targetTab.find('li[role="tab"]');
		this.$tabContentList = this.$targetsTabContent.find('div[role="tabpanel"]')
		this.state = { tabPos: 0, selectedTabIndex: 0 };
	},
	setEvents: function(){
		this.$tabList.bind('click', {that:this}, this.toggleTab);
	},
	toggleTab: function(e){
		var that = e.data.that;
		that.selectedTabIndex = $(this).index();
		that.$tabList.removeClass('active');
		that.$tabContentList.removeClass('active');
		that.$tabList.eq(that.selectedTabIndex).addClass('active');
		that.$tabContentList.eq(that.selectedTabIndex).addClass('active');
	}
}
var $config = $('#r-toggleTab');
if($config .length > 0) {
	var ins = new SwitchTab($config);
}
})(window, window.jQuery);