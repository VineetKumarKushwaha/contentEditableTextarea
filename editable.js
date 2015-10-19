
	$.fn.editable =function(param) {
		var max=param.max;
		var limit=param.limit;
		var editable_class=param.cls;
		var span_class=param.addclassIfMaxReached;
		var blur_function=param.onBlur;
		var fontSize = param.fontSize;
		var padding = param.padding;
		$(this).attr("maxlength",limit).wrap("<div class='"+editable_class+"'></div>").parent().prepend('<div class="highlighter" id="overflowText"></div>').append('<div style="display:none !important" class="editable_counter">Letters remaining: '+max+'</div>')
		$(this).parent().wrap('<div class="container" style="margin-bottom: 14px;"></div>');
		$(this).parent().parent().append('<div class="editable_counter">Letters remaining: 50</div>');
		$(this).parent().wrap('<div class="givePaddingHere"></div>');
		if (padding) {
			$(this).parent().parent().css("padding",padding);
		}
		if (fontSize) {
			$(this).parent().find(".highlighter").css("font-size", fontSize);
			$(this).parent().find(".highlight").css("font-size", fontSize);
			$(this).parent().find("textarea").css("font-size", fontSize);
		}
		function limitTextSize(e) {
			var txt = $(this).val();
			var left = txt.substring(0, max);
			var right = txt.substring(max);
			var html = left + '<span  class="'+span_class+'">' + right + "</span>";
			$(this).parent().find("#overflowText").html(html);
			$(this).parent().parent().parent().find(".editable_counter").html("Letters remaining: " + (max - txt.length));
			if (fontSize) {
				$(this).parent().find(".highlighter").css("font-size", fontSize);
				$(this).parent().find(".highlight").css("font-size", fontSize);
				$(this).parent().find("textarea").css("font-size", fontSize);
			}
		}


		$(this).bind('input keypress propertychange', limitTextSize).trigger("input")
		$(this).on("blur",function(e){
			blur_function($(this))
		})
		$(this).elastic()
	}