import axios from 'axios';

export const getGeolocation = async (latitude, longitude) => {
  const API_KEY = 'pk.e7aa635aad8d83faf4481c9eb9618a31'; // Replace with your LocationIQ API key
  try {
    const response = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json`);
    const locationData = response.data;
    return {
      latitude: locationData.lat,
      longitude: locationData.lon,
      address: locationData.display_name,
    };
  } catch (error) {
    console.error('Error fetching geolocation data from LocationIQ:', error);
    return null;
  }
};

// Example usage with predefined coordinates
const example = async () => {
  const geolocationData = await getGeolocation(40.730610, -73.935242); // Example: New York City coordinates
  console.log(geolocationData);
};

example();
