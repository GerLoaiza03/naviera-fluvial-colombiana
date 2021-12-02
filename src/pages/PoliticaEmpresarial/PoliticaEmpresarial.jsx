import React from 'react';
import Imagen2 from '../../components/Imagen/image2'
import Card2 from '../../components/Card/Card2'
import Carrusel1 from '../../components/Carrusel/Carrusel1';

const cards = [
    {
        id: 1,
        title: "Política 1",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 2,
        title: "Política 2",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 3,
        title: "Política 3",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 4,
        title: "Política 4",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 5,
        title: "Política 5",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 6,
        title: "Política 6",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    }
];


const PoliticaEmpresarial = () => {
    return (
        <>
            <h1 className="text-center">Politica empresarial</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Imagen2 />                        
                        <Carrusel1 />

                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[0].title} text={cards[0].text} />
                            </div>
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[1].title} text={cards[1].text} />
                            </div>
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[2].title} text={cards[2].text} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[3].title} text={cards[3].text} />
                            </div>
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[4].title} text={cards[4].text} />
                            </div>
                            <div className="col-4">
                                <br />  <br /> <br />
                                <Card2 title={cards[5].title} text={cards[5].text} />
                            </div>
                        </div>


                    </div>
                </div>

            </div>



        </>
    );
}


export default PoliticaEmpresarial;