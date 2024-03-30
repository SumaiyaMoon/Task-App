import Icon from 'react-native-vector-icons/MaterialIcons';
import {_dark} from 'rncstyles';

export default function SMIcon({name, size, color}: any) {
  return (
    <>
      <Icon name={name} size={size} color={color ?? _dark} />
    </>
  );
}
