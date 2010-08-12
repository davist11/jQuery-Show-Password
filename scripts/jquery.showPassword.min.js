/*
 * jQuery Show Password Plugin
 * http://github.com/davist11/jQuery-Show-Password
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.2
 */
(function(a){a.fn.showPassword=function(k){var j=a.extend({},a.fn.showPassword.defaults,k);return this.each(function(){var b=a(this),f=b.position(),d=b.outerWidth(),g=b.outerHeight(),e=b.parent(),h=e.height(),c=a.meta?a.extend({},j,b.data()):j;e.height(h);a("<a/>",{href:"#","class":c.linkClass,click:function(l){var i=e.find("."+c.showPasswordInputClass);if(b.css("display")==="none"){a(this).text(c.linkText);b.val(i.val()).show();i.hide()}else{a(this).text(c.showPasswordLinkText);i.val(b.val()).show();b.hide()}l.preventDefault()},css:{left:f.left+d,top:f.top+g},text:c.linkText}).appendTo(e);d=e.find("."+c.linkClass);g=d.outerWidth();h=parseInt(d.css("left"),10);var m=d.outerHeight(),n=parseInt(d.css("top"),10);d.css({left:h-g-c.linkRightOffset,top:n-m-c.linkTopOffset});a("<input/>",{"class":c.showPasswordInputClass,css:{display:"none",left:f.left,top:f.top},type:"text"}).appendTo(e)})};a.fn.showPassword.defaults={linkClass:"show-password-link",linkText:"Show",showPasswordLinkText:"Hide",showPasswordInputClass:"password-showing",linkRightOffset:0,linkTopOffset:0}})(jQuery);