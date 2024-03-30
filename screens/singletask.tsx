import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import rncStyles from 'rncstyles';
import SMButton from '../components/SMButton';
import {deleteData, updateData} from '../config/firebasemethods';

export default function SingleTask({navigation, route}: any) {
  const obj = route.params;

  const delTask = () => {
    deleteData('task', obj.id)
      .then(res => {
        ToastAndroid.show('Task deleted successfully', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const markAsDone = () => {
    updateData('task', obj.id, {...obj, isDone: true})
      .then(() => {
        ToastAndroid.show('Task Marked As Done', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgWhite, rncStyles.p2]}>
        <ScrollView>
          <Text
            style={[rncStyles.fs2, rncStyles.textbold, rncStyles.textBlack]}>
            Title: {obj.title}
          </Text>
          <Text style={[rncStyles.textDanger]}>Due Date: {obj.date}</Text>
          <Text style={[rncStyles.fs3, rncStyles.mt2]}>Task: {obj.task}</Text>
          <SMButton onPress={markAsDone} label="Mark as Done" />
          <SMButton onPress={delTask} label="Delete Task" />
        </ScrollView>
      </View>
    </>
  );
}
