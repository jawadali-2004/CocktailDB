import React, { useEffect, useState } from 'react'

const App = () => {
    const url = ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`

    const [data, setdata1] = useState([])
    const [search1, setsearch1] = useState("")


    useEffect(() => {
        async function drink() {
            const d1 = await fetch(url)
            const d2 = await d1.json()
            console.log(d2.drinks)
            setdata1(d2.drinks)
        }
        drink()

    }, [])

    const handleClick = async () => {
        const url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search1}`
        const sear = await fetch(url2)
        const sear2 = await sear.json()
        console.log(sear2)
        setdata1(sear2.drinks)
    }

    return (
        <>

            <nav className='w-full h-20 bg-pink-950  '>

                <div className='flex w-[80%] m-auto justify-between items-center'>

                <img src="https://www.thecocktaildb.com/images/logo.png" alt="" className='p-4' />

                    <div>

                    <button onClick={handleClick} className='bg-red-700 p-2 mx-3 text-white rounded-md'>Home</button>

                    <button  className='hover:bg-red-600 mx-2 w-[60px] rounded-md bg p-2 text-white'>API</button>

                        <input type="text" style={{ border: "2px solid black" }} onChange={(e) => setsearch1(e.target.value)}  className='outline-none rounded-md p-1' placeholder='search'/>

                        
                    </div>
                    
                </div>


            </nav>


            <div className='flex  mt-8'>

                <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="" />

                <div className=' text-center m-auto '>
                    <h1 className='text-white text-[30px]'> <b>Welcome to TheCocktailDB</b></h1>
                    <p className='text-white w-[600px] mt-4'>An open, crowd-sourced database of drinks and cocktails from around the world.
                    We also offer a free cocktail API for anyone wanting to use it. <br />
                    If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
                    <img src="https://www.thecocktaildb.com/images/patreon_logo.png" alt=""  className='w-[200px]  m-auto mt-3'/>

                    <p className='text-gray-500 mt-3 hover:text-yellow-500'>Click to upgrade free API to premium for $3</p>

                    <p className='text-white mt-1'>Currently (363 supporters)</p>
                </div>
            
                <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="" />

            </div>


            <div className='w-[80%] m-auto  text-center  pt-5  pb-5 mt-4 border-y-2 justify-center'>


            <input type="text" style={{ border: "2px solid black" }} onChange={(e) => setsearch1(e.target.value)}  className='outline-none rounded-md p-1' placeholder='search for cocktail...'/>

            <div className='flex gap-3  mt-[15px] justify-center'>


                <div className='flex text-white gap-2 items-center'> <img src="https://www.thecocktaildb.com/images/icons/cocktail-logo.png " alt="" className='w-[16px] h-[16px]'/>Total Drinks: 636</div>

                <div className='flex text-white gap-2 items-center'> <img src="https://www.thecocktaildb.com/images/icons/ingredient-logo.png " alt="" className='w-[16px] h-[16px]'/>Total Drinks: 636</div>

                <div className='flex text-white gap-2 items-center'> <img src="https://www.thecocktaildb.com/images/icons/image2.png" alt="" className='w-[16px] h-[16px]'/>Total Drinks: 636</div>
                
            </div>

            </div>






            <div className='grid grid-cols-4 gap-5 w-[80%] m-auto mt-28 text-center'>
                {data.map((packs) => {
                    const { strDrinkThumb,strCategory} = packs
                    return (

                        <>
                        <div>
                            <img src={strDrinkThumb} alt="" />
                            <h1  className='mt-[10px] text-gray-500 hover:text-yellow-500'>{strCategory}</h1>

                        </div>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default App
