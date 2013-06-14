Commands.register("alias",{requiredArguments:0,format:"<pre>alias [name]</pre>",aliases:{},run:function(e,t){var n=e.length>0?e.shift():null,r=e.length>0?e.join(" "):null,i=this;aliases={},exec("storage get aliases",function(e){e.aliases&&e.aliases!=""&&(i.aliases=JSON.parse(e.aliases));if(n){var s=i.aliases[n]||"";r?(i.aliases[n]=r,i.storeAliases(t)):exec('formtextarea "alias:'+n+'" '+s,function(e){if(e==null){t();return}e===""?delete i.aliases[n]:i.aliases[n]=e,i.storeAliases(t)},!0)}else{var o="";for(var u in i.aliases)o+="<h2>"+u+"</h2><pre>"+i.aliases[u]+"</pre>";o!=""?exec("echo "+o):exec("info No data."),t()}})},storeAliases:function(e){exec("storage put aliases "+JSON.stringify(this.aliases),function(){exec("success Aliases saved succesfully.",function(){App.registerAliases(),e()})})},man:function(){return"Managing aliases.<br />		alias - brings all the aliases<br />		alias [name] - openes an editor for adding or editing. If you leave the textarea empty and click 'OK', the alias will be deleted.		"}}),Commands.register("clear",{run:function(e,t){App.clear(),t()},man:function(){return"Clearing the current console's output."}}),Commands.register("date",{requiredArguments:0,format:"<pre>date</pre>",run:function(e,t){var n=new Date,r=["January","February","March","April","May","June","July","August","September","October","November","December"],i="";i+=n.getDate()+" "+r[n.getMonth()]+" "+n.getFullYear(),i+=" ",i+=this.formatDigit(n.getHours())+":"+this.formatDigit(n.getMinutes()),t(i)},formatDigit:function(e){return e<10?"0"+e:e},man:function(){return"Gets the current date."}}),Commands.register("delay",{requiredArguments:1,format:"<pre>delay [miliseconds]</pre>",run:function(e,t){var n=parseInt(e.shift());setTimeout(function(){t()},n)},man:function(){return"Delay the next command. For example<br />		echo A &amp;&amp; delay 2000 &amp;&amp; echo B		"}}),Commands.register("exec",{requiredArguments:1,format:"<pre>error [command/s]</pre>",run:function(e,t){exec(e.join(" "),function(e){t(e)})},man:function(){return"Executes a given command."}}),Commands.register("history",{requiredArguments:0,format:"<pre>history</pre>",run:function(e,t){var n="History:<pre>";for(var r=App.commandsHistory.length-2;r>=0;r--){var i=App.commandsHistory[r];i!=""&&i!=" "&&(n+=i.toString().replace(/&/g,"&amp;")+"\n")}n+="</pre>",exec("info "+n,t,!0)},man:function(){return"Outputs the current console's history."}}),Commands.register("inject",{requiredArguments:0,format:"<pre>inject</pre>",processing:!1,files:null,proccessedFiles:-1,commands:[],callback:null,run:function(e,t){this.callback=t;if(this.processing){App.execute("error Sorry but <b>inject</b> command is working right now. Try again later."),this.callback();return}this.reset();var n=_.uniqueId("files"),r=this,i='<input type="file" id="'+n+'" name="files[]" multiple />';App.execute("hidden "+i);var s=document.getElementById(n);s.addEventListener("change",function(e){r.processing=!0,r.handleFileSelected(e)},!1),s.click()},handleFileSelected:function(e){this.files=e.target.files;var t="<b>Selected file(s):</b><br />",n=this;for(var r=0,i;i=this.files[r];r++){t+=i.name+"<br />";var s=new FileReader;(function(e,t){e.onload=function(e){e.target.result&&n.handleFileRead(t,e.target.result)},e.readAsText(t)})(s,i)}App.execute("echo "+t)},handleFileRead:function(e,t){var n=t.split("\n");for(var r=0,i;i=n[r];r++)this.commands.push(i.replace(/\n/g,"").replace(/\r/g,""));this.proccessedFiles+=1;if(this.proccessedFiles==this.files.length-1){var s=this.commands.join(" && ");this.callback(s),this.reset()}},reset:function(){this.processing=!1,this.files=null,this.proccessedFiles=-1,this.commands=[]},man:function(){return"Inject external javascript to be run in the context of Auxilio and current page."}}),Commands.register("l",{run:function(e,t){App.clear(),t()},man:function(){return"Clearing the current console's output."}}),Commands.register("man",{requiredArguments:0,format:"<pre>man\nman [name of command]</pre>",run:function(e,t){var n=e[0];if(n)this.showCommand(n);else for(var n in Commands)n!="get"&&n!="register"&&this.showCommand(n);t()},showCommand:function(e){var t=Commands.get(e);if(t){var n="(<b>"+e+"</b>) "+(t.man?t.man():"");t.format&&t.format!=""?n+="<br />"+t.format:null,exec("echo "+n)}},man:function(){return"Shows information about available commands."}}),Commands.register("profile",{requiredArguments:0,format:"<pre>echo [operation]</pre>",run:function(e,t){var n=e[0]||"show",r=this;switch(n){case"show":exec("storage get profiledata",function(e){if(e.profiledata&&e.profiledata!==""){var n="Your profile:<br />";n+="<pre>"+e.profiledata+"</pre>",exec("info "+n,t)}else exec("info There is no profile data.",t)});break;case"edit":exec("storage get profiledata",function(e){var n="";e.profiledata&&e.profiledata!==""&&(n=e.profiledata),exec('formtextarea "Manage your profile:" '+n,function(e){typeof e!="undefined"?exec("storage put profiledata "+e,function(){exec("success Profile changed successfully.",t)}):t()})});break;case"import":exec("inject",function(e){e=e.replace(/ && /g,"\n"),exec("storage put profiledata "+e,function(){exec("success Profile changed successfully.",t)})});break;case"clear":exec("storage remove profiledata",function(){exec("success Profile cleared successfully.",t)});break;case"run":App.loadProfile(),t()}},man:function(){return"Manages your current profile file. Valid operations:<br />show, edit, import, clear, run"}}),Commands.register("request",{requiredArguments:1,format:"<pre>request [url]<br />request [url] [raw]</pre>",run:function(e,t){var n=this,r=e.shift(),i=e.length>0&&e[0]==="true";r.indexOf("http")==-1&&(r="http://"+r);var s=function(e){if(e.error)exec("error request: "+e.error,t);else{var n=e.responseText;i||(n=n.replace(/</g,"&lt;"),n=n.replace(/>/g,"&gt;"),n="<pre>"+n+"</pre>"),t(n)}};chrome&&chrome.runtime?chrome.runtime.sendMessage({type:"request",url:r},s):request(r,s)},man:function(){return"Sends ajax request and shows the result in the console.<br />		Use <b>raw</b> parameter to leave the data as it is received from the url. 		For example:<br />		request github.com true"}});var request=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState==4&&n.status==200?t({responseText:n.responseText}):n.readyState==4&&t({error:"Error requesting '"+e+"'. (xhr.status="+n.status+")"})},n.send()};Commands.register("storage",{requiredArguments:1,format:"<pre>storage [operation] [key] [value]</pre>",lookForQuotes:!1,run:function(e,t){var n=e.shift(),r=e.length>0?e.shift():null,i=e.length>0?e.join(" "):null;if(n!=="put"&&n!="get"&&n!="remove"){exec("error profile: Operation parameter could be 'put', 'get' or 'remove' (not '"+n+"')."),t();return}if((n==="put"||n==="remove")&&!r){exec("error profile: 'key' is missing."),t();return}if(n==="put"&&!i){exec("error profile: 'put' operation used, but 'value' is missing."),t();return}chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"storage",operation:n,key:r,value:i},function(e){e.error?exec("error "+error.error):n==="get"?t(e.value):t()})},man:function(){return"			Store key-value pairs by using chrome.storage.sync API.<br />			Examples:<br />			storage put username Auxilio // stores username=Auxilio<br />			storage get username // returns Auxilio<br />			storage remove username // returns Auxilio<br />			storage get // returns all stored values<br />		"}}),Commands.register("formconfirm",{requiredArguments:1,format:"<pre>formconfirm [question]</pre>",run:function(e,t){var n=_.uniqueId("formconfirm"),r=e.join(" "),i='			<div id="'+n+'" class="form">				<div class="buttons right">					<a href="#" id="'+n+'_buttonno" class="btn deny"><i class="icon-ok"></i> NO</a>					<a href="#" id="'+n+'_buttonyes" class="btn confirm"><i class="icon-ok"></i> YES</a>				</div>				<h1>'+r+'</h1>				<span class="clear" />			</div>		';exec("echo "+i);var s=document.getElementById(n),o=document.getElementById(n+"_buttonyes"),u=document.getElementById(n+"_buttonno");o.addEventListener("click",function(){s.parentNode.style.display="none",t(!0),App.commandInputFocus()}),u.addEventListener("click",function(){s.parentNode.style.display="none",t(!1),App.commandInputFocus()})},man:function(){return"Shows a text (question) with two options - YES and NO. The callback accepts only one boolean parameter."}}),Commands.register("formfile",{requiredArguments:1,format:"<pre>formfile [title]</pre>",run:function(e,t){var n=_.uniqueId("formfile"),r=e.join(" "),i='			<div id="'+n+'" class="form">				<div class="buttons right">					<a href="#" id="'+n+'_button_cancel" class="btn deny"><i class="icon-cancel"></i> CANCEL</a>					<a href="#" id="'+n+'_button" class="btn confirm"><i class="icon-ok"></i> OK</a>				</div>				<h1>'+r+'</h1>				<input type="file" id="'+n+'_area" class="clear" />				<div class="file-content" id="'+n+'_filecontent"></div>			</div>		';exec("echo "+i);var s=document.getElementById(n),o=document.getElementById(n+"_button"),u=document.getElementById(n+"_button_cancel"),a=document.getElementById(n+"_area"),f=document.getElementById(n+"_filecontent"),l=null;a.addEventListener("change",function(e){var t=e.target.files,n=null;if(n=t[0]){var r=new FileReader;r.onload=function(e){e.target.result&&(l=e.target.result,f.style.display="block",f.innerText=l)},r.readAsText(n)}}),o.addEventListener("click",function(){l!=null?(s.parentNode.style.display="none",t(l),App.commandInputFocus()):exec("error Please choose a file.")}),u.addEventListener("click",function(){s.parentNode.style.display="none",t(),App.commandInputFocus()})},man:function(){return'Shows a simple form with input[type="file"] and button. Use the callback of the command to get the content of the file.'}}),Commands.register("forminput",{requiredArguments:1,format:"<pre>forminput [title]\forminput [title] [text]</pre>",run:function(e,t){var n=_.uniqueId("forminput"),r=e.shift(),i=e.length>0?e.join(" "):"",s='			<div id="'+n+'" class="form">				<div class="buttons right">					<a href="#" id="'+n+'_button_cancel" class="btn deny"><i class="icon-cancel"></i> CANCEL</a>					<a href="#" id="'+n+'_button" class="btn confirm"><i class="icon-ok"></i> OK</a>				</div>				<h1>'+r+'</h1>				<input type="text" id="'+n+'_area" class="clear" value="'+i+'"/>			</div>		';exec("echo "+s);var o=document.getElementById(n),u=document.getElementById(n+"_button"),a=document.getElementById(n+"_button_cancel"),f=document.getElementById(n+"_area");f.focus(),u.addEventListener("click",function(){o.parentNode.style.display="none";var e=f.value.replace(/ && /g,"\n");t(e),App.commandInputFocus()}),a.addEventListener("click",function(){o.parentNode.style.display="none",t(),App.commandInputFocus()})},man:function(){return"Shows a simple form with input and button. Use the callback of the command to get the text submitted by the form."}}),Commands.register("formtextarea",{requiredArguments:1,format:"<pre>formtextarea [title]\nformtextarea [title] [text]</pre>",run:function(e,t){var n=_.uniqueId("formtextarea"),r=e.shift(),i=e.length>0?e.join(" "):"",s='			<div id="'+n+'" class="form">				<div class="buttons right">					<a href="#" id="'+n+'_button_cancel" class="btn deny"><i class="icon-cancel"></i> CANCEL</a>					<a href="#" id="'+n+'_button" class="btn confirm"><i class="icon-ok"></i> OK</a>				</div>				<h1>'+r+'</h1>				<textarea id="'+n+'_area" class="clear">'+i+"</textarea>			</div>		";exec("echo "+s);var o=document.getElementById(n),u=document.getElementById(n+"_button"),a=document.getElementById(n+"_button_cancel"),f=document.getElementById(n+"_area");f.focus(),u.addEventListener("click",function(){o.parentNode.style.display="none";var e=f.value.replace(/ && /g,"\n");t(e),App.commandInputFocus()}),a.addEventListener("click",function(){o.parentNode.style.display="none",t(),App.commandInputFocus()})},man:function(){return"Shows a simple form with textarea and button. Use the callback of the command to get the text submitted by the form."}}),Commands.register("echo",{requiredArguments:1,format:"<pre>echo [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="regular">'+e.join(" ")+"</div>"),t()},man:function(){return"Outputs message."}}),Commands.register("error",{requiredArguments:1,format:"<pre>error [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="error"><i class="icon-attention"></i> '+e.join(" ")+"</div>"),t()},man:function(){return"Outputs error message."}}),Commands.register("hidden",{requiredArguments:1,format:"<pre>hidden [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="hidden">'+e.join(" ")+"</div>"),t()},man:function(){return"Outputs invisible content. I.e. useful when you have to add hidden html markup."}}),Commands.register("hr",{requiredArguments:0,format:"<pre>hr</pre>",lookForQuotes:!1,run:function(e,t){App.setOutputPanelContent("<div><hr /></div>"),t()},man:function(){return"Adds &lt;hr /> tag to the console's output panel"}}),Commands.register("info",{requiredArguments:1,format:"<pre>info [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="info"><i class="icon-info-circled"></i> '+e.join(" ")+"</div>"),t()},man:function(){return"Outputs info message."}}),Commands.register("small",{requiredArguments:1,format:"<pre>small [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="small"><i class="icon-right-hand"></i> '+e.join(" ")+"</div>"),t()},man:function(){return"Outputs small message."}}),Commands.register("success",{requiredArguments:1,format:"<pre>success [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="success"><i class="icon-ok"></i> '+e.join(" ")+"</div>"),t()},man:function(){return"Outputs success message."}}),Commands.register("title",{requiredArguments:1,format:"<pre>title [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent("<div><h1>"+e.join(" ")+"</h1></div>"),t()},man:function(){return"Outputs a title."}}),Commands.register("warning",{requiredArguments:1,format:"<pre>warning [text]</pre>",lookForQuotes:!1,run:function(e,t){for(var n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=JSON.stringify(e[n]));App.setOutputPanelContent('<div class="warning"><i class="icon-attention"></i> '+e.join(" ")+"</div>"),t()},man:function(){return"Outputs warning message."}}),Commands.register("pagechange",{requiredArguments:3,format:"<pre>pagechange [selector] [attribute] [value]</pre>",run:function(e,t){var n=e.shift(),r=e.shift(),i=e.join(" ");chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"pagechange",selector:n,attribute:r,value:i},function(e){t(e)})},man:function(){return'Set a new value to element\'s attribute<br />		Example:<br />		pagechange "input[name=\'name\']" value "firstname lastname"'}}),Commands.register("pageclick",{requiredArguments:1,format:"<pre>pageclick [selector]</pre>",run:function(e,t){var n=e.join(" ");chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"pageclick",selector:n},function(e){t(e)})},man:function(){return"Clicks an element on the page and returns the result immediately."}}),Commands.register("pageclicknavigate",{requiredArguments:1,format:"<pre>pageclicknavigate [selector]</pre>",run:function(e,t){var n=e.join(" ");chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"pageclicknavigate",selector:n},function(e){t(e)})},man:function(){return"Clicks an element on the page and waits till the page is updated (i.e. a new url is fully loaded)."}}),Commands.register("pagecontains",{requiredArguments:2,format:"<pre>pagecontains [selector] [text]</pre>",run:function(e,t){var n=e.shift(),r=e.join(" ");exec("pagequery "+n,function(e){if(e.elements&&e.elements>0){var i=0,s="",o=new RegExp(r,"g");for(var u=0;u<e.raw.length;u++)e.raw[u].indexOf(r)>=0&&(i+=1,s+="<pre>"+e.raw[u].replace(/</g,"&lt;").replace(o,'<b class="bordered">'+r+"</b>")+"</pre>");i===1?exec('success There is one element matching <b>"'+n+'"</b> selector and contains <b>"'+r+'"</b> text.<br />'+s):i>1?exec("success There are "+i+' elements matching <b>"'+n+'"</b> selector and contains <b>"'+r+'"</b> text.<br />'+s):exec("error There are element/s("+e.elements+') matching <b>"'+n+'"</b> but non of them contain <b>"'+r+'"</b> text.'),t(!0)}else exec('error There are no elements matching <b>"'+n+'"</b> selector.'),t(!1)})},man:function(){return'Checks if there is an element matching the provided selector and containing the provided text.<br />		Example:<br />		pagecontains "body > a" "my link"'}}),Commands.register("pageexpect",{requiredArguments:1,format:"<pre>pageexpect [selector]</pre>",run:function(e,t){var n=e.shift();exec("pagequery "+n,function(e){e.elements&&e.elements>0?(e.elements===1?exec('success There is one element matching <b>"'+n+'"</b> selector.'):exec("success There are "+e.elements+' elements matching <b>"'+n+'"</b> selector.'),t(!0)):(exec('error There are no elements matching <b>"'+n+'"</b> selector.'),t(!1))})},man:function(){return"Checks if there is an element matching the provided selector."}}),Commands.register("pagehighlight",{requiredArguments:1,format:"<pre>pagehighlight [selector]</pre>",run:function(e,t){var n=e.join(" ");chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"pagehighlight",selector:n},function(e){t(e)})},man:function(){return"Highlights element/elements on the page."}}),Commands.register("pagequery",{requiredArguments:1,format:"<pre>pagequery [selector]</pre>",run:function(e,t){var n=e.join(" ");chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"pagequery",selector:n},function(e){t(e)})},man:function(){return'Returns the number of matched elements and the elements in raw html string format.<br />		Example: {"elements": 1, "raw": ["&lt;a href="#">test&lt;/a>"]}'}}),Commands.register("load",{requiredArguments:1,format:"<pre>load [url]</pre>",run:function(e,t){var n=e[0];n.indexOf("http")==-1&&(n="http://"+n),chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"load",url:n},function(){exec("echo "+n+" is loaded"),t()})},man:function(){return"Loads another page in the current tab."}}),Commands.register("newtab",{requiredArguments:0,format:"<pre>newtab\nnewtab [url]</pre>",run:function(e,t){if(chrome&&chrome.runtime)if(e[0]){var n=e[0];n.indexOf("http")==-1&&n.indexOf("data:image")==-1&&(n="http://"+n),chrome.runtime.sendMessage({type:"newtab",url:n},function(){t()})}else chrome.runtime.sendMessage({type:"newtab"},t)},man:function(){return"Creates a new tab."}}),Commands.register("refresh",{requiredArguments:0,format:"<pre>refresh</pre>",run:function(e,t){chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"refresh"},function(){exec("echo current tab is refreshed"),t()})},man:function(){return"Refreshes the current tab's page"}}),Commands.register("screenshot",{requiredArguments:0,format:"<pre>screenshot</pre>",run:function(e,t){chrome&&chrome.runtime&&chrome.runtime.sendMessage({type:"screenshot"},function(e){e?exec("newtab "+e,function(){t()}):exec("error There was a problem creating the screenshot.",t)})},man:function(){return"Makes a screenshot of the current tab and loads it in a new tab."}})