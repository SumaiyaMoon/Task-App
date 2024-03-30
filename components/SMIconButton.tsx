import {TouchableOpacity} from 'react-native';
import rncStyles, {_dark} from 'rncstyles';
import SMIcon from './SMIcon';

export default function SMIconButton({onPress, name}: any) {
  return (
    <>
      <TouchableOpacity style={rncStyles.btnRounded} onPress={onPress}>
        <SMIcon size={30} name={name} />
      </TouchableOpacity>
    </>
  );
}
