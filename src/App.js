import React, { useState } from "react";
import { Button, Input, InputNumber } from "antd";
import "./App.css";
import SelectView from "./components/SelectView";
import { getPrice } from "./fetch";
import carModelsValues from './models'
const params = [
  //   {
  //     type: "year",
  //     placeholder: "Год",
  //     values: [1900, 1901], // 1900-2022
  //   },
  {
    type: "manufacturer",
    placeholder: "Производитель",
    values: [
      { en: "audi", ru: "Audi" },
      { en: "ford", ru: "Ford" },
      { en: "mazda", ru: "Mazda" },
      { en: "toyota", ru: "Toyota" },
      { en: "bmw", ru: "BMW" },
      { en: "chevrolet", ru: "Chevrolet" },
      { en: "volkswagen", ru: "Volkswagen" },
      { en: "nissan", ru: "Nissan" },
      { en: "gmc", ru: "gmc" },
      { en: "jeep", ru: "jeep" },
      { en: "honda", ru: "honda" },
      { en: "dodge", ru: "dodge" },
      { en: "chrysler", ru: "chrysler" },
      { en: "ram", ru: "ram" },
      { en: "mercedes-benz", ru: "mercedes-benz" },
      { en: "infiniti", ru: "infiniti" },
      { en: "porsche", ru: "porsche" },
      { en: "lexus", ru: "lexus" },
      { en: "rover", ru: "rover" },
      { en: "ferrari", ru: "ferrari" },
      { en: "alfa-romeo", ru: "alfa-romeo" },
      { en: "mitsubishi", ru: "mitsubishi" },
      { en: "kia", ru: "kia" },
      { en: "hyundai", ru: "hyundai" },
      { en: "fiat", ru: "fiat" },
      { en: "acura", ru: "acura" },
      { en: "cadillac", ru: "cadillac" },
      { en: "lincoln", ru: "lincoln" },
      { en: "jaguar", ru: "jaguar" },
      { en: "saturn", ru: "saturn" },
      { en: "volvo", ru: "volvo" },
      { en: "buick", ru: "buick" },
      { en: "subaru", ru: "subaru" },
      { en: "pontiac", ru: "pontiac" },
      { en: "mini", ru: "mini" },
      { en: "tesla", ru: "tesla" },
      { en: "harley-davidson", ru: "harley" },
      { en: "mercury", ru: "mercury" },
      { en: "datsun", ru: "datsun" },
      { en: "land rover", ru: "Land rover" },
      { en: "aston-martin", ru: "aston-martin" },
      { en: "morgan", ru: "morgan" },
    ],
  },
  {
    type: "condition",
    placeholder: "Состояние",
    values: [
      { en: "excellent", ru: "Превосходное" },
      { en: "good", ru: "Хорошее" },
      { en: "like new", ru: "Как новая" },
      { en: "new", ru: "Новая" },
      { en: "fair", ru: "Нормальное" },
      { en: "salvage", ru: "Ужасное" },
    ],
  },
  {
    type: "cylinders",
    placeholder: "Кол-во цилиндров",
    values: [
      "6 cylinders",
      "8 cylinders",
      "4 cylinders",
      "5 cylinders",
      "10 cylinders",
      "3 cylinders",
      "other",
      "12 cylinders",
    ],
  },
  {
    type: "fuel",
    placeholder: "Топливо",
    values: [
      { en: "gas", ru: "Бензин" },
      { en: "diesel", ru: "Дизель" },
      { en: "other", ru: "Другое" },
      { en: "hybrid", ru: "Гибрид" },
      { en: "electric", ru: "Электричество" },
    ],
  },
  //   {
  //     type: "odometer",
  //     placeholder: "Пробег в км",
  //     values: ["0", "1"], // 0-inf
  //   },
  {
    type: "transmission",
    placeholder: "Коробка передач",
    values: [
      { en: "automatic", ru: "Автоматическая" },
      { en: "other", ru: "Другой тип" },
      { en: "manual", ru: "Ручная" },
    ],
  },
  {
    type: "drive",
    placeholder: "Привод",
    values: ["rwd", "4wd", "fwd"],
  },
  {
    type: "type",
    placeholder: "Тип двигателя",
    values: [
      "truck",
      "pickup",
      "other",
      "coupe",
      "mini-van",
      "SUV",
      "sedan",
      "offroad",
      "van",
      "convertible",
      "hatchback",
      "wagon",
      "bus",
    ],
  },
  {
    type: "paint_color",
    placeholder: "Цвет кузова",
    values: [
      { en: "black", ru: "Черный" },
      { en: "silver", ru: "Серебряный" },
      { en: "grey", ru: "Серый" },
      { en: "red", ru: "Красный" },
      { en: "blue", ru: "Синий" },
      { en: "white", ru: "Белый" },
      { en: "brown", ru: "Коричневый" },
      { en: "yellow", ru: "Желтый" },
      { en: "green", ru: "Зеленый" },
      { en: "custom", ru: "Другой" },
      { en: "purple", ru: "Фиолетовый" },
      { en: "orange", ru: "Оранжевый" },
    ],
  },
  {
    type: "state",
    placeholder: "Штат",
    values: [
      "al",
      "ak",
      "az",
      "ar",
      "ca",
      "co",
      "ct",
      "dc",
      "de",
      "fl",
      "ga",
      "hi",
      "id",
      "il",
      "in",
      "ia",
      "ks",
      "ky",
      "la",
      "me",
      "md",
      "ma",
      "mi",
      "mn",
      "ms",
      "mo",
      "mt",
      "nc",
      "ne",
      "nv",
      "nj",
      "nm",
      "ny",
      "nh",
      "nd",
      "oh",
      "ok",
      "or",
      "pa",
      "ri",
      "sc",
      "sd",
      "tn",
      "tx",
      "ut",
      "vt",
      "va",
      "wa",
      "wv",
      "wi",
      "wy",
    ],
  },
];

