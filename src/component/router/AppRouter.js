import { createBrowserRouter } from "react-router-dom";
import { App } from "../../../App";
import { Cart } from "../navComp/Cart";
import { RestaurantCardsBody } from "../RestaurantCardsBody";
import { RestaurantMenuBody } from "../RestaurantMenuBody";
import { Contact } from "../navComp/Contact";

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<RestaurantCardsBody/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:'/restaurantMenu/:id',
                element:<RestaurantMenuBody/>
            }
        ]
    }
    
]);

export default AppRouter;
