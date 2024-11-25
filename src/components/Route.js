import React from 'react';
import Body from './Body';
import Cart from './Cart';
import ArticleDetails from './ArticleDetails';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Route = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
        },
        
        {
            path : "/articles/:articleId",
            element : <ArticleDetails />
        },
        {
            path : "/cart",
            element : <Cart/>
        },
    ]);

    return (
        <RouterProvider router={appRouter} />
    );
};

export default Route;
