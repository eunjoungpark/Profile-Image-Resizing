/**
 * Author : Park Eun Joung
 * Website : http://zzangsuni.com
 * Job : Web Publisher
 * GitHub Path : https://github.com/eunjoungpark/Profile-Image-Resizing
 */

(function($){
	function ProfileImageResize(_obj, options){
		this.obj = $(_obj);
		this.resizeInit();
		this.width = parseInt(this.obj.width());
		this.height = parseInt(this.obj.height());
		this.standard = options.profileImg_std;
		this.half = (this.standard / 2); 
		this.resizeFunc();
	};

	ProfileImageResize.prototype.resizeInit = function(){
		$(this.obj).css({"width":"auto","height":"auto"});
	};

	ProfileImageResize.prototype.resizeFunc = function(){
		var objThis = this;
		var img_width = objThis.width;
		var img_height = objThis.height;
		var img_std = objThis.standard;
		var img_half = objThis.half;
		
		if(img_width > img_height){
			$(this.obj).css("height",img_std+"px");
			img_width = parseInt($(this.obj).width());

			$(this.obj).css({"width":img_width,"margin-left":"-"+(img_width/2)+"px","margin-top":"-"+img_half+"px"});
		}else if(img_width < img_height){
			$(this.obj).css("width",img_std+"px");
			img_height = parseInt($(this.obj).height());
			$(this.obj).css({"height":img_height,"margin-left":"-"+img_half+"px","margin-top":"-"+(img_height/2)+"px"});
		}else{
			$(this.obj).css({"width":img_std+"px","height":img_std+"px","margin":"-"+img_half+"px 0 0 -"+img_half+"px"});
		}	
	};

	//defaultOption
	profileImgOpt = {
		profileImg_std : 90
	};

	$.fn.imgResizeExt = function(optionList){
		this.each(function(idx){
			var options = $.extend(null, profileImgOpt, optionList[idx]);
			var profileImg = new ProfileImageResize(this, options);
		});
	}
})(jQuery);


//call plugin
$(function(){

	var profile_img = $(".photo").find("img");
	profile_img.each(function(){
		$(this).imgResizeExt([{}]);
	});	
	
});


