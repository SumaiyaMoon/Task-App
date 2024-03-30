import {View, TextInput, Text} from 'react-native';
import rncStyles from 'rncstyles';

export default function SMTextArea({
  placeholder,
  onChangeText,
  label,
  value,
}: any) {
  return (
    <View style={rncStyles.pb1}>
      <Text style={[rncStyles.textPrimary, rncStyles.p1]}>{label}</Text>
      <TextInput
        style={[
          rncStyles.input,
          rncStyles.bgWhite,
          rncStyles.rounded,
          rncStyles.border1,
          rncStyles.borderPrimary,
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        multiline={true}
        verticalAlign="top"
        numberOfLines={4}
      />
    </View>
  );
}
