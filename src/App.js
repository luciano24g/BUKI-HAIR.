import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Componentes
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setShowMenu(false); // Cierra el submenú
    navigate(path); // Navega a la ruta especificada
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <a className="text-2xl font-bold" href="/">BUKI STYLE</a>
        <div className="float-right">
          <ul className="flex space-x-4">
            <li>
              <a className="hover:text-gray-400" onClick={() => handleLinkClick("/#about")} href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a className="hover:text-gray-400" onClick={() => handleLinkClick("/#services")} href="#services">Servicios</a>
            </li>
            <li>
              <a className="hover:text-gray-400" onClick={() => handleLinkClick("/#booking")} href="#booking">Reservar Turno</a>
            </li>
            <li>
              <button onClick={() => setShowMenu(!showMenu)}>
                🚹 {/* Este es un emoji de ejemplo, puedes usar cualquier ícono o texto */}
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Iniciar sesión</Link>
                  <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Registrarse</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <header className="bg-gray-900 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Barbería</h1>
      <p className="text-xl mb-8">Reserva tu turno con nosotros</p>
      <img src="path_to_image" alt="Imagen de la barbería" className="mx-auto w-48 h-48 rounded-full mb-8" />
      <Link to="/booking-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Reservar Turno</Link>
    </header>
  );
};

const About = () => {
  return (
    <section className="bg-gray-100 py-20" id='about'>
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg mb-8">
            Somos una barbería con años de experiencia, dedicada a ofrecer los mejores servicios para el cuidado y estilismo del cabello masculino.
          </p>
          <Link to="/booking-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Reservar Turno</Link>
        </div>
        <div className="w-1/2">
          <img src="./barberia.png" alt="Imagen de la barbería" className="mx-auto w-48 h-48 rounded-full mb-8"/>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section  id='services' className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes repetir este bloque para cada servicio */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Corte de Cabello</h3>
            <p className="mb-4">Descripción del servicio.</p>
            <span className="text-blue-600 font-bold">$1800</span>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Barba</h3>
            <p className="mb-4">Descripción del servicio.</p>
            <span className="text-blue-600 font-bold">$2300</span>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Corte de Cabello y barba</h3>
            <p className="mb-4">Descripción del servicio.</p>
            <span className="text-blue-600 font-bold">$2800</span>
          </div>
          {/* Fin del bloque de servicio */}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const navigate = useNavigate();

  return (
    <section id='booking' className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Reserva tu Turno</h2>
        <p className="text-lg mb-8">Puedes reservar tu turno online. Es rápido y fácil.</p>
        <Link to="/booking-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Reservar Turno</Link>


      </div>
    </section>
  );
};

const BarberSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Sección Barbero</h2>
        {/* Aquí puedes agregar funcionalidades específicas para el barbero */}
      </div>
    </section>
  );
};

const BookingForm = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Debes iniciar sesión para reservar un turno.");
      navigate("/booking-form");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reservar Turno</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Fecha y Hora:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="datetime-local" id="date" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Tipo de Servicio:
          </label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service">
            <option>Corte de Cabello</option>
            <option>Barba</option>
            <option>Corte de Cabello y Barba</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" placeholder="Nombre completo" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Teléfono:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" placeholder="Número de teléfono" />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Reservar
        </button>
      </form>
    </div>
  );
};

const Login = ({ handleAuthentication }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidUser(username, password)) {
      handleAuthentication(true);
      navigate('/');
    } else {
      toast.error("Credenciales inválidas.");
    }
  };


  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de usuario:
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña" 
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <button onClick={() => navigate("/register")}>Registrar</button> {/* Corregido para la navegación */}
    </div>
  );
};

const users = [
  { username: "admin", password: "bukistyle" },
  { username: "user24", password: "ldf" }
];

const isValidUser = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
};

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    toast.error("Debes iniciar sesión para acceder a esta página."); // Mostrar mensaje de error
    return null; // No renderizar nada
  }

  return children;
};

const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate('/login');
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" required />
        <input type="tel" placeholder="Número de teléfono" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
      {/* Botón de registro con Google (sin funcionalidad por ahora) */}
      <button>Registrar con Google</button>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('isAuthenticated'));

  const handleAuthentication = (isValid) => {
    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      setIsAuthenticated(true);
    }
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login handleAuthentication={handleAuthentication} />} />
        <Route path="/booking-form" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BookingForm /></ProtectedRoute>} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        {/* Aquí puedes agregar más rutas según lo necesites */}
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Booking />
      <BarberSection />
      {/* Aquí puedes agregar más componentes que componen la página principal */}
    </>
  );
};

export default App;