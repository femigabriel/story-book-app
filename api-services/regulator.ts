import { api } from "."
let route = api();

const RegulatorService = {
    getFleetCurrentTrip: async (fleetID:number)=>  {
        try {
            let { data }:any = await route.get(`/fleet/${fleetID}/current_trip`);

            // console.log({fleetCurrentTrip: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getAllFleetCurrentLocation: async ()=> {
        try {
            let { data }:any = await route.get(`/regulators/fleet/current_location`);

            // console.log({AllFleetLocation: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

    },
}

export default RegulatorService;