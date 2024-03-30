import database from '@react-native-firebase/database';

export const addData = (nodeName: string, body: any) => {
  return new Promise((resolve, reject) => {
    if (body.date instanceof Date) {
      body.date = body.date.toISOString().split('T')[0]; // Extract only the date part
    }

    body.id = database().ref(nodeName).push().key;
    database()
      .ref(`${nodeName}/${body.id}`)
      .set(body)
      .then(() => {
        resolve(body);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getData = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id ? id : ''}`)
      .once('value', (data: any) => {
        if (data.exists) {
          console.log(data.val);
          resolve(Object.values(data.val()));
        } else {
          reject('No Data Found');
        }
      });
  });
};

export const deleteData = (nodeName: string, id: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id ? id : ''}`)
      .remove()
      .then(() => {
        resolve('Data Delete Successfully');
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updateData = (nodeName: string, id: any, body: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id}`)
      .set(body)
      .then(() => {
        resolve(body);
      })
      .catch(err => {
        reject(err);
      });
  });
};
