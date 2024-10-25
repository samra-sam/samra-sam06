export default function Navbar () {
    return(
        <nav className="w-full h-20 flex justify-between px-40 items-center">
      <div className="text-2xl font-bold text-white hover:bg-emerald-900">BrandName</div>
      <ul className="font-semibold flex flex-row text-white hover:bg-emerald-900">
        <li className="mx-[10px] cursor-pointer">Home</li>
        <li className="mx-[10px] cursor-pointer">Product</li>
        <li className="mx-[10px] cursor-pointer">Pricing</li>
        <li className="mx-[10px] cursor-pointer">Contact</li>
      </ul>
     
      <div className="text-1xl font-bold text-white flex gap-5 ">  Login
       
      <button className="bg-blue-400 hover:bg-red-500 p-2 text-white text-1xl font-bold"> JOIN US</button>
      </div>
    </nav>
    );
}