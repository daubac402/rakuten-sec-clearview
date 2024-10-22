$("label#ST2_Challenge").css({ "color": "#8cc63e", "font-size": "40px" });

// when document is ready
$(document).ready(() => {
	const asset_total_amount = parseInt($("#asset_total_amount").text().replace(/[^0-9-]/g, ""));
	const asset_total_amount_diff_text = $("#asset_total_amount_diff").text();
	const asset_total_amount_diff = parseInt(asset_total_amount_diff_text.replace(/[^0-9-]/g, ""));

	const asset_total_amount_diff_percentage = (asset_total_amount_diff / asset_total_amount) * 100;

	$("#asset_total_amount_diff").text(asset_total_amount_diff_text + " (" + asset_total_amount_diff_percentage.toFixed(2) + "%)");
});
