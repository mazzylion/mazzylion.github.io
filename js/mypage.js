/* global $, document, setTimeout, location */


$(document).ready(function () {
    'use strict';
    
    $('#fullpage').fullpage({
        anchors: ['LandingPage', 'IntroPage', 'UHIMapPage', 'UHIChartsPage', 'FactorsPage', 'FuturePage', 'PoliciesPage', 'TeamPage'],
        menu: '#menu',
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Introduction', 'Overview', 'Comparison', 'Factors', 'Future', 'Policies', 'Team']
    });

    setTimeout(function () {
        $.fn.fullpage.reBuild();
    }, 1000);
});

