export default function MenuOutline ({menuIsOpen}:{menuIsOpen:boolean}){

    if(menuIsOpen){
        
        return<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
        </svg>

    }

    return<svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/>
    </svg>
}