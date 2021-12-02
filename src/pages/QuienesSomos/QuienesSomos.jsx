import React from 'react';
import Imagen1 from '../../components/Imagen/image1'
import Card1 from '../../components/Card/Card1'

const cards = [
    {
        id: 1,
        title: "Quiénes Somos?",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos'
    },
    {
        id: 2,
        title: "Nuestra Misión",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam '
    },
    {
        id: 3,
        title: "Nuestra Visión",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis'
    }
];

const QuienesSomos = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <br /> <br /> <br /> <br /> <br />

                        <Card1 title={cards[0].title} text={cards[0].text} />

                    </div>
                    <Imagen1 />
                </div>


                <div className="row mt-4">

                    <div className="col-6">

                        <Card1 title={cards[1].title} text={cards[1].text} />


                    </div>

                    <div className="col-6">

                        <Card1 title={cards[2].title} text={cards[2].text} />

                    </div>

                </div>

            </div>


        </>
    );
}

export default QuienesSomos;