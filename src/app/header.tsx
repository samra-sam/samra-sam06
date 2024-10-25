
export default function Header(){
  return (
    <div>
      <h1 className="text-1xl font-bold text-blue-700 text-center mt-28">welcome</h1>
       <h1 className= 'text-white  text-2xl font-bold text-center mt-8'>Selling on the<br></br> internet like a pro </h1>
       
     
     <p className='text-white text-center mt-8'>
      we know how large objects will act, but things on a <br></br>
      small scale just do not act that way. </p>

      <div className='flex gap-2 ml-96 px-14'>
      <button className='bg-blue-400 hover:bg-red-300 p-3 rounded  text-center text-white px-10 
      font-bold mt-8 gap-2'> Get Quote Now</button>
      <button className= 'text-blue-600 h-12 mt-8 border-2 p-2 px-3 rounded border-blue-700'>Learn More</button>
      </div>
    </div>
   
  )
}