import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";

import metadata from "./block.json";

import updateAlertClassname from "./utils/updateAlertClassname";

export default function edit({ attributes, setAttributes }) {
	const blockProps = updateAlertClassname(useBlockProps(), attributes);

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={__("Alert Type")}
						value={attributes.alertType}
						options={metadata.attributes.alertType.enum.map((type) => ({
							label: type.replace(/^\w/, (c) => c.toUpperCase()),
							value: type,
						}))}
						onChange={(value) => {
							setAttributes({ alertType: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={["core/paragraph", "core/list"]}
				template={[
					["core/paragraph", { placeholder: "Add a title" }],
					["core/list", { placeholder: "Add a list" }],
				]}
			/>
		</div>
	);
}
