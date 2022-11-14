import AppLayout from "./components/Layouts/AppLayout";
import { Route, Routes} from "react-router-dom"
import HomePage from "./components/Home";
import MedicPage from "./components/Medic";
import MainSektor from "./pages/sektors/main";

const menuArr = [
  {
    id: 1,
    path: "/hokim",
    element: <MainSektor type="hokim" />
  },
  {
    id: 2,
    path: "/prokror",
    element: <MainSektor type="prokror" />
  },
  {
    id: 3,
    path: "/viloyat",
    element: <MainSektor type="viloyat" />
  },
  {
    id: 4,
    path: "/tibbiyot/*",
    element: <MedicPage />
  },
]

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {menuArr.map(item => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>

    </AppLayout>
  );
}

export default App;
