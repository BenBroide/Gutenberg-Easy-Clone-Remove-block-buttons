import {registerPlugin} from '@wordpress/plugins';
import {select, dispatch} from '@wordpress/data';
import {BlockControls} from '@wordpress/block-editor';
import {ToolbarButton, ToolbarGroup} from '@wordpress/components';
import {trash, group} from '@wordpress/icons';

const CloneButton = () => (<ToolbarButton
	icon={group}
	onClick={cloneSelectedBlocks}
	label={'Clone Block'}
/>)

const DeleteButton = () =>(<ToolbarButton
	icon={trash}
	label={'Remove Block'}
	onClick={deleteSelectedBlocks}
/>)

const deleteSelectedBlocks = () => {
	const {removeBlocks} = dispatch('core/block-editor');
	const block_ids = select('core/block-editor').getSelectedBlockClientIds();
	removeBlocks(block_ids);
};

const cloneSelectedBlocks = () => {
	const block_ids = select('core/block-editor').getSelectedBlockClientIds();
	dispatch('core/block-editor').duplicateBlocks(block_ids)
};

const CustomButtonsToolbar = () => {

	return (
		<BlockControls>
			<ToolbarGroup>
				<div style={{border: '4px black solid'}}>
					<CloneButton/>
					<DeleteButton/>
				</div>
			</ToolbarGroup>
		</BlockControls>
	);
}

registerPlugin(
	'custom-buttons-toolbar-mods',
	{
		render: CustomButtonsToolbar
	}
);
