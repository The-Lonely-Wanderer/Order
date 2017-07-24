var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32398279-1']);
_gaq.push(['_setDomainName', '.dianwoba.com']);
_gaq.push(["_setAllowLinker", true]);
_gaq.push(['_setAllowHash', false]);
_gaq.push(["_addOrganic", "sogou", "query"]);
_gaq.push(["_addOrganic", "so.360.cn", "q"]);
_gaq.push(["_addOrganic", "so.com", "q"]);
_gaq.push(["_addOrganic", "baidu", "word"]);
_gaq.push(['_addOrganic', 'm.baidu', 'word']);
_gaq.push(['_addOrganic', 'wap.baidu', 'word']);
_gaq.push(['_addOrganic', 'baidu', 'kw']);
_gaq.push(['_addOrganic', 'baidu', 'wd']);
_gaq.push(["_addOrganic", "soso", "w"]);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
		'stats.g.doubleclick.net/dc.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

function traceGAOrder(orderId) {

	_gaq.push(['_trackPageview']);
	_gaq.push(['_addTrans', orderId, // transaction ID - required
		'', // affiliation or store name
		'0', // total - required
		'0', // tax
		'', // shipping
		'', // city
		'', // state or province
		'' // country
	]);

	// add item might be called for every item in the shopping cart
	// where your ecommerce engine loops through each item in the cart and
	// prints out _addItem for each
	_gaq.push(['_addItem', orderId, // transaction ID - required
		'NONE', // SKU/code - required
		'NONE', // product name
		'NONE', // category or variation
		'0', // unit price - required
		'1' // quantity - required
	]);
	_gaq.push(['_trackTrans']); //submits transaction to the Analytics servers

}