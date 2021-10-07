import React from "react"
import Color from "./Color.js"

export default class Main extends React.Component {
    render() {
        const getNumber = (max= 0, min = 255) => Math.floor(Math.random() * (max - min) + min)
        let r = getNumber()
        let g = getNumber()
        let b = getNumber()

        function rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
        function rgbToHexTriadicFirst(r, g, b) {
            return "#" + ((1 << 24) + (b << 16) + (r << 8) + g).toString(16).slice(1);
        }
        function rgbToHexTriadicSecond(r, g, b) {
            return "#" + ((1 << 24) + (g << 16) + (b << 8) + r).toString(16).slice(1);
        }

        let hexColor = rgbToHex(r,g,b)
        let triadicFirst = rgbToHexTriadicFirst(r,g,b)
        let triadicSecond = rgbToHexTriadicSecond(r,g,b)

        return <div className='main-block'>
            <h1>Основной цвет</h1>
            <div className='random'>
                <Color color={`${hexColor}`}/>
            </div>
            <h1>Цвета по треугольнику</h1>
            <div className='triadic'>
                <Color color={`${triadicFirst}`}/>
                <Color color={`${triadicSecond}`}/>
            </div>
        </div>
    }
}