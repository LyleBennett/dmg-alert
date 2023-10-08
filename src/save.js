import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import updateAlertClassname from "./utils/updateAlertClassname";

export default function save({ attributes }) {
	const blockProps = updateAlertClassname(useBlockProps.save(), attributes);

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
