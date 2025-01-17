import * as SQLite from 'expo-sqlite';

// Initialize and create database with async/await methods
const openDatabase = async () => {
  try {
    return await SQLite.openDatabaseAsync('galleryapp.db');
  } catch (error) {
    console.error('Error opening database:', error);
    throw error;
  }
};

// Create a new table if it does not exist
export const createTable = async () => {
  const db = await openDatabase();
  try {
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        file_path TEXT,
        latitude REAL,
        longitude REAL,
        timestamp TEXT
      );
    `);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

// Insert an image into the database
export const insertImage = async (title, description, filePath, latitude, longitude, timestamp) => {
  const db = await openDatabase();
  try {
    const result = await db.runAsync(
      'INSERT INTO images (title, description, file_path, latitude, longitude, timestamp) VALUES (?, ?, ?, ?, ?, ?);',
      [title, description, filePath, latitude, longitude, timestamp]
    );
    console.log('Image inserted successfully:', result.lastInsertRowId);
  } catch (error) {
    console.error('Error inserting image:', error);
  }
};

// Fetch all images from the database
export const fetchImages = async (callback) => {
  const db = await openDatabase();
  try {
    const rows = await db.getAllAsync('SELECT * FROM images;');
    callback(rows);
  } catch (error) {
    console.error('Error fetching images:', error);
    callback([]);  // Callback with an empty array on error
  }
};

// Update an image in the database
export const updateImage = async (id, title, description) => {
  const db = await openDatabase();
  try {
    await db.runAsync(
      'UPDATE images SET title = ?, description = ? WHERE id = ?;',
      [title, description, id]
    );
    console.log('Image updated successfully');
  } catch (error) {
    console.error('Error updating image:', error);
  }
};

// Delete an image from the database
export const deleteImage = async (id) => {
  const db = await openDatabase();
  try {
    await db.runAsync(
      'DELETE FROM images WHERE id = ?;',
      [id]
    );
    console.log('Image deleted successfully');
  } catch (error) {
    console.error('Error deleting image:', error);
  }
};
