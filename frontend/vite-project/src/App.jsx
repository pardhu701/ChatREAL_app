
//import Spline from "@splinetool/react-spline"
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import SettingPage from "./pages/SettingPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import { useEffect} from "react"
import { Navd } from "./components/Navd.jsx"
import { useAuthStore  } from "./lib/useAuthStore.js"
//import BlurText from "./components/Splash.jsx";
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"
import Intro from "./pages/Intro.jsx"

//import Navbar from "./components/Navbar.jsx"

const App = () => {
// this state managager is used to manage the authentication state of the user
const { authuser, checkauth , isCheckingAuth} = useAuthStore();


//trigger the cheackauth to very wheather the user is logged in or not and make authuser to not null and isCheckingAuth to false
useEffect(() => {
    checkauth();
  }, [checkauth])

console.log(authuser);
console.log("just")



if(isCheckingAuth && !authuser)  {
  <div className="flex justify-center items-center h-screen">
  <Loader className="animate-spin text-4xl" />
  </div>
}


  return (

    <div>
     

      <main className="app">
        {/* <div className="background-container">
          <Spline className="absolute z-0 top-0 left-0 w-full h-full"
            scene="https://prod.spline.design/E5XiycMIxHhdgceY/scene.splinecode"
          //scene="https://prod.spline.design/5NlBAl3m59BJTV1z/scene.splinecode"
          />
        </div> */}


        <div className="content">
          <Navd />
          <Routes>
          
         <Route path="/" element={(authuser===null)?<Navigate to="/Intro" />: <HomePage />   } />
         <Route path="/LoginPage" element={!authuser?<LoginPage />:<Navigate to="/" />} />
        <Route path="/SignUpPage" element={!authuser?<SignUpPage />: <Navigate to="/" />} />
        <Route path="/Intro" element={<Intro />}/>
        <Route path="/SettingPage" element={<SettingPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        

        
          </Routes>

          <Toaster />

        </div>

      </main>








    </div>

  )
}

export default App