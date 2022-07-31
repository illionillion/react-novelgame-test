import React, { useEffect, useState } from 'react';
import timer from '../../interface/timer';
import Char from '../char';
import './index.scss'
export default function TextDialog({ children }: { children: React.ReactNode }) : JSX.Element {    

    // 配列にする
    const childArray = React.Children.toArray(children)
    const stringArray = Array.from(childArray[0].toString())

    const [charList, setCharList] = useState(new Array(stringArray.length).fill(false))

    let count = 0
    let timer : timer

    useEffect(()=>{

        timer = !timer && setInterval(()=>{

            if (count > charList.length) {
                count = 0
                setCharList(
                    charList.map((val, index) => (index < count ? !val : val))
                )                
                return
            }
            // console.log(count);
            if (stringArray[count] === ' ') {
                count++;
            }
            setCharList(
                charList.map((val, index) => (index <= count ? !val : val))
            )

            count++;

        },100)

    },[])

    return (
        <div className="text-dialog">
            {stringArray.map((output, index) => <Char key={index} flag={charList[index]}>{output}</Char>)}
        </div>
    )
}