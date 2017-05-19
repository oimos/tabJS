export class ToggleTab {
    constructor( configElement, tabElement, tabContentElement ) {
        this.tabElement = tabElement;
        this.tabContentElement = tabContentElement;
        this.state = { tabPos: 0, selectedTabIndex: 0 };
    }

    init() {
        this.tabElement.bind('click', {that:this}, this.toggleTab);
    }

    toggleTab(e){
        var that = e.data.that;
        that.selectedTabIndex = $(this).index();
        that.tabElement.removeClass('active');
        that.tabContentElement.removeClass('active');
        that.tabElement.eq(that.selectedTabIndex).addClass('active');
        that.tabContentElement.eq(that.selectedTabIndex).addClass('active');
    }
}