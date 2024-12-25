$(document).ready(() => {
	function updateAssetTotalAmountDiff() {
		console.log("updateAssetTotalAmountDiff...");

		const assetTotalAmountElement = $("#asset_total_amount");
		const assetTotalAmountDiffElement = $("#asset_total_amount_diff");

		if (assetTotalAmountElement.length && assetTotalAmountDiffElement.length) {
			const asset_total_amount = parseInt(assetTotalAmountElement.text().replace(/[^0-9-]/g, ""));
			const asset_total_amount_diff_text = assetTotalAmountDiffElement.text();
			const asset_total_amount_diff = parseInt(asset_total_amount_diff_text.replace(/[^0-9-]/g, ""));

			// Check if both values are valid numbers
			if (!isNaN(asset_total_amount) && !isNaN(asset_total_amount_diff)) {
				const asset_total_amount_diff_percentage = (asset_total_amount_diff / asset_total_amount) * 100;
				assetTotalAmountDiffElement.text(
					asset_total_amount_diff_text + " (" + asset_total_amount_diff_percentage.toFixed(2) + "%)"
				);

				// Stop the interval once the values are valid and the update is complete
				clearInterval(intervalId);
				clearTimeout(timeoutId); // Clear the timeout as well
				console.log("updateAssetTotalAmountDiff completed, interval stopped.");
			}
		}
	}

	// Run the function repeatedly every 100ms
	const intervalId = setInterval(updateAssetTotalAmountDiff, 100);

	// Stop the interval after 10 seconds (10000ms) if the values are still not valid
	const timeoutId = setTimeout(() => {
		clearInterval(intervalId); // Stop the interval
		console.warn("updateAssetTotalAmountDiff stopped after 10 seconds without valid data.");
	}, 10000);
});
