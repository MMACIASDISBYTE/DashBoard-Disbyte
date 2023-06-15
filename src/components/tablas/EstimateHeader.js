import React, { useEffect, useState } from 'react';
import { ApiHelper } from '../../helpers/ApiConsultasHelper';

export const EstimateHeader = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const jsonData = await ApiHelper.fetchEstimateHeader();
            setData(jsonData);
        }
        getData();
    }, [])
    console.log({ data })

    return (
        <>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Flia. Art.</th>
                                    <th>Cant. Cont.</th>
                                    <th>freightFwd</th>
                                    <th>freightType</th>
                                    <th>Iva Excento</th>
                                    <th>Dueño</th>
                                    <th>Banco</th>
                                    <th>Despachante</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>id</th>
                                    <th>Flia. Art.</th>
                                    <th>Cant. Cont.</th>
                                    <th>freightFwd</th>
                                    <th>freightType</th>
                                    <th>Iva Excento</th>
                                    <th>Dueño</th>
                                    <th>Banco</th>
                                    <th>Despachante</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {data &&
                                    data.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.id}</td>
                                            <td>{row.articleFamily}</td>
                                            <td>{row.cantidadContenedores}</td>
                                            <td>{row.articleFamily}</td>
                                            <td>{row.freightType}</td>
                                            {
                                                (row.ivaExcento) ?
                                                <td>Si</td>:
                                                <td>No</td>
                                            }
                                            <td>{row.own}</td>
                                            <td>{row.p_gloc_banco}</td>
                                            <td>{row.p_gloc_despa}</td>
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
