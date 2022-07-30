import './index.scss'
export default function TextDialog({ children }: { children: React.ReactNode }) : JSX.Element {    

    console.log(children);
    console.log(typeof children);
    
    // for (const key in children) {
    //     if (Object.prototype.hasOwnProperty.call(children, key)) {
    //         const element = children[key];
            
    //     }
    // }

    return (
        <div className="text-dialog">
            {children}
        </div>
    )
}