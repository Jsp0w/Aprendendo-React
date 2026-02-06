export default function Header(){
    return(
        <>
            <header className="bg-header-bg text-header-text text-2xl flex justify-between items-center pr-3">
                <a className="flex items-center" href="./">
                    <img className="w-16 drop-shadow-xs drop-shadow-black" src="image.png" alt="" />
                    <span>Jspow</span>
                </a>
                <ul className="flex items-center gap-3 max-sm:hidden">
                    <li>
                        <a href="./">Home</a>
                    </li>
                    {/* <li className="bg-header-bg">
                        <a href="./">What i learned</a>
                    </li> */}
                    <li>
                        <a href="./AboutMe">About Me</a>
                    </li>
                    {/* <li className="bg-header-bg">
                        <a href="./">My projects</a>
                    </li> */}
                </ul>
            </header>
        </>
    )
}