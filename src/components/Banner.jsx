const Banner = ({addCredit}) => {
    return (
        <div className='px-1 md:px-0 max-w-screen-xl mx-auto'>

            <div className=' bg-cover bg-black bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10' style={{backgroundImage: 'url(https://i.ibb.co.com/3dYtDg2/bg-shadow.png)'}}>

            <div className='text-white flex flex-col items-center justify-center w-9/12 mx-auto h-full text-center py-5 md:py-0'>
            <img src="https://i.ibb.co.com/QKQCG6J/banner-main.png" alt="cricket img" className='mb-4'/>
            <h3 className='text-xl md:text-4xl font-bold'>Assemble Your Ultimate Dream XI Cricket Team</h3>
            <p className='text-xs md:text-2xl text-gray-400 font-normal md:w-4/5 my-3 md:my-6'>Beyond Boundaries Beyond Limits</p>
            
            <div className='border-2 border-[#E7FE29] p-1 rounded-xl'>
              <button id='free' className='btn bg-[#E7FE29] text-xs md:text-base font-bold' onClick={addCredit}> Claim Free Credit </button>
            </div>

            </div>

        </div>

      </div>
    );
};

export default Banner;
