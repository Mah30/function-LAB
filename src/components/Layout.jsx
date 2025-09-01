/* import imgbg from "../assets/images/imgbg.png"; */

const Layout = ({children}) => {
    return ( 
        <div 
        className="relative"
        style={{backgroundImage: "url('../assets/images/imgbg.png')" }}
>
        
       {/* overlay para contraste do texto */}
       <div className="pointer-events-none absolute inset-0 bg-black/40" />

{/* conteúdo acima do overlay */}
<main className="relative z-10">{children}</main>
                  


        </div>
     );
}
 
export default Layout;