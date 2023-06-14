import React, { useEffect, useState } from 'react';

export const Banco = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5056/banco')
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error', error);
        }
    };
    console.log({ data });

    return (
        <>
            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
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
