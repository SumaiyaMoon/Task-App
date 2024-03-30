// import React, {useState} from 'react';
// import {Text} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import SMButton from './SMButton';

// export default function SMDatePicker({label, onChange}: any) {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <SMButton
//         color="info"
//         label={label}
//         onPress={() => {
//           setOpen(true);
//         }}
//       />
//       <DatePicker
//         modal
//         open={open}
//         date={date}
//         onConfirm={date => {
//           setOpen(false);
//           setDate(date);
//           onChange(date);
//         }}
//         onCancel={() => {
//           handleClose();
//         }}
//       />
//     </>
//   );
// }

import React, {useState} from 'react';
import {Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import SMButton from './SMButton';

export default function SMDatePicker({label, onDateChange}: any) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    onDateChange(newDate); // Pass the selected date to the parent component
    setOpen(false);
  };

  return (
    <>
      <SMButton
        color="info"
        label={label}
        onPress={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange}
        onCancel={handleClose}
      />
    </>
  );
}
