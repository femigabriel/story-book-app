import { api } from "."
let route = api();


const RouteService = {
    getRouteShortDescription: (route:any)=> {
        return route? `${route?.from?.description.split(",")[0]} - ${route?.to?.description.split(",")[0]}` : null;
    },
    getAllRoutes: async ()=>  {
        try {
            let { data }:any = await route.get(`/routes`);

            // console.log({allKnownRoutes: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getOperatorRoutes: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/routes`);

            // console.log({allKnownRoutes: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
}

export default RouteService;