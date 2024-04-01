
import AminalzStoryZoo from '../AminalzStoryZoo/AminalzStoryZoo';
import AnimalzStoryZoo2 from '../AnimalzStoryZoo2/AnimalzStoryZoo2';
import Cards from '../Cards/Cards';
import Comments from '../Commets/Comments';
import DrAhmadAudio from '../DrAhmadAudio/DrAhmadAudio';
import DrAhmadHassan from '../DrAhmadHassan/DrAhmadHassan';
import DrSofia from '../DrSofia/DrSofia';
import DrSofiaIbrahim from '../DrSofiaIbrahim/DrSofiaIbrahim';
import EntityCards from '../EntityCards/EntityCards';
import EntityName from '../EntityName/EntityName';
import EntityName2 from '../EntityName2/EntityName2';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import PersonalName from '../PersonalName/PersonalName';

const WrapperLeft = () => {
    return (
        <>
            <div className="w-[100%] sm:w-[77%] p-4 rounded-lg border border-gray-200 shadow-xl">
                {/* comments */}
               <Comments/>

                {/* entity name */}
            <EntityName/>
                {/* entity name */}


                {/* animals story zoo */}
               <AminalzStoryZoo/>
                {/* animals story zoo */}


                {/* Dr. Ahmad Hassan */}
              
                <DrAhmadHassan/>
                {/* Dr.Ahmad Hassan */}

                {/* Dr. Sofia Ibrahim */}
            
                <DrSofia/>
                {/* Dr. Sofia Ibrahim */}

                {/* personal Name */}
               
                <PersonalName/>
                {/* personal Name */}

                {/* personal info */}
             
                <PersonalInfo/>
                {/* personal info */}

                {/* Dr. sofia Ibrahim again */}
             
                <DrSofiaIbrahim/>
                {/* Dr. sofia Ibrahim again */}

                {/* Animals Story Zoo */}
               
                <AnimalzStoryZoo2/>
                {/* Animals Story Zoo */}

                {/* Entity Name */}
                
            <EntityName2/>
                {/* Entity Name */}

                {/* Dr Ahmad hassan audio */}
              
                <DrAhmadAudio/>
                {/* Dr Ahmad hassan audio */}






                {/* Similar Jobs from same v-Employer */}

                <div className="flex gap-2 p-2 px-[20px]  items-center">
                    <span className=" cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-700 to-pink-700  text-transparent bg-clip-text ">
                        Similar Jobs From Same V-Employer
                    </span>
                    <div className="w-[64%] h-[3px] border-gradient  "></div>

                </div>

                {/* Similar Jobs from same v-Employer */}
                <div className="w-[97%] p-5 m-auto rounded-lg border border-gray-200 shadow-lg">
                    <Cards />
                </div>

                {/* Similar Jobs from other v-Employer */}

                <div className="flex gap-2 p-2 px-[20px]  items-center">
                    <span className=" cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-700 to-pink-700  text-transparent bg-clip-text ">
                        Similar Jobs From other V-Employer
                    </span>
                    <div className="w-[64%] h-[3px] border-gradient  "></div>

                </div>

                {/* Similar Jobs from other v-Employer */}
                <div className="w-[97%] p-5 m-auto rounded-lg border border-gray-200 shadow-lg">
                    <EntityCards />
                </div>

            </div>
        </>
    )
}

export default WrapperLeft;