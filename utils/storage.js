import * as FileSystem from 'expo-file-system';

export const saveFile = async (uri) => {
  const fileName = uri.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;
  await FileSystem.moveAsync({ from: uri, to: newPath });
  return newPath;
};
