import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

const Field = (props) => {

	const sdk = useSDK();
	const window = sdk.window;

	window.startAutoResizer();

	return <RichTextEditor 
				initialValue={sdk.field.getValue()}
				setValue={(value) => sdk.field.setValue(value)}  
			/>;
};

export default Field;