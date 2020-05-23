$(function () {
	var bg = "#0dc5c1";
	var fg = "#ffffffff";
	var fgrgb = "255, 255, 255";

	if (Modernizr.inputtypes.color) {
		$("html").addClass("colorpicker");
	}

	$("input[type=color]").on("change", function () {

		// Select the chosen color
		var color = $(this).val();

		if ($(this).attr("id") === "bg-color") {

			$("#bg-styles").remove();

			var styles = {
				'body,.load2 .loader:before,.load2 .loader:after': {
					'background-color': color
				},
				'.load3 .loader:after': {
					'background-color': color
				}
			};

			addCSS(styles, "bg-styles", false);

			var load2CSS = $("#load2").find("textarea.css").val();
			var load3CSS = $("#load3").find("textarea.css").val();

			//change BG in loader1 and loader2
			var regex = new RegExp(bg, "g");

			load2CSS = load2CSS.replace(regex, color);

			$("#load2").find("textarea.css").val(load2CSS);

			load3CSS = load3CSS.replace(regex, color);
			console.log(load3CSS)

			$("#load3").find("textarea.css").val(load3CSS);

			bg = color;

			console.log(load3CSS)

		} else if ($(this).attr("id") === "fg-color") {
			$("#fg-styles").remove();

			var styles = {
				'body': {
					'color': color
				},
				'a.twitter img': {
					'border': '1px solid' + color
				},
				'.load-container': {
					'border': '1px solid ' + 'rgba(' + convertHex(color) + ',0.2)'
				},
				'.load1 .loader,.load1 .loader:before,.load1 .loader:after': {
					'color': color,
					'background-color': color
				},
				'.load2 .loader': {
					'color': color,
					'box-shadow': 'inset 0 0 0 1em ' + color
				},
				'.load3 .loader:before': {
					'background-color': color
				},
				'.load3 .loader': {
					'background': 'linear-gradient(to right, ' + color + ' 10%, rgba(' + convertHex(color) + ', 0) 42%)'
				},
				'.load4 .loader': {
					'color': color
				},
				'.load6 .loader': {
					'color': color
				},
				'.load7 .loader': {
					'color': color
				},
				'.load8 .loader': {
					'border-top': '1.1em solid rgba(' + convertHex(color) + ', 0.2)',
					'border-right': '1.1em solid rgba(' + convertHex(color) + ', 0.2)',
					'border-bottom': '1.1em solid rgba(' + convertHex(color) + ', 0.2)',
					'border-left': '1.1em solid ' + color
				}
			};

			//replace here
			var loadCSS;
			var regex2 = new RegExp(fg, "g");
			var regex3 = new RegExp(fgrgb, "g");

			var load5CSS;
			$(".source").each(function (i) {

				loadCSS = $(this).find("textarea.css").val();

				loadCSS = loadCSS.replace(regex2, color).replace(regex3, convertHex(color));

				$(this).find("textarea.css").val(loadCSS);

				if (i === 4) {
					load5CSS = loadCSS.replace(".loader", ".load5 .loader");
				}

			});

			fg = color;
			fgrgb = convertHex(color);
			//add loader5 css into head

			addCSS(styles, "fg-styles", load5CSS);
		}
	});

	$(".load-container a").on("click", function () {
		var hash = $(this).attr("href");
		var clas = "\\" + hash.replace("#", ".") + " ";

		var re = new RegExp(clas, "g");

		var css = $(hash).find(".css").val().replace(re, "");

		$(hash).find(".css").val(css);
		$(".overlay," + hash).removeClass("hidden");

		return false;
	});

	$(".overlay").on("click", function () {
		$(".source,.overlay").addClass("hidden");

	});

	function addCSS(styles, id, extra) {
		var css = "";
		for (var k in styles) {
			css += k + JSON.stringify(styles[k]).replace(/"/g, "").replace(/,/g, ";").replace(/(\(.*?);(.*?\))/g, function (v) { return v.replace(/;/g, ","); });
		}
		if (extra) {
			css += extra;
		}
		$("<style>").prop({ "type": "text/css", "id": id }).html(css).appendTo("head");
	}
	function convertHex(hex) {
		hex = hex.replace('#', '');
		r = parseInt(hex.substring(0, 2), 16);
		g = parseInt(hex.substring(2, 4), 16);
		b = parseInt(hex.substring(4, 6), 16);

		result = r + ',' + g + ',' + b;
		return result;
	}

	var hasHovered = false;
	$(".coffee").on("mouseenter focus", function () {
		if (hasHovered === false) {
			ga('send', 'event', 'Coffee', 'hover', 'Buy me a coffee');
			hasHovered = true;
		}
	});
});
