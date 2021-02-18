import React, { useState } from "react";
import { Button, Pressable, View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
 
const Example = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
 
  return (
    <View>
      <View>
        <Pressable onPress={showTimepicker}>
          <Text style={{color:'gray', fontSize:9}}>날짜를 선택해주세요.</Text>
        </Pressable>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
 
export default Example;