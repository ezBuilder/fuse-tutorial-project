var Observable = require("FuseJS/Observable");

var pages = Observable();
for (var i = 1; i <= 20; i++)
	pages.add({title: "PAGE " + i, handle: "page" + i});

var mainPage = {title: "Pages", handle: "pagesList"};

var currentPage = Observable(mainPage);

var currentPageHandle = currentPage.map(function(x){
	return x.handle;
});

var currentPageTitle = currentPage.map(function(x){
	return x.title;
});

function pageButtonClicked(arg){
	currentPage.value = arg.data;
}

function goBack(arg){
	currentPage.value = mainPage;
}

module.exports = {
	pages: pages,
	currentPage: currentPage,
	currentPageHandle: currentPageHandle,
	currentPageTitle: currentPageTitle,
	pageButtonClicked: pageButtonClicked,
	goBack: goBack
};

