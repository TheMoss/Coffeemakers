import * as React from 'react';


function Banner() {
    return (
        <div>Do you want coffee?</div>
    )
}
function DescriptionSection({ special, preparation }: {special:string, preparation:string}) {
    return (
        <>
            <TextFrame text={special} />
            <TextFrame text={preparation} />
        </>
    )
}

function TextFrame({ text }: {text: string }) {    
    return (
        <div>{text}</div>
    )
}


export function Coffeemakers({ special, preparation }: { special: string, preparation: string }) {
    return (
        <div>
            <Banner />
            <DescriptionSection special={special} preparation={preparation }  />
        </div>)
}