export default function TabButton ({children})
{
    function handleClick(){
        console.log("hey you clicked");
    }
    
    return <li>
            <button onClick ={handleClick}>{children}</button>
        </li>
}