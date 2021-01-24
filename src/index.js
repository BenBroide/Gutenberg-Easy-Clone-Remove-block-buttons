import { compose, ifCondition } from '@wordpress/compose';
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton,AlignmentToolbar } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

const MyCustomButton = props => {
	console.log(props)
	return <RichTextToolbarButton
		icon='editor-code'
		title='Test Button'
		onClick={ () => {
			console.log( 'toggle format' );
		} }
	/>
};

if(wp.hooks) {
	const {addFilter} = wp.hooks;
	const {Fragment} = wp.element;
	const {InspectorControls,BlockControls} = wp.blockEditor;
	const {createHigherOrderComponent} = wp.compose;
	const {ToggleControl, PanelBody} = wp.components;

	/**
	 * Add mobile visibility controls on Advanced Block Panel.
	 *
	 * @param {function} BlockEdit Block edit component.
	 *
	 * @return {function} BlockEdit Modified block edit component.
	 */
	const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
		return (props) => {

			const {
				name,
				attributes,
				setAttributes,
				isSelected,
			} = props;

			// const {
			// 	someAttr,
			// } = attributes;

			return (
				<Fragment>
					<BlockEdit {...props} >
						<BlockControls>
							<MyCustomButton/>
						</BlockControls>
					</BlockEdit>

				</Fragment>
			);
		};
	}, 'withAdvancedControls');



	addFilter(
		'editor.BlockEdit',
		'editorskit/custom-advanced-control',
		withAdvancedControls
	);
}

