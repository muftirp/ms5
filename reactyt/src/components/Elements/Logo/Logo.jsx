import Logo1 from "/src/assets/images/icon/Logo.png";

const handleBeranda = () => {
    window.location.href = '/beranda1';  
}


export default function Logo() {
    return (
<a onClick={handleBeranda}
              href="#"
              className="px-4 py-2 hover:text-blue-800   text-sm flex items-center gap-2 "
           >
        <span className="mr-2"><img src={Logo1} /></span>
 </a>
    )
}