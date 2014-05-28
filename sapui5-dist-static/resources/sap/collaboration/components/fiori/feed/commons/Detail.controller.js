/*!
 * @copyright@
 */
jQuery.sap.require("sap.collaboration.components.utils.JamUtil");sap.ui.controller("sap.collaboration.components.fiori.feed.commons.Detail",{onInit:function(){var s=this;this.sJamToken=this.getView().getViewData().jamToken;this.sJamURL=this.getView().getViewData().jamURL;this.oLangBundle=this.getView().getViewData().langBundle;this.sPrefixId=this.getView().getViewData().controlId;this.oBusinessObject=this.getView().getViewData().object;if(this.getView().getViewData().appType===sap.collaboration.AppType.split){this.sFeedType=sap.collaboration.FeedType.follows}else{this.sFeedType=this.getView().getViewData().feedType;this.getView().oDetailPage.setShowHeader(false)}this.oJamUtil=new sap.collaboration.components.utils.JamUtil()},onBeforeRendering:function(){},onAfterRendering:function(){try{this.loadFeedWidgetScript(this.sJamURL)}catch(e){jQuery.sap.log.error(e,"","sap.collaboration.components.fiori.feed.commons.Detail.onInit()");throw e}},loadFeedWidgetScript:function(j){var s=this;try{var g=s.getView().getViewData().groupIds;var w=this.oJamUtil.prepareWidgetData(s.sJamToken,s.sFeedType,g,s.oBusinessObject);var l=function(r){jQuery.sap.log.info("Jam Feed Widget Loaded Successfully","sap.collaboration.components.fiori.feed.commons.Detail.onInit()");s.oJamUtil.initializeJamWidget(s.sJamURL);s.oJamUtil.createJamWidget(s.sPrefixId+"widgetContainer",w)};var L=function(e){jQuery.sap.log.error(e,"","sap.collaboration.components.fiori.feed.commons.Detail.loadFeedWidgetScript()");throw e};this.oJamUtil.loadFeedWidgetScript(j,l,L)}catch(e){jQuery.sap.log.error(e,"","sap.collaboration.components.fiori.feed.commons.Detail.loadFeedWidgetScript()");throw e}}});