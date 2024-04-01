
import Cards from '../Cards/Cards';
import EntityCards from '../EntityCards/EntityCards';
import {photos} from '../utils/assets'
const WrapperLeft = ()=>{
    return (
        <>
       <div className="w-[77%] p-4 rounded-lg border border-gray-200 shadow-xl">
            {/* comments */}
            <div className="bg-white border-b-[3px] border-gray-200 shadow-lg rounded-lg ">
              <div className="flex items-center gap-4 p-1 rounded-lg">
                <span className=" font-extrabold text-xl bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                  Comments
                </span>
                <div className="w-[100%] h-[3px] border-gradient  "></div>
              </div>
              <div className="flex justify-between p-2 rounded-lg">
                {/* select */}
                <div className="flex gap-5 justify-center items-center">
                  <select className="w-[200px] h-[30px]">
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                  </select>
                  <div className="flex gap-1">
                    <img src="todo.png" alt="" className="cursor-pointer" />
                    <img src="button.png" alt="" className="cursor-pointer" />
                  </div>
                </div>
                {/* arrows */}
                <div className="flex  justify-center items-center  gap-3">
                  <div className="flex ">
                    <div className="border-gradient h-[30px] w-[30px] rounded-md">
                      <img
                        src="arrow-up.png"
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="border-gradient h-[30px] w-[30px]  rounded-md">
                      <img
                        src="arrow-down.png"
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>

                  <button className="bg-purple-600 rounded-3xl px-2 text-white h-[35px]">
                    100 Results
                  </button>
                </div>
              </div>
            </div>

            {/* please write your comment here */}
            <div className="flex flex-col justify-center rounded-lg border-2 border-gray-200 shadow-md mt-2">
              <div className="flex gap-3 p-2 rounded-lg">
                <img
                  src="Proflile Type.png"
                  alt=""
                  className="cursor-pointer"
                />
                <input
                  type="text"
                  className="w-[95%] rounded-lg indent-5 border border-gray-500"
                  placeholder="Please write your comment here.."
                />
              </div>

              <div className="flex items-center justify-between py-1 w-[98.5%] m-auto">
                <span className="ml-[6%] text-gray-500">0/5k characters</span>
                {/* all icons before along with send button */}
                <div className="flex justify-center items-center gap-2 ">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_81_12885)">
                        <path
                          d="M10.5039 0.0708008C8.42266 0.328613 6.51016 1.10205 4.78516 2.38174C4.08204 2.90674 2.91016 4.07861 2.38516 4.78174C1.09141 6.52549 0.327351 8.4333 0.0695389 10.5474C-0.0101486 11.2411 -0.0101486 12.7599 0.0695389 13.4536C0.327351 15.5677 1.09141 17.4755 2.38516 19.2192C2.91016 19.9224 4.08204 21.0942 4.78516 21.6192C6.52891 22.913 8.43673 23.6771 10.5508 23.9349C11.2445 24.0146 12.7633 24.0146 13.457 23.9349C15.5711 23.6771 17.4789 22.913 19.2227 21.6192C19.9258 21.0942 21.0977 19.9224 21.6227 19.2192C22.9164 17.4755 23.6805 15.5677 23.9383 13.4536C24.018 12.7599 24.018 11.2411 23.9383 10.5474C23.6805 8.4333 22.9164 6.52549 21.6227 4.78174C21.0977 4.07861 19.9258 2.90674 19.2227 2.38174C17.4789 1.08799 15.5711 0.323925 13.457 0.0661125C12.7867 -0.0135746 11.1695 -0.00888824 10.5039 0.0708008ZM13.5508 1.5708C15.2711 1.8333 16.8977 2.51299 18.332 3.57705C18.9039 4.00361 20.0008 5.10049 20.4274 5.67236C21.2758 6.8208 21.8477 8.00205 22.1945 9.3333C22.4524 10.3224 22.5227 10.8989 22.5227 12.0005C22.5227 13.1021 22.4524 13.6786 22.1945 14.6677C21.7117 16.5146 20.8352 18.0333 19.4383 19.4349C18.0367 20.8317 16.518 21.7083 14.6711 22.1911C13.682 22.4489 13.1055 22.5192 12.0039 22.5192C10.9024 22.5192 10.3258 22.4489 9.33673 22.1911C7.48985 21.7083 5.9711 20.8317 4.56954 19.4349C3.17266 18.0333 2.2961 16.5146 1.81329 14.6677C1.55548 13.6786 1.48516 13.1021 1.48516 12.0005C1.48516 10.8989 1.55548 10.3224 1.81329 9.3333C2.2961 7.48643 3.17266 5.96767 4.56954 4.56611C6.40235 2.73799 8.48829 1.76768 11.1836 1.48174C11.568 1.44424 13.0727 1.50049 13.5508 1.5708Z"
                          fill="url(#paint0_linear_81_12885)"
                        />
                        <path
                          d="M6.76758 7.96907C6.20977 8.07219 5.42227 8.48001 5.14102 8.81751C4.87852 9.12688 4.86915 9.53469 5.11758 9.82063C5.42227 10.1628 5.79727 10.1581 6.27071 9.80188C6.68321 9.49251 6.9504 9.40344 7.38165 9.43157C7.75196 9.45501 8.0004 9.56282 8.36133 9.84876C8.60508 10.0409 8.8254 10.1066 9.05508 10.0597C9.25196 10.0222 9.45821 9.86751 9.54727 9.68938C9.6504 9.49251 9.64571 9.13157 9.5379 8.95813C9.32696 8.63469 8.67071 8.20813 8.1129 8.04407C7.79883 7.95032 7.09571 7.91282 6.76758 7.96907Z"
                          fill="url(#paint1_linear_81_12885)"
                        />
                        <path
                          d="M16.1848 7.97423C15.6926 8.0586 15.1817 8.30235 14.7692 8.64923C14.4738 8.89298 14.3848 9.05235 14.3848 9.32423C14.3848 9.59141 14.4832 9.80235 14.6707 9.9336C14.9707 10.1492 15.3035 10.1211 15.6457 9.84923C16.0067 9.56329 16.2551 9.45548 16.6254 9.43204C17.0567 9.40391 17.3238 9.49298 17.7363 9.80235C18.2098 10.1586 18.5848 10.1633 18.8895 9.8211C19.1379 9.53516 19.1285 9.12735 18.866 8.81798C18.6738 8.58829 18.1113 8.2461 17.6942 8.10079C17.2582 7.95079 16.6113 7.89454 16.1848 7.97423Z"
                          fill="url(#paint2_linear_81_12885)"
                        />
                        <path
                          d="M5.29996 12.6055C5.19684 12.657 5.09371 12.7742 5.0234 12.9055C4.91559 13.1211 4.91559 13.1305 4.96715 13.7445C5.04684 14.7148 5.22496 15.4039 5.59996 16.2289C6.35465 17.8883 7.90621 19.2945 9.64528 19.8992C10.5078 20.1992 10.9765 20.2695 12.0031 20.2695C13.0297 20.2695 13.4984 20.1992 14.3609 19.8992C16.1 19.2945 17.6515 17.8883 18.4062 16.2289C18.7812 15.4039 18.9593 14.7148 19.039 13.7445C19.0906 13.1305 19.0906 13.1211 18.9828 12.9055C18.9125 12.7742 18.8093 12.657 18.7062 12.6055C18.5515 12.5211 18.2984 12.5164 12.0031 12.5164C5.70778 12.5164 5.45465 12.5211 5.29996 12.6055ZM17.5343 14.0492C17.5343 14.1992 17.3562 14.8742 17.2297 15.2023C16.7328 16.5195 15.6922 17.6492 14.4172 18.2633C12.8703 19.0086 11.1359 19.0086 9.58903 18.2633C8.31403 17.6492 7.2734 16.5195 6.77653 15.2023C6.64996 14.8742 6.47184 14.1992 6.47184 14.0492C6.47184 13.9742 6.76715 13.9695 12.0031 13.9695C17.239 13.9695 17.5343 13.9742 17.5343 14.0492Z"
                          fill="url(#paint3_linear_81_12885)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_81_12885"
                          x1="9.39408"
                          y1="1.18977"
                          x2="28.7951"
                          y2="11.3011"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_81_12885"
                          x1="6.77001"
                          y1="8.04761"
                          x2="8.85417"
                          y2="10.4344"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_81_12885"
                          x1="16.2175"
                          y1="8.04336"
                          x2="18.3094"
                          y2="10.4314"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_81_12885"
                          x1="10.4648"
                          y1="12.8982"
                          x2="18.1054"
                          y2="20.1594"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <clipPath id="clip0_81_12885">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_81_12893)">
                        <path
                          d="M9.975 1.3312C5.175 2.17495 4.85625 2.28745 4.14375 3.0937C3.2625 4.1062 3.09375 4.9312 3.39375 6.67495C3.61875 7.98745 3.7125 8.1562 4.0875 8.21245C4.5 8.2687 4.51875 8.2312 4.4625 7.19995L4.40625 6.11245L5.15625 5.7187C6 5.2687 6.375 4.68745 6.375 3.82495C6.375 3.5062 6.4875 3.1312 6.6375 3.0187C6.76875 2.9062 8.56875 2.51245 10.6125 2.13745C14.4938 1.46245 15.0375 1.46245 15.2625 2.1937C15.3938 2.6812 16.6875 10.0687 16.6875 10.4062C16.6875 10.6125 16.4813 10.6875 16.0125 10.6875C14.8688 10.6875 13.9875 11.4 13.7625 12.5062C13.7063 12.8437 13.5938 13.125 13.5188 13.125C13.3125 13.125 5.34375 11.7375 5.26875 11.6812C5.23125 11.6625 5.1 11.0999 4.9875 10.4625C4.8 9.4312 4.725 9.2812 4.33125 9.22495C3.9 9.14995 3.9 9.1687 4.03125 10.3125L4.1625 11.4562L2.94375 11.325C1.85625 11.2125 1.70625 11.25 1.5375 11.5687C1.29375 12.0187 0 19.2 0 20.1C0 20.6625 0.09375 20.7937 0.525 20.9625C0.80625 21.075 3.9375 21.675 7.48125 22.2937C14.3063 23.475 14.5125 23.4937 14.7375 22.5937L14.85 22.1437L15.6375 22.5375C16.6875 23.0812 18.5625 23.1187 19.5938 22.5937C20.9438 21.9187 20.3625 21.2625 18.9188 21.825C16.5188 22.7812 14.0625 21 14.0625 18.3187C14.0625 17.5312 14.175 17.1375 14.55 16.575C15.2625 15.5437 15.525 15.3937 16.6875 15.375C17.25 15.375 17.925 15.2437 18.1875 15.1125C19.3313 14.475 21.375 16.5562 21.375 18.3562C21.375 18.675 21.2063 19.3687 21 19.8937C20.5688 20.9625 20.7188 21.45 21.3375 21.075C22.275 20.4937 22.5188 17.7937 21.75 16.3125C21.375 15.5625 19.9688 14.25 19.5563 14.25C19.425 14.25 19.3125 14.2125 19.3125 14.1562C19.3125 14.0062 20.6063 6.7687 20.7188 6.2437C20.7938 5.9437 21 5.7937 21.525 5.69995C22.65 5.4937 23.1938 5.1187 23.6063 4.2562C24.0938 3.26245 24.15 1.7812 23.7 1.61245C23.5312 1.5562 22.6875 1.49995 21.825 1.49995C20.1188 1.49995 19.2938 1.76245 18.9375 2.4562C18.825 2.66245 18.45 4.3687 18.1125 6.2437L17.5125 9.63745L16.8938 5.99995C16.5375 3.9937 16.1438 2.06245 15.975 1.72495C15.4313 0.506199 14.7938 0.468699 9.975 1.3312ZM23.0813 3.0562C22.7625 4.4437 22.1063 4.87495 20.325 4.87495C19.2188 4.87495 19.2188 4.87495 19.5 3.6562C19.7438 2.62495 20.0813 2.43745 21.7688 2.43745H23.2125L23.0813 3.0562ZM19.8188 6.22495C19.7625 6.4687 19.4438 8.17495 19.125 10.0312C18.8063 11.8687 18.45 13.5375 18.3563 13.725C18.075 14.2312 17.55 14.4375 16.425 14.4375C15.5438 14.4375 15.3563 14.3625 15.0188 13.95C14.5313 13.3125 14.5125 12.5625 15 12.0562C15.3375 11.6812 15.9188 11.5312 17.5312 11.4C18.0938 11.3437 18.0938 11.325 18.4313 9.56245C19.1813 5.6062 19.125 5.81245 19.5375 5.81245C19.8375 5.81245 19.8938 5.9062 19.8188 6.22495ZM8.25 13.1437C12.6188 13.9125 13.875 14.1937 14.1938 14.4937L14.6063 14.8687L14.1188 15.5062C13.65 16.1062 13.6313 16.125 13.3688 15.7687C13.0875 15.3562 12.0563 15.0937 11.4 15.2625C11.1562 15.3187 10.1438 15.9562 9.13125 16.6687L7.29375 17.9625L6.75 17.4187C6.45 17.1 6.01875 16.875 5.7375 16.875C5.30625 16.875 4.06875 17.625 1.8375 19.2562C1.3125 19.6312 0.9375 19.8 0.9375 19.6687C0.9375 19.35 2.04375 12.9562 2.175 12.5062C2.23125 12.3375 2.38125 12.1875 2.49375 12.1875C2.625 12.1875 5.2125 12.6187 8.25 13.1437ZM12.825 16.6125C13.05 16.9125 13.1625 17.5312 13.1813 18.4312C13.2 19.4062 13.3313 20.0062 13.6313 20.5687C13.9313 21.1312 14.025 21.5437 13.95 21.9375C13.875 22.2375 13.8188 22.5 13.8 22.5C12.5625 22.3312 9.8625 21.7312 9.76875 21.6187C9.7125 21.5062 9.24375 20.8312 8.7375 20.1C8.23125 19.35 7.8375 18.7312 7.89375 18.6937C7.93125 18.6562 8.775 18.0562 9.75 17.3812C11.7375 15.9937 12.3375 15.8437 12.825 16.6125ZM7.29375 19.7062C8.41875 21.3 8.56875 21.5812 8.2125 21.5062C7.96875 21.45 6.45 21.1687 4.81875 20.8875C3.20625 20.6062 1.89375 20.3625 1.9125 20.3437C2.5125 19.8375 5.56875 17.8125 5.7375 17.8125C5.86875 17.8125 6.5625 18.675 7.29375 19.7062Z"
                          fill="url(#paint0_linear_81_12893)"
                        />
                        <path
                          d="M3.50625 13.3124C2.86875 13.8187 2.68125 14.7749 3.09375 15.5437C3.7875 16.8937 5.83125 16.7812 6.3375 15.3749C6.5625 14.7562 6.3 13.6687 5.79375 13.2562C5.25 12.8249 4.10625 12.8437 3.50625 13.3124Z"
                          fill="url(#paint1_linear_81_12893)"
                        />
                        <path
                          d="M10.275 8.23125C8.75625 8.5125 7.4625 8.79375 7.3875 8.86875C7.18125 9.075 7.4625 9.5625 7.8 9.5625C8.4375 9.5625 13.4062 8.5875 13.575 8.4375C13.8 8.2125 13.575 7.6875 13.275 7.70625C13.1437 7.725 11.7937 7.95 10.275 8.23125Z"
                          fill="url(#paint2_linear_81_12893)"
                        />
                        <path
                          d="M10.5938 9.86249C7.725 10.3875 7.6875 10.4062 7.6875 10.7812C7.6875 10.95 7.8 11.1187 7.93125 11.1562C8.04375 11.2125 9.46875 11.0062 11.0625 10.725C13.65 10.2562 13.9688 10.1625 13.9688 9.84374C13.9688 9.31874 13.4625 9.31874 10.5938 9.86249Z"
                          fill="url(#paint3_linear_81_12893)"
                        />
                        <path
                          d="M15.9187 16.4438C15.5812 16.8188 15.45 19.4063 15.7312 20.1001C16.05 20.9626 16.7062 20.9626 18.4312 20.1376C21 18.8813 21.075 18.0938 18.75 16.8938C17.1937 16.0688 16.3312 15.9376 15.9187 16.4438Z"
                          fill="url(#paint4_linear_81_12893)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_81_12893"
                          x1="9.3916"
                          y1="1.84663"
                          x2="28.2467"
                          y2="12.3355"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_81_12893"
                          x1="4.26102"
                          y1="13.121"
                          x2="7.12933"
                          y2="14.6136"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_81_12893"
                          x1="9.80107"
                          y1="7.79719"
                          x2="11.3649"
                          y2="10.5839"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_81_12893"
                          x1="10.1447"
                          y1="9.53667"
                          x2="11.5338"
                          y2="12.1907"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_81_12893"
                          x1="17.4756"
                          y1="16.3725"
                          x2="21.3096"
                          y2="18.4767"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <clipPath id="clip0_81_12893">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <path
                        d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z"
                        stroke="url(#paint0_linear_81_12902)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"
                        stroke="url(#paint1_linear_81_12902)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 19V23"
                        stroke="url(#paint2_linear_81_12902)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 23H16"
                        stroke="url(#paint3_linear_81_12902)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="20"
                        cy="4.94727"
                        r="3.4"
                        stroke="url(#paint4_linear_81_12902)"
                        stroke-width="1.2"
                      />
                      <path
                        d="M21.2333 5.14727L19.9 6.14727C19.7352 6.27087 19.5 6.15328 19.5 5.94727V3.94727C19.5 3.74125 19.7352 3.62366 19.9 3.74727L21.2333 4.74727C21.3667 4.84727 21.3667 5.04727 21.2333 5.14727Z"
                        fill="url(#paint5_linear_81_12902)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_81_12902"
                          x1="11.3472"
                          y1="14.3106"
                          x2="17.2248"
                          y2="12.9979"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_81_12902"
                          x1="10.4769"
                          y1="18.5568"
                          x2="19.1655"
                          y2="11.5134"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_81_12902"
                          x1="12.3912"
                          y1="22.803"
                          x2="13.4025"
                          y2="22.6713"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_81_12902"
                          x1="11.1296"
                          y1="23.9508"
                          x2="11.5773"
                          y2="22.0846"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_81_12902"
                          x1="19.1296"
                          y1="8.55333"
                          x2="25.6"
                          y2="5.18141"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_81_12902"
                          x1="20.7176"
                          y1="3.59499"
                          x2="18.8822"
                          y2="4.23264"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_81_12911)">
                        <path
                          d="M1.76797 0.135979L1.61328 0.271917V9.14065V18.0094L1.76797 18.1453L1.91797 18.2813H3.18359H4.44453L4.45859 19.575L4.47266 20.8688L4.62734 21.0047L4.77734 21.1406H6.04297H7.30391L7.31797 22.4344L7.33203 23.7281L7.48672 23.8641L7.63672 24H14.8555H22.0742L22.2242 23.8641L22.3789 23.7281V14.8594V5.99066L22.2242 5.85472L22.0742 5.71878H20.8086H19.5477L19.5336 4.42503L19.5195 3.13129L19.3648 2.99535L19.2148 2.85941H17.1898H15.1602L13.7305 1.42973L12.2961 4.19617e-05H7.10703H1.91797L1.76797 0.135979ZM11.3023 3.15004C11.3164 5.08597 11.3258 5.28284 11.4008 5.39535C11.5508 5.62034 11.593 5.62503 13.6602 5.62503H15.6055V11.4375V17.25H9.13672H2.66797V9.14065V1.03129H6.98047H11.2883L11.3023 3.15004ZM13.8477 3.09379L15.3008 4.54691H13.8336H12.3711V3.09379C12.3711 2.29222 12.3758 1.64066 12.3852 1.64066C12.3898 1.64066 13.0508 2.29222 13.8477 3.09379ZM18.4648 12V20.1094H11.9961H5.52734V19.1953V18.2813H10.9414H16.3555L16.5055 18.1453L16.6602 18.0094L16.6742 11.2875C16.6789 7.59378 16.6742 4.51878 16.6602 4.46253C16.6461 4.4016 16.5383 4.24691 16.4164 4.12035L16.2008 3.89066H17.3352H18.4648V12ZM21.3242 14.8594V22.9688H14.8555H8.38672V22.0547V21.1406H13.8008H19.2148L19.3648 21.0047L19.5195 20.8688L19.5336 13.8094L19.543 6.75003H20.4336H21.3242V14.8594Z"
                          fill="url(#paint0_linear_81_12911)"
                        />
                        <path
                          d="M4.6273 8.71406C4.49136 8.83594 4.47261 8.87813 4.47261 9.09375C4.47261 9.30938 4.49136 9.35156 4.6273 9.47344L4.7773 9.60938H9.1648H13.5523L13.6882 9.47344C13.8054 9.35625 13.8242 9.3 13.8242 9.09375C13.8242 8.8875 13.8054 8.83125 13.6882 8.71406L13.5523 8.57813H9.1648H4.7773L4.6273 8.71406Z"
                          fill="url(#paint1_linear_81_12911)"
                        />
                        <path
                          d="M4.6273 14.4328C4.49136 14.5547 4.47261 14.5969 4.47261 14.8125C4.47261 15.0281 4.49136 15.0703 4.6273 15.1922L4.7773 15.3281H9.1648H13.5523L13.6882 15.1922C13.8054 15.075 13.8242 15.0188 13.8242 14.8125C13.8242 14.6063 13.8054 14.55 13.6882 14.4328L13.5523 14.2969H9.1648H4.7773L4.6273 14.4328Z"
                          fill="url(#paint2_linear_81_12911)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_81_12911"
                          x1="9.73687"
                          y1="1.18186"
                          x2="27.485"
                          y2="9.18446"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_81_12911"
                          x1="8.13098"
                          y1="8.62891"
                          x2="8.54318"
                          y2="10.5769"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_81_12911"
                          x1="8.13098"
                          y1="14.3477"
                          x2="8.54318"
                          y2="16.2956"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#016DEA" />
                          <stop offset="1" stop-color="#FA0101" />
                        </linearGradient>
                        <clipPath id="clip0_81_12911">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <img
                      src="Send Message.png"
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* please write your comment here */}

            {/* entity name */}
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
              <div className="flex gap-3 ">
                <div>
                  <img src="logo2.png" alt="" />
                </div>
                {/* 2nd div */}
                <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                  <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                    <span className="font-bold">{"<Entity Name>"}</span>
                    <img src="dots.png" alt="" className="cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between ">
                    <span className="text-gray-500 font-semibold">
                      Ut sit nunc egestas ante. Dictum arcu eget eros ac. Duis
                      ut malesuada ut lacus.
                    </span>
                    <img
                      src="reportVisitor.png"
                      alt=""
                      className="mt-[-20px] mr-[-10px] cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="vedioPlayer.png "
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[95%] ml-[5%] p-2 border-b-2 border-gray-200">
                <div className="flex gap-5">
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    React
                  </span>
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    Reply
                  </span>
                </div>
                <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                  <span>29-March-2024 11:30 AM |</span>
                  <div className="flex gap-1">
                    <img
                      src="Reactions.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>100</span>
                  </div>
                  <div className="flex">
                    <img
                      src="replies.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            {/* entity name */}

            {/* animals story zoo */}
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
              <div className="flex gap-3 ">
                <div>
                  <img src="zooProfile.png" alt="" />
                </div>
                {/* 2nd div */}
                <div className=" p-4 border border-gray-200 rounded-lg shadow-md w-[100%]">
                  <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                    <span className="font-bold">{"Aminalz Story Zoo"}</span>
                    <img src="dots.png" alt="" className="cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between p-2 ">
                    <span className="text-gray-500 font-semibold">
                      Suspendisse vitae mi a nunc. Sed amet
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <img src="card 1.png" alt="" className="cursor-pointer" />
                    <img src="card 2.png" alt="" className="cursor-pointer" />
                    <img src="card 3.png" alt="" className="cursor-pointer" />
                    <img src="card 4.png" alt="" className="cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[95%] ml-[5%] p-2 ">
                <div className="flex gap-5">
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    React
                  </span>
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    Reply
                  </span>
                </div>
                <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                  <span>29-March-2024 11:30 AM |</span>
                  <div className="flex gap-1">
                    <img
                      src="Reactions.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>100</span>
                  </div>
                  <div className="flex">
                    <img
                      src="replies.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            {/* animals story zoo */}

            {/* Dr. Ahmad Hassan */}
            <div className="w-[100%]  flex flex-col gap-3 mt-4">
              <div className="flex gap-3 h-[100%]">
                <div className="flex flex-col h-[100%] ">
                  <img src="Proflile Type.png" alt="" className="w-[70px]" />
                  <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg"></div>
                </div>
                {/* 2nd div */}
                <div className=" ">
                  <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                    <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                      <span className="font-bold">Dr. Ahmad Hassan</span>
                      <img src="dots.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="text-gray-500 font-semibold p-2">
                        Ut purus pretium nibh fringilla cursus adipiscing odio
                        vitae. Vehicula amet elit libero mauris ac sit nisl amet
                        iaculis elementum.
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {photos.map((item, i) => {
                        return (
                          <img
                            src={item.img}
                            alt=""
                            className="cursor-pointer"
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%] p-2">
                    <div className="flex gap-5">
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        React
                      </span>
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        Reply
                      </span>
                    </div>
                    <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                      <span>29-March-2024 11:30 AM |</span>
                      <div className="flex gap-1">
                        <img
                          src="Reactions.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>100</span>
                      </div>
                      <div className="flex">
                        <img
                          src="replies.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%] p-2">
                    <img src="Size B.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dr.Ahmad Hassan */}

            {/* Dr. Sofia Ibrahim */}
            <div className="w-[100%] flex flex-col gap-3 ">
              <div className="flex gap-3 h-[100%]">
                <div className="flex flex-col h-[100%] ">
                  <img src="icon-user.png" alt="" className="w-[70px]" />
                  <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg"></div>
                </div>
                {/* 2nd div */}
                <div className=" ">
                  <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                    <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                      <span className="font-bold">Dr. Sofia Ibrahim</span>
                      <img src="dots.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="text-gray-500 font-semibold p-2">
                        Ut purus pretium nibh fringilla cursus adipiscing odio
                        vitae. Vehicula amet elit libero mauris ac sit nisl amet
                        iaculis elementum.
                      </span>
                    </div>
                    <div className="flex ">
                      <img src="photo1.png" alt="" className="cursor-pointer" />
                      <img src="vid1.png" alt="" className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%] p-2">
                    <div className="flex gap-5">
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        React
                      </span>
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        Reply
                      </span>
                    </div>
                    <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                      <span>29-March-2024 11:30 AM |</span>
                      <div className="flex gap-1">
                        <img
                          src="Reactions.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>100</span>
                      </div>
                      <div className="flex">
                        <img
                          src="replies.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%] p-2">
                    <img src="Size B.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dr. Sofia Ibrahim */}

            {/* personal Name */}
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
              <div className="flex gap-3 ">
                <div>
                  <img src="personal-name.png" alt="" />
                </div>
                {/* 2nd div */}
                <div className=" p-4 border border-gray-200 rounded-lg shadow-md w-[100%]">
                  <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                    <span className="font-bold">{"<Personal Name>"}</span>
                    <img src="dots.png" alt="" className="cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between p-2 ">
                    <span className="text-gray-500 font-semibold">
                      Suspendisse vitae mi a nunc. Sed amet
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[95%] ml-[5%] p-2 ">
                <div className="flex gap-5">
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    React
                  </span>
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    Reply
                  </span>
                </div>
                <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                  <span>29-March-2024 11:30 AM |</span>
                  <div className="flex gap-1">
                    <img
                      src="Reactions.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>100</span>
                  </div>
                  <div className="flex">
                    <img
                      src="replies.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            {/* personal Name */}

            {/* personal info */}
            <div className="w-[100%] flex flex-col gap-3 ">
              <div className="flex gap-3 h-[100%]">
                <div className="flex flex-col h-[100%] ">
                  <img src="personal-name.png" alt="" className="w-[70px]" />
                  <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg"></div>
                </div>
                {/* 2nd div */}
                <div className=" ">
                  <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                    <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                      <span className="font-bold">{"<Personal Name>"}</span>
                      <img src="dots.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="text-gray-500 font-semibold p-2">
                        Ut purus pretium nibh fringilla cursus adipiscing odio
                        vitae. Vehicula amet elit libero mauris ac sit nisl amet
                        iaculis elementum.
                      </span>
                    </div>
                    <div className="flex ">
                      <img src="photo1.png" alt="" className="cursor-pointer" />
                      <div className="flex flex-wrap">
                        <img src="vid.png" alt="" className="cursor-pointer" />
                        <img
                          src="photo.png"
                          alt=""
                          className="cursor-pointer"
                        />
                        <img src="vid.png" alt="" className="cursor-pointer" />
                        <img
                          src="photo.png"
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%] p-2">
                    <div className="flex gap-5">
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        React
                      </span>
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        Reply
                      </span>
                    </div>
                    <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                      <span>29-March-2024 11:30 AM |</span>
                      <div className="flex gap-1">
                        <img
                          src="Reactions.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>100</span>
                      </div>
                      <div className="flex">
                        <img
                          src="replies.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%] p-2">
                    <img src="Size B.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* personal info */}

            {/* Dr. sofia Ibrahim again */}
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
              <div className="flex gap-3 ">
                <div>
                  <img src="icon-user.png" alt="" />
                </div>
                {/* 2nd div */}
                <div className=" p-4 border border-gray-200 rounded-lg shadow-md w-[100%]">
                  <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                    <span className="font-bold">{"Dr. Sofia Ibrahim"}</span>
                    <img src="dots.png" alt="" className="cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between p-2 ">
                    <span className="text-gray-500 font-semibold">
                      Suspendisse vitae mi a nunc. Sed amet
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[95%] ml-[5%] p-2 ">
                <div className="flex gap-5">
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    React
                  </span>
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    Reply
                  </span>
                </div>
                <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                  <span>29-March-2024 11:30 AM |</span>
                  <div className="flex gap-1">
                    <img
                      src="Reactions.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>100</span>
                  </div>
                  <div className="flex">
                    <img
                      src="replies.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Dr. sofia Ibrahim again */}

            {/* Animals Story Zoo */}
            <div className="w-[100%]  flex flex-col gap-3 mt-4">
              <div className="flex gap-3 h-[100%]">
                <div className="flex flex-col h-[100%] ">
                  <img src="zooProfile.png" alt="" className="w-[70px]" />
                  <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg"></div>
                </div>
                {/* 2nd div */}
                <div className=" ">
                  Hassan
                  <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                    <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                      <span className="font-bold">Animalz Story Zoo</span>
                      <img src="dots.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="text-gray-500 font-semibold p-2">
                        Ut purus pretium nibh fringilla cursus adipiscing odio
                        vitae. Vehicula amet elit libero mauris ac sit nisl amet
                        iaculis elementum.
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {photos.map((item, i) => {
                        return (
                          <img
                            src={item.img}
                            alt=""
                            className="cursor-pointer"
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%] p-2">
                    <div className="flex gap-5">
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        React
                      </span>
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        Reply
                      </span>
                    </div>
                    <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                      <span>29-March-2024 11:30 AM |</span>
                      <div className="flex gap-1">
                        <img
                          src="Reactions.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>100</span>
                      </div>
                      <div className="flex">
                        <img
                          src="replies.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%] p-2">
                    <img src="Size B.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Animals Story Zoo */}

            {/* Entity Name */}
            <div className="w-[100%] flex flex-col gap-3 ">
              <div className="flex gap-3 h-[100%]">
                <div className="flex flex-col h-[100%] ">
                  <img src="logo2.png" alt="" className="w-[70px]" />
                  <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg"></div>
                </div>
                {/* 2nd div */}
                <div className=" ">
                  <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
                    <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                      <span className="font-bold">Entity Name</span>
                      <img src="dots.png" alt="" className="cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between ">
                      <span className="text-gray-500 font-semibold p-2">
                        Ut purus pretium nibh fringilla cursus adipiscing odio
                        vitae. Vehicula amet elit libero mauris ac sit nisl amet
                        iaculis elementum.
                      </span>
                    </div>
                    <div className="flex ">
                      <img src="photo1.png" alt="" className="cursor-pointer" />
                      <img src="vid1.png" alt="" className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%] p-2">
                    <div className="flex gap-5">
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        React
                      </span>
                      <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                        Reply
                      </span>
                    </div>
                    <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                      <span>29-March-2024 11:30 AM |</span>
                      <div className="flex gap-1">
                        <img
                          src="Reactions.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>100</span>
                      </div>
                      <div className="flex">
                        <img
                          src="replies.png"
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[50%] p-2">
                    <img src="Size B.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Entity Name */}

            {/* Dr Ahmad hassan audio */}
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
              <div className="flex gap-3 ">
                <div>
                  <img src="Proflile Type.png" alt="" />
                </div>
                {/* 2nd div */}
                <div className=" p-4 border border-gray-200 rounded-lg shadow-md w-[100%]">
                  <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                    <span className="font-bold">{"Dr. Ahmad Hassan"}</span>
                    <img src="dots.png" alt="" className="cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between p-2 ">
                    <span className="text-gray-500 font-semibold">
                      <img src="audio.png" alt="" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[95%] ml-[5%] p-2 ">
                <div className="flex gap-5">
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    React
                  </span>
                  <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                    Reply
                  </span>
                </div>
                <div className="flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                  <span>29-March-2024 11:30 AM |</span>
                  <div className="flex gap-1">
                    <img
                      src="Reactions.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>100</span>
                  </div>
                  <div className="flex">
                    <img
                      src="replies.png"
                      alt=""
                      className="cursor-pointer h-[20px]"
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
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
                <Cards/>             
              </div>

            {/* Similar Jobs from same v-Employer */}

            <div className="flex gap-2 p-2 px-[20px]  items-center">
                  <span className=" cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-700 to-pink-700  text-transparent bg-clip-text ">
                  Similar Jobs From other V-Employer
                  </span>
                  <div className="w-[64%] h-[3px] border-gradient  "></div>
               
                </div>
        
            {/* Similar Jobs from same v-Employer */}
            <div className="w-[97%] p-5 m-auto rounded-lg border border-gray-200 shadow-lg">
                <EntityCards/>             
              </div>

          </div>
        </>
    )
}

export default WrapperLeft;