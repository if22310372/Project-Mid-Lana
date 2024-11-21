import logo from './logo.svg';
import './App.css';

import C1 from "./component/container/container.js"
import Section1 from './component/section1/section1.js';
import Section2 from './component/section2/section2.js';
import section3 from './component/section3/section3.js';
import section4 from './component/section4/section4.js';
import section5 from './component/section5/section5.js';

function App() {
  return (
    <div className="container">
  <h1>Lana Lois Lane Londah</h1>
  <p><strong>Email:</strong> s22310372@student.unklab.ac.id | <strong>Telepon:</strong> 0812-3456-7890</p>
  <p><strong>Alamat:</strong> Sulawesi Utara, Manado</p>
  <div className="section">
    <h2>Profil</h2>
    <p>Saya adalah mahasiswi dari Universitas Klabat yang masih menempuh pendidikan S1 jurusan Informatika, Fakultas Ilmu Komputer</p>
  </div>
  <div className="section">
    <h2>Pengalaman Membuat Projek</h2>
    <ul>
      <li>
        <strong>STUDY 101 App</strong> (Visual Programming - 2024)<br />
        STUDY 101 adalah aplikasi yang dikembangkan pada Visual Studio oleh saya, yang beirisi fitur untuk membantu para pelajar maupun pengajar dalam mendata nilai ataupun membantu pembelajaran.
      </li>
      <li>
        <strong>Cashier OOP</strong> (Cashier System with OOP)<br />
        Saya mengembangkan mekanisme kasir menggunakan OOP.
      </li>
    </ul>
  </div>
  <div className="section">
    <h2>Pendidikan</h2>
    <ul>
      <li>
        <strong>Universitas Klabat</strong> (2023-Sekarang)<br />
        Informatika/Fakiltas Ilmu Komputer
      </li>
      <li>
        <strong>SMA Kr. Eben Haezer</strong> 2023
      </li>
    </ul>
  </div>
  <div className="section">
    <h2>Keterampilan</h2>
    <ul>
      <li>Programming Pyton</li>
      <li>Figma Design</li>
      <li>Visual Studio Design</li>
    </ul>
  </div>
  <div className="section">
    <h2>Bahasa</h2>
    <ul>
      <li>Bahasa Indonesia (Lancar)</li>
      <li>Bahasa Inggris (Menengah)</li>
    </ul>
  </div>
</div>

  );
}

export default App;
