import React from 'react';
import Table from "../../components/Medic/Table"
import hokim from "../../Assets/Data/hokim.json"
import prokror from "../../Assets/Data/prokror.json"
import viloyat from "../../Assets/Data/viloyat.json"

const MainSektor = ({type}) => {

    switch (type) {
        case "hokim":
            return (
                <div className='py-28'>
                    <div className='container mx-auto px-7'>
                        <Table malumot={hokim} />
                    </div>
                </div>
              )
        case "prokror":
            return (
                <div className='py-28'>
                    <div className='container mx-auto px-7'>
                        <Table malumot={prokror} />
                    </div>
                </div>
              )
        case "viloyat":
            return (
                <div className='py-28'>
                    <div className='container mx-auto px-7'>
                        <Table malumot={viloyat} />
                    </div>
                </div>
              )
        default:
            break;
    }

  
}

export default MainSektor
