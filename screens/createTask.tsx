import {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import rncStyles from 'rncstyles';
import SMInput from '../components/SMInput';
import {addData} from '../config/firebasemethods';
import SMDatePicker from '../components/SMDatePicker';
import SMTextArea from '../components/SMTextArea';
import SMButton from '../components/SMButton';

export default function CreateTask({navigation}: any) {
  const [model, setModel] = useState<any>({});

  const saveTask = () => {
    addData('task', model)
      .then(() => {
        ToastAndroid.show('Task saved', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={rncStyles.h100}>
        <ScrollView style={rncStyles.py2}>
          <View style={[rncStyles.py1]}>
            <SMInput
              placeholder="Enter Title"
              label="Title"
              value={model.title}
              onChangeText={(e: any) => {
                setModel({...model, title: e});
              }}
            />
          </View>
          <View style={[rncStyles.py1]}>
            <SMTextArea
              placeholder="Enter Task"
              label="Task"
              value={model.task}
              onChangeText={(e: any) => {
                setModel({...model, task: e});
              }}
            />
          </View>
          <View style={[rncStyles.py1]}>
            <SMDatePicker
              label="Select Due Date"
              onDateChange={(selectedDate: Date) => {
                setModel({...model, date: selectedDate});
              }}
            />
          </View>
          <View>
            <SMButton onPress={saveTask} label="Save Task" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
