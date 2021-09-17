import React from 'react';
import {Button, Select} from "antd";
import './App.css'
import SelectView from "./components/SelectView";

const params = [
    {
        type: "year",
        placeholder: "Год",
        values: [1900, 1901] // 1900-2022
    },
    {
        type: "manufacturer",
        placeholder: "Производитель",
        values: ['ford', 'gmc', 'chevrolet', 'toyota', 'jeep', 'nissan', 'honda',
            'dodge', 'chrysler', 'ram', 'mercedes-benz', 'infiniti', 'bmw',
            'volkswagen', 'mazda', 'porsche', 'lexus', 'rover', 'ferrari',
            'audi', 'mitsubishi', 'kia', 'hyundai', 'fiat', 'acura',
            'cadillac', 'lincoln', 'jaguar', 'saturn', 'volvo', 'alfa-romeo',
            'buick', 'subaru', 'pontiac', 'mini', 'tesla', 'harley-davidson',
            'mercury', 'datsun', 'land rover', 'aston-martin', 'morgan']
    },
    {
        type: "condition",
        placeholder: "Состояние",
        values: ['excellent', 'good', 'like new', 'new', 'fair', 'salvage']
    },
    {
        type: "cylinders",
        placeholder: "Кол-во цилиндров",
        values: ['6 cylinders', '8 cylinders', '4 cylinders', '5 cylinders',
            '10 cylinders', '3 cylinders', 'other', '12 cylinders'
        ]
    },
    {
        type: "fuel",
        placeholder: "Топливо",
        values: ['gas', 'diesel', 'other', 'hybrid', 'electric']
    },
    {
        type: "odometer",
        placeholder: "Пробег в км",
        values: ["0", "1"] // 0-inf
    },
    {
        type: "transmission",
        placeholder: "Трансмиссия",
        values: ['automatic', 'other', 'manual']

    },
    {
        type: "drive",
        placeholder: "Привод",
        values: ['rwd', '4wd', 'fwd']
    },
    {
        type: "type",
        placeholder: "Тип двигателя",
        values: ['truck', 'pickup', 'other', 'coupe', 'mini-van', 'SUV', 'sedan',
            'offroad', 'van', 'convertible', 'hatchback', 'wagon', 'bus']
    },
    {
        type: "paint_color",
        placeholder: "Цвет кузова",
        values: ['black', 'silver', 'grey', 'red', 'blue', 'white', 'brown',
            'yellow', 'green', 'custom', 'purple', 'orange']
    },
    {
        type: "state",
        placeholder: "Штат",
        values: ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga',
            'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma',
            'mi', 'mn', 'ms', 'mo', 'mt', 'nc', 'ne', 'nv', 'nj', 'nm', 'ny',
            'nh', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx',
            'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy']
    },
]

const App = () => {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="col">
                        <h1 style={{
                            fontWeight: "700",
                            fontSize: "60px",
                            marginTop: "64px",
                            textAlign: "center"
                        }}>
                            Давайте оценим ваш автомобиль
                        </h1>
                        <div className="inputs">

                            {params.map(p => (
                                <SelectView placeholder={p.placeholder}
                                            type={p.type}
                                            values={p.values}
                                            style={{width: "210px"}}/>
                            ))}
                            <Button type="default" style={{width: "210px"}}>Очистить</Button>
                            <Button type="primary" style={{width: "210px"}}>Рассчитать стоимость</Button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <span style={{color: "#d3d3d3"}}>Пожалуйста, введите характеристики вашего автомобиля и нажмите кнопку</span>
                            <Button type="dashed" style={{width: "210px", marginTop: "10px", color: "#d3d3d3"}}>Рассчитать
                                стоимость</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;