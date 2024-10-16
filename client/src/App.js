import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./views/Signup";
import AdminPage from "./views/Admin";
import Login from "./views/Login";
import ThankYouPage from "./views/ThankYouPage";
import { NextUIProvider } from "@nextui-org/react";
import Jobs from "./views/Jobs";
import VideoRecorder from "./components/VideoRecorder";
import NewInterview from "./views/NewInterview";
import LandingTest from "./components/LandingTest";
import VerificationPage from "./views/Verification";
import VerifyEmailPrompt from "./views/VerifyEmail";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import SidebarDemo from "./views/SidebarDemo";
import UploadResume from "./views/UploadResume";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import { ToastContainer } from 'react-toastify';
import ReachOut from "./components/ReachOut";
import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
    <AuthProvider>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            {/* Guest Routes (non-authenticated pages) */}
            <Route
              path="/"
              element={
                <GuestRoute>
                  <LandingTest />
                </GuestRoute>
              }
            />
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <GuestRoute>
                  <SignupPage />
                </GuestRoute>
              }
            />
            <Route
              path="/ForgetPassword"
              element={
                <GuestRoute>
                  <ForgotPassword />
                </GuestRoute>
              }
            />

            <Route
              path="/reach-out"
              element={
                <GuestRoute>
                  <ReachOut />
                </GuestRoute>
              }
            />
           
            {/* Protected Routes (authenticated pages) */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jobs"
              element={
                <ProtectedRoute>
                  <Jobs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/new-interview"
              element={
                <ProtectedRoute>
                  <NewInterview />
                </ProtectedRoute>
              }
            />
            <Route
              path="/thank-you"
              element={
                <ProtectedRoute>
                  <ThankYouPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <SidebarDemo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/uploadResume"
              element={
                <ProtectedRoute>
                  <UploadResume />
                </ProtectedRoute>
              }
            />
           
            {/* Routes not requiring protection */}
            <Route path="/test" element={<VideoRecorder />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/verify-email-prompt" element={<VerifyEmailPrompt />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 4000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />{" "}
      <ToastContainer />
    </AuthProvider>
  );
}
 
export default App;
 
 
 
/*import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Demo from './components/auth/ReactLogin';
import Home from "./views/Home";
import { AuthProvider } from "./context/AuthContext";
// import LandingPage from "./views/Landing";
import SignupPage from "./views/Signup";
import AdminPage from "./views/Admin";
import Login from "./views/Login";
// import InterviewPage from "./views/Interview";
import ThankYouPage from "./views/ThankYouPage";
import { NextUIProvider } from "@nextui-org/react";
import Jobs from "./views/Jobs";
import VideoRecorder from "./components/VideoRecorder";
import NewInterview from "./views/NewInterview";
import LandingPage from "./components/Test";
import LandingTest from "./components/LandingTest";
import VerificationPage from "./views/Verification";
import VerifyEmailPrompt from "./views/VerifyEmail";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import SidebarDemo from "./views/SidebarDemo";
import UploadResume from "./views/UploadResume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InterviewPreview from "./components/interview/InterviewPreview";
import { Toaster } from "react-hot-toast";
 
function App() {
  return (
    <AuthProvider>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingTest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/test" element={<VideoRecorder />} />
            {/* <Route path="/login" element={<Demo />} /> }
            <Route path="/home" element={<Home />} />
            {/* <Route path="/interview" element={<InterviewPage />} /> }
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/interview-preview" element={<InterviewPreview />} />
            <Route path="/new-interview" element={<NewInterview />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route
              path="/verify-email-prompt"
              element={<VerifyEmailPrompt />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<SidebarDemo />} />
            <Route path="/uploadResume" element={<UploadResume />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 2000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />{" "}
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8"> }
 
      { </div>
    </div> }
    </AuthProvider>
  );
}
 
export default App;
*/