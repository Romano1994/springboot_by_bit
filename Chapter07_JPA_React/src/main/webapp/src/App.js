import logo from './logo.svg';
import './App.css';
import Index from './main/Index';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import List from './user/List';
import WriteForm from './user/WriteForm';
import UpdateForm from './user/UpdateForm';
import DeleteForm from './user/DeleteForm';
import UploadForm from './user/UploadForm';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/user/writeForm" element={<WriteForm />} />
          <Route path="/user/list" element={<List />} />
          <Route path="/user/updateForm" element={<UpdateForm />} />
          <Route path="/user/deleteForm" element={<DeleteForm />} />
          <Route path="/user/uploadForm" element={<UploadForm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
