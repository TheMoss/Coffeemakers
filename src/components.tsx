import React from 'react';
import backgroundImage from './background.jpeg';
import { Slider, Handles, Ticks, Rail, GetHandleProps, SliderItem, } from "react-compound-slider";
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
                <SliderComponent />
                <div>Milk</div>
                <SliderComponent />
                <div>Foam</div>
                <SliderComponent />
                <div>Sweetness</div>
                <SliderComponent />
            </div>
        </div>
    )
}
function ImageContainer() {
    return (
        <div style={{ gridColumn: 3, gridRow: 2 }}>
            <div className="circle">
            </div>
        </div>)
}

function SliderComponent() {
    return (
        <div>
            <Slider
                mode={1}
                step={1}
                domain={[0, 3]}
                className="slider"
                values={[0]}>

                <Rail>{({ getRailProps }) => (
                    <>
                        <div className='rail-outer' {...getRailProps()}></div>
                        <div className='rail-inner'></div>
                    </>
                )}
                </Rail>

                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div>
                        {handles.map((handle) => (<Handle
                            key={handle.id}
                            handle={handle}
                            domain={[0, 3]}
                            getHandleProps={getHandleProps}></Handle>
                        ))}
                    </div>)}
                </Handles>

                <Ticks values={[0, 1, 2, 3]}>
                    {({ ticks }) => (
                        <div>
                            {ticks.map(tick => (<Tick
                                key={tick.id}
                                tick={tick}
                                count={ticks.length} />
                            ))}
                        </div>)}
                </Ticks>

            </Slider>
        </div>
    )
}
interface HandleProps {
    domain: number[];
    handle: SliderItem;
    getHandleProps: GetHandleProps;
    disabled?: boolean;
}
const Handle: React.FC<HandleProps> = ({
    domain: [min, max],
    handle: { id, value, percent },
    getHandleProps,
}) => {
    return (
        <>
            <div className="handle" style={{ left: `${percent}%` }} {...getHandleProps(id)} />
            <div className="handle-slider" role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                style={{ left: `${percent}%` }} />
        </>
    )
}

interface TickProps {
    tick: SliderItem;
    count: number;
    format?: (val: number) => string;
}

const Tick: React.FC<TickProps> = ({
    tick
}) => {
    return (
        <div>
            <div
            className="tick"
            style={{left: `${tick.percent}%`}}
            />
        </div>
    );
};

export function Coffeemakers({ special, preparation }: { special: string, preparation: string }) {
    return (
        <html style={{ backgroundImage: `url(${backgroundImage})` }}>
            <body>
                <Banner />
                <div className="app">
                    <CoffeeOptions />
                    <ImageContainer />
                    <DescriptionSection special={special} preparation={preparation} />
                </div>
            </body>
        </html>
    )
}