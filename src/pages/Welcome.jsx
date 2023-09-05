import React, { useState } from 'react';
import Profile from '../components/Profile';
import InputField from '../components/InputFields';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Welcome = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);

    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulación de una llamada a API o almacenamiento de datos en algún lugar
    saveDataToServer(name, image);
    setShowSuccessModal(true);
  };

  const saveDataToServer = (name, image) => {
    // Aquí puedes agregar lógica para guardar los datos en tu servidor o almacenamiento
    // Por ahora, solo simularemos un retraso de 2 segundos antes de mostrar el modal
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-800 min-h-screen">
      <Navbar/>

      <div className="flex justify-center mt-6">
      <div className='w-1/3'>
        <Profile image={image} name={name} />
      </div>

      <div className='w-1/3'>
        <form className='px-8 py-4 border rounded-md' onSubmit={handleSubmit}>
          <InputField label="Name" type="text" placeholder="Name" onChange={handleChange} />
          <InputField label="Descripción" type="text" placeholder="Descripción" />
          <InputField label="Age" type="range" />
          <InputField label="Profile picture" type="file" onChange={handleChange} />

          <div className='mt-8'>
            <button type="submit" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</button>
            
          </div>
        </form>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-90">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-green-500">Saved successfully!</p>
          </div>
        </div>
      )}
      <div>
      </div>
    </div>
    <Footer/>

    </div>
  );
}

export default Welcome;

