import * as SQLite from 'expo-sqlite/legacy';


const db = SQLite.openDatabase('gallery.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, file_path TEXT, latitude REAL, longitude REAL, timestamp TEXT);'
    );
  });
};

export const insertImage = (title, description, filePath, latitude, longitude, timestamp) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO images (title, description, file_path, latitude, longitude, timestamp) VALUES (?, ?, ?, ?, ?, ?);',
      [title, description, filePath, latitude, longitude, timestamp],
      (_, result) => {
        console.log('Image inserted successfully:', result);
      },
      (_, error) => {
        console.error('Error inserting image:', error);
      }
    );
  });
};

export const fetchImages = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM images;',
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      },
      (_, error) => {
        console.error('Error fetching images:', error);
        callback([]); // Call the callback with an empty array on error
      }
    );
  });
};

export const updateImage = (id, title, description) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE images SET title = ?, description = ? WHERE id = ?;',
      [title, description, id],
      (_, result) => {
        console.log('Image updated successfully:', result);
      },
      (_, error) => {
        console.error('Error updating image:', error);
      }
    );
  });
};

export const deleteImage = (id) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM images WHERE id = ?;',
      [id],
      (_, result) => {
        console.log('Image deleted successfully:', result);
      },
      (_, error) => {
        console.error('Error deleting image:', error);
      }
    );
  });
};
