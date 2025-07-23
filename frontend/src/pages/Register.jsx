// // // // import React, { useState } from 'react';
// // // // import { useAuth } from '../hooks/useAuth';
// // // // import { useNavigate, Link } from 'react-router-dom';

// // // // const Register = () => {
// // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // // //   const [error, setError] = useState('');
// // // //   const { register } = useAuth();
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await register(formData.name, formData.email, formData.password);
// // // //       navigate('/');
// // // //     } catch (err) {
// // // //       setError(err.response?.data?.message || 'Failed to register');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
// // // //       <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
// // // //       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-4">
// // // //           <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
// // // //           <input type="text" name="name" onChange={handleChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
// // // //           <input type="email" name="email" onChange={handleChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
// // // //         </div>
// // // //         <div className="mb-6">
// // // //           <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
// // // //           <input type="password" name="password" onChange={handleChange} className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
// // // //         </div>
// // // //         <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Register</button>
// // // //       </form>
// // // //       <p className="text-center mt-4">
// // // //         Already have an account? <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">Login</Link>
// // // //       </p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;

// // // import React, { useState } from 'react';
// // // import { useAuth } from '../hooks/useAuth';
// // // import { useNavigate, Link } from 'react-router-dom';

// // // const Register = () => {
// // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // //   const [error, setError] = useState('');
// // //   const { register } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await register(formData.name, formData.email, formData.password);
// // //       navigate('/');
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || 'Failed to register');
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto mt-10 p-8 bg-gray-900/50 border border-white/10 rounded-xl shadow-2xl backdrop-blur-sm">
// // //       <h2 className="text-3xl font-bold mb-6 text-center text-white">Create Account</h2>
// // //        {error && <p className="bg-red-500/30 text-red-300 p-3 rounded-lg text-center mb-4">{error}</p>}
// // //       <form onSubmit={handleSubmit} className="space-y-6">
// // //         <div>
// // //           <label className="block text-gray-300 mb-2 text-sm">Name</label>
// // //           <input type="text" name="name" onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// // //         </div>
// // //         <div>
// // //           <label className="block text-gray-300 mb-2 text-sm">Email</label>
// // //           <input type="email" name="email" onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// // //         </div>
// // //         <div>
// // //           <label className="block text-gray-300 mb-2 text-sm">Password</label>
// // //           <input type="password" name="password" onChange={handleChange} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// // //         </div>
// // //         <button 
// // //           type="submit" 
// // //           className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white"
// // //         >
// // //           <span className="w-full relative px-5 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
// // //             Register
// // //           </span>
// // //         </button>
// // //       </form>
// // //       <p className="text-center text-sm text-gray-400 mt-6">
// // //         Already have an account? <Link to="/login" className="font-semibold text-purple-400 hover:text-purple-300">Login</Link>
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default Register;

// // import React, { useState } from 'react';
// // import { useAuth } from '../hooks/useAuth';
// // import { useNavigate, Link } from 'react-router-dom';

// // const Register = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// //   const [error, setError] = useState('');
// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await register(formData.name, formData.email, formData.password);
// //       navigate('/');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to register');
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
// //       <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Create Account</h2>
// //        {error && <p className="bg-red-100 dark:bg-red-500/30 text-red-700 dark:text-red-300 p-3 rounded-lg text-center mb-4">{error}</p>}
// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         <div>
// //           <label className="block text-slate-600 dark:text-slate-300 mb-2 text-sm">Name</label>
// //           <input type="text" name="name" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// //         </div>
// //         <div>
// //           <label className="block text-slate-600 dark:text-slate-300 mb-2 text-sm">Email</label>
// //           <input type="email" name="email" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// //         </div>
// //         <div>
// //           <label className="block text-slate-600 dark:text-slate-300 mb-2 text-sm">Password</label>
// //           <input type="password" name="password" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// //         </div>
// //         <button 
// //           type="submit" 
// //           className="w-full p-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500"
// //         >
// //           <div className="bg-slate-800 text-white font-semibold w-full px-5 py-3 rounded-md hover:bg-opacity-90 transition-all">
// //             Register
// //           </div>
// //         </button>
// //       </form>
// //       <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
// //         Already have an account? <Link to="/login" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline">Login</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import { useNavigate, Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(formData.name, formData.email, formData.password);
//       navigate('/');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to register');
//     }
//   };

//   return (
//     // Card: White in light, Glass in dark
//     <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
//       <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Create Account</h2>
//        {error && <p className="bg-red-100 dark:bg-red-500/30 text-red-700 dark:text-red-300 p-3 rounded-lg text-center mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Name</label>
//           <input type="text" name="name" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
//         </div>
//         <div>
//           <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Email</label>
//           <input type="email" name="email" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
//         </div>
//         <div>
//           <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Password</label>
//           <input type="password" name="password" onChange={handleChange} className="w-full p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
//         </div>
//         <button 
//           type="submit" 
//           className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white"
//         >
//           <span className="w-full relative px-5 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Register
//           </span>
//         </button>
//       </form>
//       <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-6">
//         Already have an account? <Link to="/login" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { UserIcon, EnvelopeIcon, LockClosedIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 hover:underline">Create Your Account</h2>
        <p className="text-slate-500 dark:text-gray-400">Join to start creating and taking quizzes!</p>
      </div>
      
       {error && <p className="bg-red-100 dark:bg-red-500/30 text-red-700 dark:text-red-300 p-3 rounded-lg text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Name</label>
          <UserIcon className="pointer-events-none w-5 h-5 absolute top-10 left-3 text-slate-400" />
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            className="w-full pl-10 p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-transform duration-300 focus:scale-[1.02]" 
            required 
            placeholder="Your Name"
          />
        </div>
        <div className="relative">
          <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Email</label>
          <EnvelopeIcon className="pointer-events-none w-5 h-5 absolute top-10 left-3 text-slate-400" />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            className="w-full pl-10 p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-transform duration-300 focus:scale-[1.02]" 
            required 
            placeholder="you@example.com"
          />
        </div>
        <div className="relative">
          <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Password</label>
          <LockClosedIcon className="pointer-events-none w-5 h-5 absolute top-10 left-3 text-slate-400" />
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
            className="w-full pl-10 p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-transform duration-300 focus:scale-[1.02]" 
            required 
            placeholder="••••••••"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </>
          ) : (
            <>
              <UserPlusIcon className="w-5 h-5" />
              <span>Create Account</span>
            </>
          )}
        </button>
      </form>
      <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-6">
        Already have an account? <Link to="/login" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default Register;