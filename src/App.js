import { GlobalStyle } from "./global.styles";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
//import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
//import { getCurrentUser } from "./utils/firebase/firebase.utils";
//import { setCurrentUser } from './store/user/user.action';
import { checkUserSession } from './store/user/user.action';
import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;

    /*Converting onAuthStateChanged listener to Promise*/
    //getCurrentUser().then((user => console.log(user)));
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
