import {Text, TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';

export default function SMButton({label, onPress, color}: any) {
  return (
    <TouchableOpacity
      style={
        color == 'info'
          ? rncStyles.btnInfo
          : color == 'error'
          ? rncStyles.btnDanger
          : rncStyles.btnPrimary
      }
      onPress={onPress}>
      <Text style={[rncStyles.textWhite, rncStyles.textCenter, rncStyles.fs5]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
