define("path/placeholder", ['jquery'], function(require, exports, module) {
	var jq = require("jquery");

	(function($) {
		//feature detection
		var hasHtml5Support = ('placeholder' in (document.createElement('input')));
		var beforeFormSave = function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if(input.val() == input.attr('placeholder')) {
					input.val('').css("color", "#999");
				}
				input.removeClass('placeholder');
			});
		};
		var defaults = {
			saveContainer: 'form',
			saveEvent: 'submit'
		};
		var methods = {
			init: function(options) {
				var settings = $.extend({}, defaults, options);

				if(hasHtml5Support) {
					return this;
				}
				this.on('focus', function() {
						var input = $(this);
						if(input.val() == input.attr('placeholder')) {
							input.val('').css("color", "#333");
							input.removeClass('placeholder');
						}
					}).on('blur', function() {
						var input = $(this);
						if(input.val() == '' || input.val() == input.attr('placeholder')) {
							input.addClass('placeholder');
							input.val(input.attr('placeholder')).css("color", "#999");
						}
					}).blur()
					.parents(settings.saveContainer).bind(settings.saveEvent, beforeFormSave);
				return this;
			},
			getValue: function() {
				if(hasHtml5Support) {
					return this.val();
				}
				if(this.val() == this.attr('placeholder')) {
					return '';
				}
				return this.val();
			},
			refresh: function() {
				if(hasHtml5Support) {
					return this;
				}
				return this.each(function() {
					$(this).trigger('blur');
				});
			}
		};
		$.fn.initPlaceHolders = function(method) {
			if(methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if(typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.initPlaceHolders');
			}
		};
	})(jQuery);
	$(function() {
		$("input,textarea").initPlaceHolders();
	});
})