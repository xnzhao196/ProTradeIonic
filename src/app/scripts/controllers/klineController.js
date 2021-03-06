'use strict';

/**
 * @ngdoc function
 * @name ProTradeIonic.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('ProTradeIonic')
  .controller('KlineController', function($rootScope, $scope, ExampleService) {

    $scope.myHTML = null;

    // just an example...
    //$scope.fetchRandomText = function() {
    //  ExampleService.doSomethingAsync()
    //    .then(ExampleService.fetchSomethingFromServer)
    //    .then(function(response) {
    //        $scope.myHTML = response.data.text;
    //        // close pull to refresh loader
    //        $scope.$broadcast('scroll.refreshComplete');
    //    });
    //};

    //$scope.fetchRandomText();
    var widget = new TradingView.widget({
        width: '100%',
        height: '100%',
        fullscreen: false,
        symbol: $rootScope.urlParameter.symbol,
        interval: '60',
        timezone: "Asia/Shanghai",
        container_id: "chart",
        allow_symbol_change: true,
        theme:"white",
        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: new Datafeeds.UDFCompatibleDatafeed('https://pro-data.btcc.com/data/udf'),
        library_path: "charting_library/",
        locale: 'en',
        //hide_side_toolbar: true,
        //	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
        drawings_access: {type: 'black', tools: [{name: "Regression Trend"}]},
        disabled_features: ['left_toolbar',"link_to_tradingview","use_localstorage_for_settings",'control_bar','header_chart_type','header_interval_dialog_button','show_interval_dialog_on_key_press', 'header_symbol_search','header_settings','header_indicators','header_compare','header_undo_redo','header_fullscreen_button','header_screenshot','timeframes_toolbar'],
//					charts_storage_url: 'http://saveload.tradingview.com',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        preset: "mobile",
        overrides: {
          "paneProperties.background": "#fff", // kline panel
          "paneProperties.gridProperties.color": "#E1E1E1",
          "scalesProperties.lineColor" : "#E1E1E1",
          "symbolWatermarkProperties.transparency": 80, //
          "scalesProperties.showLeftScale" : false,
          "scalesProperties.showRightScale" : true,
          "scalesProperties.backgroundColor" : "E1E1E1",
          // "volumePaneSize": "large",
          //  Candles styles
          "mainSeriesProperties.style": 1,
          "mainSeriesProperties.lineStyle.color": "#E1E1E1",
          "mainSeriesProperties.showPriceLine": true,
          "mainSeriesProperties.candleStyle.upColor": "#28A631",
          "mainSeriesProperties.candleStyle.downColor": "#BD2B35"
        },
        studies_overrides: {
            "volume.show ma": true
        },
        favorites:{
            intervals: ["1", "15", "30", "60", "1D"]
        }
        //time_frames: timeFrames,
        //resolution: [1, 15, 240, "D", "6M"]
    });
  });
