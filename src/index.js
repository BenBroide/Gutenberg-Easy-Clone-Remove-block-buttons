import { registerPlugin } from '@wordpress/plugins';
import {
	BlockControls,
	ToolbarButton,
	ToolbarGroup
} from '@wordpress/components';
import { check } from '@wordpress/icons';

const BenNYCToolbar = ( props ) => {
	const doSomething = () => {};

	return (
		<ToolbarGroup>
			<ToolbarButton
				icon={ check }
				onClick={ doSomething }
			/>
		</ToolbarGroup>
	);
}

registerPlugin(
	'bennyc-toolbar-mods',
	{
		render: () => (
			<BlockControls>
				<BenNYCToolbar />
			</BlockControls>
		)
	}
);
