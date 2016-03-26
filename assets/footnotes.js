"use strict";
function _classCallCheck(e,t){
	if(!(e instanceof t))
		throw new TypeError("Cannot call a class as a function")
}
var _createClass=function(){
	function e(e,t){
		for(var n=0;n<t.length;n++){
			var o=t[n];
			o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
		}
	}
	return function(t,n,o){
		return n&&e(t.prototype,n),o&&e(t,o),t
	}
}(),Footnotes=function(){
	function e(){
		_classCallCheck(this,e);
		var t=document.getElementsByClassName("footnotes");
		if(t.length){
			for(var n=t[0].firstChild.childNodes,o=n.length;o--;){
				var s=n[o],a=s.getAttribute("id").slice(-1),i=document.getElementById("fnref:"+a);
					s.getElementsByClassName("reversefootnote")[0].remove(),this.spawnPlacebo(s,i,a)
				}
				this.popup=document.querySelector(".note")
			}
		}
		return _createClass(e,[{key:"openNote",value:function(e){
			var t=this.popup,n=t.classList.contains("shown");
			if(n){
				var o=document.querySelector("[data-note].open");
				this.closeNote(o)
			}
			document.body.addEventListener("click",function(){
				this.closeNote(e)}.bind(this)),t.innerHTML=e.getAttribute("data-note"),setTimeout(function(){
					t.className=t.className+" shown",t.addEventListener("click",function(e){
						e.stopPropagation()
					})
				},100),e.setAttribute("class","open")
			}
		},{key:"closeNote",value:function(e){
		this.popup.setAttribute("class","note"),e.removeAttribute("class"),document.body.onclick=null
		}},{key:"spawnPlacebo",value:function(e,t,n){
		var o=document.createElement("span"),s=e.firstChild.innerHTML,a=this;o.setAttribute("data-note",s),o.innerHTML=n,o.addEventListener("click",function(e){
				this.classList.contains("open")?a.closeNote(this):a.openNote(this,e),e.stopPropagation()
		}),t.parentNode.replaceChild(o,t)
		}}]),e}();

new Footnotes;