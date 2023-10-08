export default function updateAlertClassname(blockProps, attributes) {
	blockProps.className = `dmg-alert dmg-${attributes.alertType}`;
	return blockProps;
}