const App = () => {
  const [year, setYear] = useState(2010);
  const [model, setModel] = useState("");
  const [odometer, setOdometr] = useState(3000);
  const [urlParams, setUrlParams] = useState({});
  const [carPrice, setCarPrice] = useState("")
  return (
    <div>
      <div className="container">
        <div className="columns">
          <div className="col">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "60px",
                marginTop: "64px",
                textAlign: "center",
              }}
            >
              Давайте оценим ваш автомобиль
            </h1>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "230px", fontSize: "24px" }}>
                Модель машины: 
              </div>{" "}
              {/* <Input type="text" onChange={v=>setModel(v.target.value)} /> */}
              <SelectView
                  placeholder={"Модель"}
                  type={"model"}
                  values={carModelsValues}
                  key={"model"}
                  style={{ minWidth: "350px" }}
                  select={(key, value) => {
                    const obj = {
                        ...urlParams
                    };
                    obj[key] = value;
                    setUrlParams(obj);
                  }}
                />
                  
            </div>
            <div className="inputs">
              {/* <div> */}
              Год производства:{" "}
              <InputNumber
                type="year"
                value={year}
                onChange={(value) => setYear(value)}
              />
              Пробег:{" "}
              <InputNumber
                type="odometer"
                value={odometer}
                onChange={(value) => setOdometr(value)}
              />
              {/* </div> */}
              {params.map((p) => (
                <SelectView
                  placeholder={p.placeholder}
                  type={p.type}
                  values={p.values}
                  key={p.type}
                  style={{ width: "210px" }}
                  select={(key, value) => {
                    const obj = {
                        ...urlParams
                    };
                    obj[key] = value;
                    setUrlParams(obj);
                  }}
                />
              ))}
              <Button type="default" style={{ width: "210px" }}>
                Очистить
              </Button>
              <Button
                type="primary"
                style={{ width: "210px" }}
                onClick={async () => {
                    urlParams["year"] = year
                    urlParams["odometer"] = odometer
                    // urlParams["model"] = model
                    const price = await getPrice(urlParams)
                    setCarPrice(price)
                }}
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="content">
                {carPrice ? (
                    <>
                    <h3 style={{fontSize:"38px", fontWeight:"bold"}}>{carPrice} руб.</h3>
                    </>
                ) : (
                    <>
                    <span style={{ color: "#d3d3d3" }}>
                    Пожалуйста, введите характеристики вашего автомобиля и нажмите
                    кнопку
                  </span>
                  <Button
                    type="dashed"
                    style={{ width: "210px", marginTop: "10px", color: "#d3d3d3" }}
                  >
                    Рассчитать стоимость
                  </Button>
                    </>
                )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
