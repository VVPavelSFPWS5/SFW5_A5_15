function handleButton() {
	$.getJSON('https://api.myjson.com/bins/jcmhn', reciveText);
}
function reciveText(data) {
	let formatText = "";
	let var1 = $("input")[0].value
	let var2 = $("input")[1].value
	let var3 = $("input")[2].value
	let var4 = $("input")[3].value
	let var5 = $("input")[4].value
	let var6 = $("input")[5].value
	let var7 = $("input")[6].value

	data["text"].forEach(function(item,index) {
		item = item.replace("{var1}", var1);
		item = item.replace("{var2}", var2);
		item = item.replace("{var3}", var3);
		item = item.replace("{var4}", var4);
		item = item.replace("{var5}", var5);
		item = item.replace("{var6}", var6);
		item = item.replace("{speach}", var7);
		formatText = formatText + item + "<br>";

	}
	);
	
	$("div#result").html(formatText)
	console.log(formatText);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
