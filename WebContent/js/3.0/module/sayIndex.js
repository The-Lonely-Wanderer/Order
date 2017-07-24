define("path/sayIndex", [], function(require, exports, module) {
	function saybanner(opt) {
		var defaultOpt = {
			ele: ""
		}
		$.extend(this, defaultOpt, opt);
		this.$bd = $("#" + this.ele)
		this.$pre = this.$bd.find("#preSay");
		this.$next = this.$bd.find("#nextSay");
		this.$ul = this.$bd.find("ul");
	}
	saybanner.prototype.pre = function() {
		var self = this;
		self.$pre.on("click", function() {
			self.$bd.find("li").eq(self.$bd.find("li").length - 1).prependTo(self.$ul).css({
				left: '-788px'
			}).animate({
				left: -298,
				width: 490,
				height: 260,
				top: 30
			}, 500);
			self.$bd.find("li").eq(1).animate({
				left: 188,
				width: 603,
				height: 320,
				top: 0
			}, 500);
			self.$bd.find("li").eq(2).animate({
				left: 788,
				width: 490,
				height: 260,
				top: 30
			}, 500);
		});
	}
	saybanner.prototype.next = function() {
		var self = this;
		self.$next.on("click", function() {
			self.$bd.find("li").eq(0).css({
				left: '1278px'
			}).appendTo(self.$ul);
			self.$bd.find("li").eq(0).animate({
				left: -298,
				width: 490,
				height: 260,
				top: 30
			}, 500);
			self.$bd.find("li").eq(1).animate({
				left: 188,
				width: 603,
				height: 320,
				top: 0
			}, 500);
			self.$bd.find("li").eq(2).animate({
				left: 788,
				width: 490,
				height: 260,
				top: 30
			}, 500);
		});
	}

	function recommend() {
		var light01 = new saybanner({
			ele: "indexSay"
		});
		light01.pre();
		light01.next();
	}
	recommend();
})