define(function(require, exports, moudles) {
	return function(jquery) {
		! function(a, b, c) {
			function e(a) { return a }

			function f(a) { return decodeURIComponent(a.replace(d, " ")) } var d = /\+/g,
				g = a.cookie = function(d, h, i) { var j, k, l, m, o, n, p; if(h !== c) return i = a.extend({}, g.defaults, i), null === h && (i.expires = -1), "number" == typeof i.expires && (j = i.expires, k = i.expires = new Date, k.setDate(k.getDate() + j)), h = g.json ? JSON.stringify(h) : String(h), b.cookie = [encodeURIComponent(d), "=", g.raw ? h : encodeURIComponent(h), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join(""); for(l = g.raw ? e : f, m = b.cookie.split("; "), n = 0; o = m[n] && m[n].split("="); n++)
						if(l(o.shift()) === d) return p = l(o.join("=")), g.json ? JSON.parse(p) : p; return null };
			g.defaults = {}, a.removeCookie = function(b, c) { return null !== a.cookie(b) ? (a.cookie(b, null, c), !0) : !1 } }(jQuery, document);
	}

});