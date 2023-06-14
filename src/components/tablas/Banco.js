import React, { useEffect, useState } from 'react';
// helper para hacer consulta a la api
import { BancoApi } from '../../helpers/BancoHelper.js';


export const Banco = () => {

    const [data, setData] = useState(null);

    // EN el useEffect utilizo el helper para consultar la apiBanco
    useEffect(() => {
        const getData = async () => {
            const jsonData = await BancoApi();
            setData(jsonData);
        };
        getData()

    }, []);
    // console.log(data)

    return (
        <>
            {/* <!-- DataTales Example --> */}
            <div className="card col-lg-10 m-3 shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {data &&
                                    data.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.id}</td>
                                            <td>{row.description}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
