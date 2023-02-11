import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("").then((res) => {
      console.log(res.data);
      console.log(res.datastandInf);
      setData(res.data.standInf);
    });
  };
  const columns = [
    {
      dataField: "id_stand_inf",
      text: "id_stand_inf",
      sort: true
    },
    {
      dataField: "stand.nombre_stand",
      text: "stand.nombre_stand",
    },
    {
      dataField: "stand.x",
      text: "stand.x",
    },
    {
      dataField: "stand.y",
      text: "stand.y",
    },
    {
      dataField: "stand.z",
      text: "stand.z",
    },
    {
      dataField: "user.becas_emp_registradas[0].Nombre_apoyo",
      text: "becas_emp_registrada.Nombre_apoyo",
    },
    {
      dataField: "user.promo_desc_empresa.descripcion",
      text: "promo_desc_empresa.descripcion",
    },
    {
      dataField: "actividades_empresas.user.Nombre_actividad",
      text: "actividades_empresa.Nombre_actividad",
    },
    {
      dataField: "programas_edu_registrado.id_prog_edu",
      text: "programas_edu_registrado.id_prog_edu",
    },
    {
      dataField: "productos_emp_registrado.descripcion",
      text: "productos_emp_registrado.descripcion",
    },
    {
      dataField: "servicios_emp_registrado.descripcion",
      text: "servicios_emp_registrado.descripcion",
    },
    {
      dataField: "empresa.direccion",
      text: "empresa.direccion",
    },
    {
      dataField: "user.photo_extension",
      text: "user.photo_extension",
    },
    {
      dataField: "galeria_emp_archivo.archivo",
      text: "galeria_emp_archivo.archivo",
    },
    {
      dataField: "galeria_emp_archivo.link_informacion",
      text: "galeria_emp_archivo.link_informacion",
    },
    {
      dataField: "visitas_emp_registrada.Link_acceso",
      text: "visitas_emp_registrada.Link_acceso",
    },
    {
      dataField: "user.vacantes_emp_registradas.Nombre_vacante",
      text: "user.vacantes_emp_registradas.Nombre_vacante",
    },
  ];

  return (
    <div className="App">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
      />
    </div>
  );
}

export default App;
