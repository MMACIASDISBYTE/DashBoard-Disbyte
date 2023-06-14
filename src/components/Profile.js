import React, { useEffect } from 'react';
import SmallCard from './SmallCard';
import { useAuth0 } from '@auth0/auth0-react';
import { CardProfile } from './CardProfile';

export const Profile = (props) => {

const { user, isAuthenticated } = useAuth0();

useEffect( () =>{
  console.log({user})
},[])

  return (
    <>
    <h2>{props.name}</h2>
    {
      isAuthenticated ?
        <CardProfile/>
      :
      <h3>Deberias loggearte</h3>
    }
    </>
  )
}


/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

// SmallCard.defaultProps = {
//     title: 'No Title',
//     color: 'success',
//     cuantity: 'No cuatity',
//     icon: 'fa-clipboard-list'
// }