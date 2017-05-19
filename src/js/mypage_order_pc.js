const $ = require('jquery');
import { ToggleTab } from './class/toggleTab.class';

(function(window, $ , undefined){
    'use strict';
    if(typeof $ !== 'function') {
        return;
    }
    const $tabConfig = $('#r-toggleTabConfig');
    var tabSelectors = {
        defaults: {
            targetTab: '.tabListWrapper',
			targetTabContent: '.tabPanelWrapper'
        }
    }
    const customTargetTab = $tabConfig.attr('data-targetTab') || tabSelectors.defaults.targetTab;
    const customTargetTabContent = $tabConfig.attr('data-targetTabContent') || tabSelectors.defaults.targetTabContent;
    const $tabElement = $(customTargetTab).find('[role="tab"]');
    const $tabContentElement = $(customTargetTabContent).find('[role="tabpanel"]');

    if($tabConfig.length > 0) {
        const toggleTabIns = new ToggleTab($tabConfig, $tabElement, $tabContentElement);
        toggleTabIns.init();
    }

})(window, window.jQuery);