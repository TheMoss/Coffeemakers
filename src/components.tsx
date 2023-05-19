import React from 'react';
import backgroundImage from './background.jpeg';

function Banner() {
    return (
        <div className="banner">Do you want coffee?</div>
    )
}

function TextFrame({ text }: { text: string }) {
    return (
        <div className="text-frame">{text}</div>
    )
}
function DescriptionSection({ special, preparation }: { special: string, preparation: string }) {
    return (
        <div className="choice-section" style={{
            gridColumn: 4, gridRow: 2
        }}>
            <TextFrame text={special} />
            <TextFrame text={preparation} />
        </div>)
}

function CoffeeOptions() {
    return (
        <div className="choice-section" style={{ gridColumn: 2, gridRow: 2 }}>
            <div className='coffee-types'>Type of coffee
                <div>Strength</div>

                <div>Milk</div>

                <div>Foam</div>

                <div>Sweetness</div>

            </div>
        </div>
    )
}

function ImageContainer() {
    return (
        <div style={{gridColumn:3, gridRow:2} }>
            <div className="circle">
            </div>
        </div>)
}




export function Coffeemakers({ special, preparation }: { special: string, preparation: string }) {
    return (
        <html style={{ backgroundImage: `url(${backgroundImage})` }}>
            <body>
                <Banner />
                <div className="App">
                    <CoffeeOptions />
                    <ImageContainer/>
                    <DescriptionSection special={special} preparation={preparation} />
                </div>
            </body>
        </html>
    )
}