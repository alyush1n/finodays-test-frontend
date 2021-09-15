import React from 'react';
import {Button, Select} from "antd";
import './App.css'
import SelectView from "./components/SelectView";

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
                            <SelectView placeholder="Марка"/>
                            <SelectView placeholder="Модель"/>
                            <SelectView placeholder="Пробег"/>
                            <SelectView placeholder="Привод"/>
                            <SelectView placeholder="Объём двигателя"/>
                            <SelectView placeholder="Топливо"/>
                            <Button type="default" style={{width: "210px"}}>Очистить</Button>
                            <Button type="primary" style={{width: "210px"}}>Рассчитать стоимость</Button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <span style={{color: "#d3d3d3"}}>Пожалуйста, введите характеристики вашего автомобиля и нажмите кнопку</span>
                            <Button type="dashed" style={{width: "210px", marginTop: "10px", color: "#d3d3d3"}}>Рассчитать стоимость</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;