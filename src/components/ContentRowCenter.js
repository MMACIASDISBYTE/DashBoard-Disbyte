import React from 'react';
import LastMovieInDb from './LastMovieInDb';
// import GenresInDb from './GenresInDb';
import { Proveedores } from './tablas/Proveedores';

function ContentRowCenter(){
    return (
        <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            {/* <GenresInDb /> */}
            <Proveedores/>

        </div>
    )
}

export default ContentRowCenter;