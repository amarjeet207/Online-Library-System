import Home from "./Components/Home.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import NotFound from "./Components/NotFound.jsx";
import BrowseBooks from "./Components/BrowseBooks.jsx";
import AddBook from "./Components/AddBook.jsx"
import BookDetails from "./Components/BookDetails.jsx";
import BooksCategory from "./Components/BooksCategory.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/books',
      element:
        <BrowseBooks/>

    },
    {
      path:'/addBook',
      element: <AddBook/>
    },
    {
      path:'/bookDetails/:id',
      element:<BookDetails/>
    },
    {
      path:'/books/:category',
      element:<BooksCategory/>
    },
    {
      path:'*',
      element:<NotFound/>
    },
    
  ])

  return (
    <Provider store={store}>
    <div className='box-border'>
      <RouterProvider router={router}/>
    </div>
    </Provider>
  );
}
export default App;
