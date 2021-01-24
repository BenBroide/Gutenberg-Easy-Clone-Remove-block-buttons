import { compose, ifCondition } from '@wordpress/compose';
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

const MyCustomButton = props => {
	console.log(props)
	return <RichTextToolbarButton
		icon='editor-code'
		title='Sample output'
		onClick={ () => {
			console.log( 'toggle format' );
		} }
	/>
};

const ConditionalButton = compose(
	withSelect( function( select ) {
		return {
			selectedBlock: wp.data.select( 'core/block-editor' ).getSelectedBlock
		}
	} ),
	// ifCondition( function( props ) {
	// 	console.log(props.selectedBlock.name)
	// 	return (
	// 		props.selectedBlock &&
	// 		props.selectedBlock.name === 'core/paragraph'
	// 	);
	// } )
)( MyCustomButton );
document.addEventListener("DOMContentLoaded", function(event){
	console.log('Yo')
	registerFormatType(
		'my-custom-format/sample-output', {
			title: 'Sample output',
			tagName: 'samp',
			className: null,
			edit: ConditionalButton,
		}
	);
})
