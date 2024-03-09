export default function TabButton ({children,onSelect})

{
    console.log('tabbutton'); 
       
    return <li>
            <button onClick ={onSelect}>{children}</button>
        </li>
}