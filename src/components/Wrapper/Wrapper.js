

const Wrapper = ()=>{
    const assets = [
        {
            img: 'general.png',
            description: 'Details'
        },

        {
            img: 'icon.png',
            description: 'Comments'
        },

        {
            img: 'reactions.png',
            description: 'reactions'
        },
        {
            img: 'share.png',
            description: 'Shares'
        },
        {
            img: 'rating.png',
            description: 'Ratings & Reviews'
        },
    ]
    return (
        <>
        <div className="mt-[30px]">
            {/* icons part */}
            <div className="flex justify-center w-[700px] m-auto rounded-3xl p-2 gap-5 border-2 border-gray-300 shadow-xl" >
                {assets.map((item , i) =>{
                    return(
                        
                        <div key={i} className="flex justify-center items-center gap-1 " > 
                            <img src={item.img} alt="" />
                            <p>{item.description}</p>
                        </div>
                        
                    )
                })}
            </div>

<div className="flex w-[95%] m-auto gap-10  mt-10">

                {/* left */}
            <div className="w-[90%]">
            {/* comments */} 
            <div className="bg-white border-b-4 border-gray-500 shadow-xl">
                <div className="flex items-center gap-4 p-4 rounded-lg" >
                <span className=" font-extrabold text-xl bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text"
                 >Comments</span>
                <div className="w-[600px] h-[2px] border-gradient  "></div>
                </div>
                <div className="flex justify-between p-3 rounded-lg">
                {/* select */}
                <div className="flex gap-5 justify-center items-center">
                    <select className="w-[200px] h-[30px]">
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                    </select>
                    <div className="flex gap-1">
                        <img src="todo.png" alt="" />
                        <img src="button.png" alt="" />
                    </div>
                </div>
                {/* arrows */}
                <div className="flex justify-center items-center gap-3">
                    <div className="flex ">
                    <div className="border-gradient h-[30px] w-[30px] rounded-md">
                        <img src="arrow-up.png"  alt="" />
                    </div>
                    <div className="border-gradient h-[30px] w-[30px]  rounded-md">
                    <img src="arrow-down.png" alt="" className="cursor-pointer"/>

                    </div>

                    </div>

                    <button className="bg-purple-600 rounded-3xl p-2">100 Results</button>
                </div>
                </div>

            </div>
              
{/* please write your comment here */}
              <div>
                <div className="flex gap-5">
                    <img src="Proflile Type.png" alt="" />
                    <input type="text" className="w-[80%]"/>
                </div>
                <div>
                    <span>0/5k characters</span>
                    {/* all icons before along with send button */}
                    <div>

                    </div>
                </div>
              </div>
{/* please write your comment here */}
               
            </div>
            {/* right */}
                <div>
                    <div>
                        <img src="Top-Carousel.png" alt="" />
                    </div>
                </div>
                 </div>
        </div>
        </>
    )

}

export default Wrapper;