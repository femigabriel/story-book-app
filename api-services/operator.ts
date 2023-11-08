import { api } from "."
let route = api();

const OperatorService = {
    createNew: async (formData:Operator) => {
        try {
            let { data }:any = await route.post('/operators', formData);

            // console.log({newOperator: data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }
    },
    getAll: async ()=>  {
        try {
            let { data }:any = await route.get('/operators');

            // console.log({allOperators: data?.data});

            return data?.data as Operator[];
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getPersonnel: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/personnel`);

            // console.log({allOperatorPersonnel: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getRoutes: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/routes`);

            // console.log({allOperatorRoutes: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    
    getFleet: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/fleet`);

            // console.log({allOperatorFleet: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    createFleet: async (opID:number, formData:CreateFleetForm)=>  {
        try {
            let { data }:any = await route.post(`/operators/${opID}/fleet`, formData);

            // console.log({createdFleet: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getDrivers: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/drivers`);

            // console.log({allOperatorDrivers: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getDailySchedule: async (opID:number, date:number=1697587200)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/fleet/daily_schedule?date=${date}`);

            // console.log({fleetDailySchedule: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getFleetCurrentTrip: async (fleetID:number)=>  {
        try {
            let { data }:any = await route.get(`/fleet/${fleetID}/current_trip`);

            // console.log({fleetCurrentTrip: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getFleetCurrentLocation: async (opID:number)=> {
        try {
            let { data }:any = await route.get(`/operators/${opID}/fleet/current_location`);

            // console.log({fleetCurrentLocation: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

    },
}

export default OperatorService;