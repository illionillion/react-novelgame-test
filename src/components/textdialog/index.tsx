import React from 'react';
import Char from '../char';
import './index.scss'
export default function TextDialog({ children }: { children: React.ReactNode }) : JSX.Element {    

    // console.log(children);
    // console.log(typeof children);

    
    // 配列にする
    const childArray = React.Children.toArray(children)
    const stringArray = Array.from(childArray[0].toString())
    // console.log(childArray[0]);
    console.log(stringArray);
    

    // for (const key in childArray) {
    //     if (Object.prototype.hasOwnProperty.call(childArray, key)) {
    //         // console.dir(childArray[key]);
    //         if (typeof childArray[key] === 'object') {
    //             console.log(childArray[key]);
                
    //         } else {
    //             console.log(childArray[key])
    //         }
    //     }
    // }

    return (
        <div className="text-dialog">
            {stringArray.map((output, index) => <Char key={index} >{output}</Char>)}
        </div>
    )
}