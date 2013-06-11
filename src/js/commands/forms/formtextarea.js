Commands.register("formtextarea", {
	requiredArguments: 1,
	format: '<pre>formtextarea [title]\nformtextarea [title] [text]</pre>',
	run: function(args, callback) {
		
		var id = _.uniqueId("formtextarea");
		var title = args.shift();
		var text = args.length > 0 ? args.join(" ") : '';
		var html = '\
			<div id="' + id + '" class="form">\
				<div class="buttons right">\
					<a href="#" id="' + id + '_button" class="btn confirm"><i class="icon-ok"></i> SUBMIT</a>\
				</div>\
				<h1>' + title + '</h1>\
				<textarea id="' + id + '_area" class="clear">' + text + '</textarea>\
			</div>\
		';
		exec("echo " + html);
		
		var form = document.getElementById(id);
		var button = document.getElementById(id + '_button');
		var textarea = document.getElementById(id + '_area');
		button.addEventListener("click", function() {
			form.parentNode.style.display = "none";
			exec("success Data sent successfully.");
			callback(textarea.value);
		});

	},
	man: function() {
		return 'Shows a simple form with textarea and button. Use the callback of the command to get the text submitted by the form.';
	}	
})