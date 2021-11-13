var axios = require("axios").default;

const URL ='https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng'


export const getPlaceData = async (type,lat,lng) => {
    try {
        const { data: {data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,{
          
          params: {
            latitude: lat,
            longitude: lng,
            lang: 'en_US',
            
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'd06f4b67c1msh9412b7f224d916ap1281a9jsn16ed0994d897'
          }
        }
        )
        return data
    } catch (error) {
        console.log(error)
        
    }
};