import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="container mx-auto">
        {/* menu titles */}
        <div className="text-center pt-8">
          <p className="text-white text-2xl font-normal">Discover our Menu</p>
          <p className="text-white text-sm font-normal pt-2">
            Delicious Bites, Delivered Fast
          </p>
        </div>

        {/* menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-7 text-white pt-4">
          {/* Card 1 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden">
            <div
              className="bg-cover bg-center w-full h-60"
              style={{
                backgroundImage: `url('/assets/images/beverages.svg')`,
                opacity: 0.6,
              }}
            >
              <div className="p-4 ">
                <div className="flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white mr-2">
                    Beverages
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31501 12.698C2.26501 12.271 2.24001 12.057 2.25101 11.881C2.27775 11.4326 2.45467 11.0062 2.75326 10.6706C3.05186 10.335 3.45474 10.1097 3.89701 10.031C4.07101 10 4.28601 10 4.71701 10H15.284C15.714 10 15.929 10 16.103 10.03C16.5453 10.1087 16.9482 10.334 17.2467 10.6696C17.5453 11.0052 17.7223 11.4316 17.749 11.88C17.759 12.057 17.735 12.27 17.685 12.698L17.284 16.126C17.1269 17.4684 16.4823 18.7064 15.4727 19.6049C14.463 20.5034 13.1586 20.9998 11.807 21H8.19301C6.84144 20.9998 5.53699 20.5034 4.52733 19.6049C3.51766 18.7064 2.8731 17.4684 2.71601 16.126L2.31501 12.698Z"
                      stroke="#F0F0F0"
                      stroke-width="1.25"
                    />
                    <path
                      d="M17 17H19C19.394 17 19.7841 16.9224 20.1481 16.7716C20.512 16.6209 20.8427 16.3999 21.1213 16.1213C21.3999 15.8427 21.6209 15.512 21.7716 15.1481C21.9224 14.7841 22 14.394 22 14C22 13.606 21.9224 13.2159 21.7716 12.8519C21.6209 12.488 21.3999 12.1573 21.1213 11.8787C20.8427 11.6001 20.512 11.3791 20.1481 11.2284C19.7841 11.0776 19.394 11 19 11H17.5"
                      stroke="#F0F0F0"
                      stroke-width="1.25"
                    />
                    <path
                      d="M10 2C9.86866 2.13131 9.76447 2.2872 9.69338 2.45879C9.62229 2.63037 9.58571 2.81427 9.58571 3C9.58571 3.18572 9.62229 3.36963 9.69338 3.54121C9.76447 3.7128 9.86866 3.86869 10 4C10.1314 4.13131 10.2355 4.2872 10.3066 4.45879C10.3777 4.63037 10.4143 4.81427 10.4143 5C10.4143 5.18572 10.3777 5.36963 10.3066 5.54121C10.2355 5.7128 10.1314 5.86869 10 6M5.00001 7.5L5.11601 7.384C5.36161 7.13882 5.51042 6.8132 5.53504 6.46704C5.55966 6.12088 5.45844 5.77747 5.25001 5.5C5.04178 5.22245 4.94069 4.87909 4.9653 4.53298C4.98992 4.18688 5.13859 3.86128 5.38401 3.616L5.50001 3.5M14.5 7.5L14.616 7.384C14.8616 7.13882 15.0104 6.8132 15.035 6.46704C15.0597 6.12088 14.9584 5.77747 14.75 5.5C14.5418 5.22245 14.4407 4.87909 14.4653 4.53298C14.4899 4.18688 14.6386 3.86128 14.884 3.616L15 3.5"
                      stroke="#F0F0F0"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <ul className="mt-2 list-disc list-inside ">
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Chai Tea</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Kenyan Tea</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Dawa Tea</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$500</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Hibiscus</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$600</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">
                        Tangawizi Tea
                      </span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$750</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden">
            <div
              className="bg-cover bg-center w-full h-60"
              style={{
                backgroundImage: `url('/assets/images/soft_drinks.svg')`,
                opacity: 0.6,
              }}
            >
              <div className="p-4 ">
                <div className="flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white mr-2">
                    Soft Drinks
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.0932 5.39999H7.9068C7.56721 5.40024 7.23152 5.47251 6.92192 5.61205C6.61231 5.75158 6.33582 5.9552 6.11071 6.20946C5.88559 6.46372 5.71697 6.76284 5.61597 7.08707C5.51498 7.4113 5.4839 7.75327 5.5248 8.09039L6.9888 20.0904C7.05975 20.6725 7.34134 21.2084 7.78041 21.5971C8.21947 21.9857 8.78563 22.2002 9.372 22.2H14.634C15.2202 22.1999 15.786 21.9853 16.2249 21.5967C16.6637 21.208 16.9451 20.6723 17.016 20.0904L18.4764 8.09039C18.5175 7.75313 18.4865 7.41099 18.3856 7.08659C18.2846 6.76219 18.1158 6.46293 17.8906 6.20861C17.6653 5.95428 17.3886 5.75069 17.0787 5.61129C16.7689 5.4719 16.433 5.39988 16.0932 5.39999ZM7.7616 6.60839C7.81019 6.60261 7.85908 6.59981 7.908 6.59999H16.0944C16.2642 6.59996 16.432 6.63594 16.5868 6.70556C16.7417 6.77519 16.88 6.87688 16.9926 7.0039C17.1052 7.13093 17.1896 7.28041 17.2402 7.44246C17.2908 7.60451 17.3064 7.77546 17.286 7.94399L15.8244 19.944C15.7892 20.235 15.6487 20.5031 15.4294 20.6977C15.2101 20.8922 14.9272 20.9998 14.634 21H9.3708C9.07782 20.9998 8.79504 20.8924 8.57576 20.6981C8.35648 20.5038 8.21585 20.236 8.1804 19.9452L6.7164 7.94519C6.67777 7.62933 6.76617 7.31105 6.96218 7.06035C7.15819 6.80966 7.44574 6.64709 7.7616 6.60839Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M10.7736 17.5764C10.7504 17.6517 10.7127 17.7218 10.6624 17.7825C10.6122 17.8432 10.5505 17.8934 10.4809 17.9303C10.3402 18.0048 10.1757 18.0204 10.0236 17.9736C9.94827 17.9504 9.87824 17.9127 9.81752 17.8624C9.75679 17.8122 9.70655 17.7505 9.66967 17.6809C9.59518 17.5402 9.57961 17.3757 9.6264 17.2236L14.4264 1.6236C14.4496 1.54828 14.4873 1.47825 14.5376 1.41752C14.5878 1.35679 14.6495 1.30656 14.7191 1.26967C14.7888 1.23279 14.865 1.20998 14.9435 1.20256C15.0219 1.19513 15.1011 1.20324 15.1764 1.2264C15.2517 1.24957 15.3217 1.28734 15.3825 1.33757C15.4432 1.3878 15.4934 1.4495 15.5303 1.51914C15.5672 1.58878 15.59 1.66501 15.5974 1.74347C15.6049 1.82192 15.5968 1.90108 15.5736 1.9764L10.7736 17.5764Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M6.6 12C6.44087 12 6.28826 11.9368 6.17574 11.8243C6.06321 11.7118 6 11.5591 6 11.4C6 11.2409 6.06321 11.0883 6.17574 10.9757C6.28826 10.8632 6.44087 10.8 6.6 10.8H17.4C17.5591 10.8 17.7117 10.8632 17.8243 10.9757C17.9368 11.0883 18 11.2409 18 11.4C18 11.5591 17.9368 11.7118 17.8243 11.8243C17.7117 11.9368 17.5591 12 17.4 12H6.6ZM14.8548 2.38201C14.7037 2.34056 14.5747 2.24162 14.4956 2.10634C14.4165 1.97107 14.3934 1.8102 14.4313 1.65813C14.4693 1.50607 14.5652 1.37489 14.6986 1.29264C14.832 1.21039 14.9923 1.1836 15.1452 1.21801L19.9452 2.41801C20.0963 2.45946 20.2253 2.5584 20.3044 2.69367C20.3835 2.82895 20.4066 2.98982 20.3687 3.14188C20.3307 3.29395 20.2348 3.42513 20.1014 3.50738C19.968 3.58963 19.8077 3.61642 19.6548 3.58201L14.8548 2.38201Z"
                      fill="#F0F0F0"
                    />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <ul className="mt-2 list-disc list-inside ">
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Soda 500ml</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Mango juice</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Minute Maid</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$500</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Afya</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$600</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">
                        Del Monte
                      </span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$750</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* card-3 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden">
            <div
              className="bg-cover bg-center w-full h-60"
              style={{
                backgroundImage: `url('/assets/images/sharwarma.svg')`,
                opacity: 0.6,
              }}
            >
              <div className="p-4 ">
                <div className="flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white mr-2">
                    Meals
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99999 8.26348V8.24998C2.99997 6.91656 3.39488 5.61302 4.13489 4.5038C4.8749 3.39458 5.92686 2.52938 7.15805 2.01736C8.38924 1.50534 9.74449 1.36944 11.0528 1.62681C12.3612 1.88417 13.564 2.52327 14.5095 3.46348C15.2534 3.09629 16.0844 2.94191 16.9106 3.01739C17.7367 3.09286 18.526 3.39526 19.191 3.89116C19.8561 4.38707 20.3712 5.05718 20.6793 5.82746C20.9874 6.59773 21.0766 7.43819 20.937 8.25598C21.1422 8.27503 21.3414 8.33618 21.5219 8.43561C21.7025 8.53505 21.8606 8.67063 21.9865 8.8339C22.1123 8.99718 22.2031 9.18463 22.2533 9.38457C22.3034 9.58451 22.3119 9.79264 22.278 9.99598C21.6 14.0745 19.923 16.656 17.25 17.742V18.75C17.25 19.3467 17.0129 19.919 16.591 20.341C16.169 20.7629 15.5967 21 15 21H8.99999C8.40325 21 7.83096 20.7629 7.409 20.341C6.98704 19.919 6.74999 19.3467 6.74999 18.75V17.742C4.07699 16.656 2.39999 14.0745 1.72199 9.99598C1.68927 9.79804 1.69659 9.59556 1.74351 9.4005C1.79043 9.20544 1.876 9.02178 1.99516 8.86039C2.11432 8.69899 2.26465 8.56313 2.43724 8.46086C2.60984 8.35859 2.8012 8.29198 2.99999 8.26498V8.26348ZM4.49999 8.24998H5.99999C5.99999 7.25541 6.39508 6.30159 7.09834 5.59833C7.8016 4.89507 8.75543 4.49998 9.74999 4.49998C10.7446 4.49998 11.6984 4.89507 12.4016 5.59833C13.1049 6.30159 13.5 7.25541 13.5 8.24998H15C15 6.85759 14.4469 5.52223 13.4623 4.53767C12.4777 3.5531 11.1424 2.99998 9.74999 2.99998C8.3576 2.99998 7.02225 3.5531 6.03768 4.53767C5.05311 5.52223 4.49999 6.85759 4.49999 8.24998ZM7.49999 8.24998H12C12 7.65324 11.7629 7.08094 11.341 6.65899C10.919 6.23703 10.3467 5.99998 9.74999 5.99998C9.15325 5.99998 8.58096 6.23703 8.159 6.65899C7.73704 7.08094 7.49999 7.65324 7.49999 8.24998ZM17.799 8.24998H19.4055C19.5187 7.80668 19.5293 7.34339 19.4364 6.8954C19.3434 6.44741 19.1495 6.02655 18.8692 5.66488C18.589 5.3032 18.2299 5.01027 17.8193 4.8084C17.4088 4.60652 16.9575 4.50104 16.5 4.49998C16.14 4.49998 15.798 4.56298 15.48 4.67848C15.7455 5.10448 15.9645 5.56348 16.1325 6.04498C16.4182 5.97412 16.7184 5.98871 16.9959 6.08694C17.2734 6.18517 17.5159 6.36272 17.6934 6.59755C17.8709 6.83238 17.9755 7.11415 17.9942 7.40791C18.013 7.70166 17.9451 7.99446 17.799 8.24998ZM15.75 18H8.24999V18.75C8.24999 18.9489 8.32901 19.1397 8.46966 19.2803C8.61031 19.421 8.80108 19.5 8.99999 19.5H15C15.1989 19.5 15.3897 19.421 15.5303 19.2803C15.671 19.1397 15.75 18.9489 15.75 18.75V18ZM7.72199 16.5H16.278C18.657 15.735 20.163 13.572 20.799 9.74998H3.20099C3.83699 13.572 5.34299 15.735 7.72199 16.5Z"
                      fill="#F0F0F0"
                    />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <ul className="mt-2 list-disc list-inside ">
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Rice</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Potatoes</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Pilau</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$500</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Corn meal</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$600</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">
                        Mashed potatoes
                      </span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$750</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* card-4 */}
          <div className="shadow-xl ring-1 ring-white rounded-md overflow-hidden">
            <div
              className="bg-cover bg-center w-full h-60"
              style={{
                backgroundImage: `url('/assets/images/dessert.svg')`,
                opacity: 0.6,
              }}
            >
              <div className="p-4 ">
                <div className="flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white mr-2">
                    Desserts
                  </h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_12_176)">
                      <path
                        d="M14.25 3C14.0469 3 13.8711 2.92578 13.7227 2.77734C13.5742 2.62891 13.5 2.45312 13.5 2.25C13.5 2.15625 13.5312 2.03516 13.5938 1.88672C13.6562 1.73828 13.7266 1.58203 13.8047 1.41797C13.8828 1.25391 13.9648 1.09766 14.0508 0.949219C14.1367 0.800781 14.2031 0.683594 14.25 0.597656C14.2969 0.683594 14.3594 0.800781 14.4375 0.949219C14.5156 1.09766 14.5977 1.25391 14.6836 1.41797C14.7695 1.58203 14.8438 1.73828 14.9062 1.88672C14.9688 2.03516 15 2.15625 15 2.25C15 2.45312 14.9258 2.62891 14.7773 2.77734C14.6289 2.92578 14.4531 3 14.25 3ZM24 10.5V24H0V10.5L13.5 6V4.125C13.5 4.05469 13.5273 3.99609 13.582 3.94922C13.6367 3.90234 13.707 3.86328 13.793 3.83203C13.8789 3.80078 13.9609 3.78125 14.0391 3.77344C14.1172 3.76562 14.1875 3.75781 14.25 3.75C14.3047 3.75 14.3711 3.75391 14.4492 3.76172C14.5273 3.76953 14.6094 3.78906 14.6953 3.82031C14.7812 3.85156 14.8516 3.89062 14.9062 3.9375C14.9609 3.98438 14.9922 4.04688 15 4.125V5.49609L18 4.5L24 10.5ZM14.25 9C14.1953 9 14.1289 8.99609 14.0508 8.98828C13.9727 8.98047 13.8906 8.96094 13.8047 8.92969C13.7188 8.89844 13.6484 8.85938 13.5938 8.8125C13.5391 8.76562 13.5078 8.70312 13.5 8.625V7.58203L4.74609 10.5H21.8789L17.5898 6.21094L15 7.07812V8.625C15 8.69531 14.9727 8.75391 14.918 8.80078C14.8633 8.84766 14.793 8.88672 14.707 8.91797C14.6211 8.94922 14.5391 8.96875 14.4609 8.97656C14.3828 8.98438 14.3125 8.99219 14.25 9ZM1.5 12V16.5H22.5V12H1.5ZM22.5 22.5V18H1.5V22.5H22.5Z"
                        fill="#F0F0F0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_176">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-center">
                  <ul className="mt-2 list-disc list-inside ">
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Black Forest</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Red Velvet</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$450</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Cookies</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$500</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">Muffins</span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$600</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex-grow text-white">
                        Oriental queen cakes
                      </span>
                      <svg
                        className="h-3 w-24 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="1"
                          x2="100%"
                          y2="1"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                      <span className="ml-2 text-white">$750</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
