import React, { useEffect, useState } from 'react';

export const Proveedores = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5056/proveedor')
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error', error);
        }
    };
    console.log({ data });
  return (
    <>
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">

        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Proveedores
          </h5>
        </div>

        <div className="card-body">
          <div className="row">

          {data &&
              data.map((prov) => (
                <div className="col-lg-6 mb-4" key={prov.id}>
                  <div className="card bg-dark text-white shadow h-100 d-flex align-items-center justify-content-center">
                    <div className="card-body m-4">{prov.description}</div>
                  </div>
                </div>
              ))}
    
          </div>
        </div>

      </div>

    </div>
    </>
  )
}
