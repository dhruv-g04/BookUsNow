export const fetchRecommendedEvents = async () => {
    try {
      const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
      const data = await response.json();
      return data.events; // Extract the events array from the response data
    } catch (error) {
      console.error('Error fetching recommended events:', error);
      return [];
    }
  };
  
export const fetchUpcomingEvents = async (pageNumber) => {
  try {
      const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`);
      const data = await response.json();
      return data.events; // Extract the events array from the response data
  } catch (error) {
      console.error('Error fetching upcoming events:', error);
      return [];
  }
};

