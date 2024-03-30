import {View, Text, ScrollView} from 'react-native';
import {useState} from 'react';
import {getData} from '../config/firebasemethods';
import {useEffect} from 'react';
import rncStyles from 'rncstyles';
import SMInput from '../components/SMInput';
import SMIconButton from '../components/SMIconButton';
import SMIcon from '../components/SMIcon';

export default function Task({navigation}: any) {
  const [taskList, setTaskList] = useState<any>([]);
  const [filterList, setFilterList] = useState<any>([]);

  const get = () => {
    getData('task')
      .then((res: any) => {
        setTaskList([...res]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      get();
      // Do something
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.p2]}>
        <SMInput
          onChangeText={(e: any) => {
            let arr: any = taskList.filter((x: any) => {
              if (x.title.toLowerCase().includes(e.toLowerCase())) {
                return x;
              } else if (x.task.toLowerCase().includes(e.toLowerCase())) {
                return x;
              }
            });
            setFilterList([...arr]);
          }}
          placeholder="Search 🔍"
        />
        <ScrollView>
          {filterList.length > 0
            ? filterList.map((x: any, i: any) => (
                <View
                  style={[
                    rncStyles.bgWhite,
                    rncStyles.my1,
                    rncStyles.p2,
                    rncStyles.rounded,
                    rncStyles.shadow2,
                  ]}
                  key={i}>
                  <View>
                    <Text style={[rncStyles.fs4, rncStyles.textbold]}>
                      {x.title}
                    </Text>
                    <Text numberOfLines={2} style={[rncStyles.fs6]}>
                      {x.task}
                    </Text>
                    <View style={[rncStyles.flexRow, rncStyles.pt1]}>
                      <SMIconButton
                        onPress={() => {
                          navigation.navigate('SingleTask', x);
                        }}
                        name="info"
                      />
                      {x.isDone && <SMIcon name="check" size={30} />}
                    </View>
                  </View>
                </View>
              ))
            : taskList.map((x: any, i: any) => (
                <View
                  style={[
                    rncStyles.bgWhite,
                    rncStyles.my1,
                    rncStyles.p2,
                    rncStyles.rounded,
                    rncStyles.shadow2,
                  ]}
                  key={i}>
                  <View>
                    <Text style={[rncStyles.fs4, rncStyles.textbold]}>
                      {x.title}
                    </Text>
                    <Text numberOfLines={2} style={[rncStyles.fs6]}>
                      {x.task}
                    </Text>
                    <View style={[rncStyles.flexRow, rncStyles.pt1]}>
                      <SMIconButton
                        onPress={() => {
                          navigation.navigate('SingleTask', x);
                        }}
                        name="info"
                      />
                      {x.isDone && <SMIcon name="check" size={30} />}
                    </View>
                  </View>
                </View>
              ))}
        </ScrollView>
      </View>
    </>
  );
}
