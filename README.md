# Content editable Textarea

Jquery plugin for textarea which looks like twitter's twit text area.

#How to use
Add this script into your index.html
<script src="path of contentEditableTextarea plugin"></script>
```
$(".editable").contentEditable({
			"placeholder" : "Don´t be shy, give me some letters here.",
			"maxLenth": 50,
			"cls": "hello",
			"classIfMaxReached": "maxReached",
			"onBlur" : function(element){
				var edited_content = element.content;
				console.log(edited_content);
			}
});
```

So here you can gie placeholder ,maxlength etc.
cls stand for class so that you can do styling also.Inside 'onBlur' function you can get value of current texarea.
