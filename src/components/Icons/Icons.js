export const LikeIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_3766_16493)">
                <path
                    d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0Z"
                    fill="url(#paint0_linear_3766_16493)"
                ></path>
                <path
                    d="M18.243 11.007C18.507 11.1915 18.75 11.3745 18.75 12.018C18.75 12.663 18.4065 12.924 18.039 13.1055C18.189 13.35 18.237 13.6455 18.1725 13.9245C18.057 14.4405 17.5845 14.841 17.1645 14.9595C17.346 15.2505 17.403 15.537 17.187 15.8895C16.9095 16.332 16.668 16.5 15.6 16.5H11.25C9.768 16.5 9 15.681 9 15V11.4975C9 9.6525 11.2005 8.085 11.2005 6.8025L11.0415 5.205C11.034 5.1075 11.0535 4.869 11.1285 4.8C11.2485 4.6815 11.58 4.5 12.081 4.5C12.408 4.5 12.6255 4.5615 12.882 4.6845C13.7535 5.1 13.98 6.1515 13.98 6.9975C13.98 7.404 13.359 8.622 13.275 9.0435C13.275 9.0435 14.5755 8.7555 16.0935 8.745C17.685 8.736 18.717 9.03 18.717 10.008C18.717 10.3995 18.3885 10.7925 18.243 11.007ZM5.4 10.5H6.6C6.8387 10.5 7.06761 10.5948 7.2364 10.7636C7.40518 10.9324 7.5 11.1613 7.5 11.4V17.1C7.5 17.3387 7.40518 17.5676 7.2364 17.7364C7.06761 17.9052 6.8387 18 6.6 18H5.4C5.16131 18 4.93239 17.9052 4.7636 17.7364C4.59482 17.5676 4.5 17.3387 4.5 17.1V11.4C4.5 11.1613 4.59482 10.9324 4.7636 10.7636C4.93239 10.5948 5.16131 10.5 5.4 10.5Z"
                    fill="white"
                ></path>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_3766_16493"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#18AFFF"></stop>
                    <stop offset="1" stopColor="#0062DF"></stop>
                </linearGradient>
                <clipPath id="clip0_3766_16493">
                    <rect width="24" height="24" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

export const NoCommentIcon = ({ className, width = '8.0rem', height = '8.0rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.86014 69.5677C9.77214 71.2173 12.4201 71.7133 14.8761 71.8285C19.7801 72.0157 24.7497 70.4317 28.5865 67.3597C28.5865 70.9757 28.5823 74.5922 28.5737 78.2093C28.5737 78.7405 29.4569 78.9373 29.4585 78.3261C29.4585 74.8445 29.4623 71.3634 29.4697 67.8829C29.4697 67.3933 29.4697 66.9053 29.4697 66.4157C29.4697 66.0653 29.0009 65.7389 28.7065 66.0013C23.9849 70.1709 17.0217 72.0685 10.9001 70.2845C9.66174 69.8781 8.36414 69.2365 7.68574 68.0781C6.98334 67.0013 6.79934 65.4893 7.72734 64.4813C8.89534 63.2109 10.8121 63.3853 12.3673 63.7101C13.1993 63.8541 13.9673 64.2189 14.8121 64.2941C18.9721 64.8189 23.1417 63.3581 26.4921 60.9421C28.4893 59.5261 30.2659 57.8223 31.7641 55.8861C31.8041 55.8381 31.8009 55.7757 31.8297 55.7261C31.8529 55.6718 31.8559 55.6111 31.8383 55.5548C31.8207 55.4985 31.7837 55.4503 31.7337 55.4189C31.6777 55.3132 31.5831 55.2331 31.4696 55.1953C31.3561 55.1574 31.2324 55.1647 31.1241 55.2157C23.2585 53.0637 21.2505 42.6797 25.0281 36.2333C27.8873 31.6813 33.0745 28.7933 38.3753 28.2637C45.8953 27.5325 53.1561 31.7165 55.6873 38.9501C57.4681 43.9757 56.0761 49.9277 52.3929 53.7517C51.9183 54.2358 51.4004 54.6755 50.8457 55.0653C50.8118 55.0811 50.7818 55.1042 50.7578 55.1329C50.7338 55.1616 50.7164 55.1953 50.7069 55.2315C50.6975 55.2678 50.6961 55.3056 50.703 55.3424C50.7098 55.3792 50.7247 55.4141 50.7465 55.4445C51.74 56.8575 52.9526 58.1031 54.3385 59.1341C56.2001 60.5378 58.3485 61.5134 60.6305 61.991C62.9126 62.4686 65.2719 62.4366 67.5401 61.8973C68.0857 61.7501 68.6345 61.6221 69.1849 61.4973C70.1529 61.2765 71.2089 60.9373 72.1273 61.3085C72.4986 61.4656 72.8303 61.7033 73.0985 62.0044C73.3666 62.3054 73.5645 62.6623 73.6777 63.0493C74.2057 64.7229 73.3097 66.3677 72.0265 67.4077C67.3449 70.8205 60.3721 70.8893 55.5465 67.7085C55.0566 67.381 54.5874 67.0235 54.1417 66.6381C53.9561 66.4781 53.3081 66.4541 53.3097 66.8109L53.3673 78.3933C53.3673 78.8253 54.3273 78.8733 54.3273 78.4509C54.3081 74.8701 54.29 71.2893 54.2729 67.7085C59.1993 71.3357 66.2985 71.5933 71.6169 68.6205C73.0569 67.7757 74.3641 66.5709 74.7129 64.8637C75.0969 62.9821 74.0057 61.0765 72.1097 60.6141C70.9289 60.3261 69.7577 60.6861 68.6073 60.9485C68.0793 61.0717 67.5497 61.1917 67.0297 61.3405C64.1781 61.9857 61.1986 61.7631 58.4744 60.7013C55.7503 59.6395 53.4061 57.787 51.7433 55.3821C56.2569 52.0029 58.1833 46.0301 57.1257 40.5709C56.5945 38.0893 55.3529 35.7709 53.7801 33.7949C46.6649 25.1005 32.4233 25.7869 25.3961 34.2397C23.3689 36.5645 22.4201 39.6205 22.2809 42.6685C21.8361 48.2301 25.0521 54.2605 30.6601 55.7645C26.9657 60.1837 21.5401 63.8525 15.5513 63.4717C15.0809 63.4413 14.6105 63.3837 14.1465 63.3117C13.7833 63.1805 13.4121 63.0765 13.0377 62.9789C11.7929 62.6589 10.4009 62.4173 9.12414 62.6877C5.54334 63.4493 5.46014 67.3789 7.86014 69.5677V69.5677Z"
                fill="#808B9A"
            ></path>
            <path
                d="M22.1448 12.9811C22.5506 13.1359 22.975 13.2365 23.4072 13.2803C22.6072 14.1667 22.6072 15.6195 24.0744 15.6275C26.052 15.4291 28.0056 14.9443 29.9224 14.4243C33.7304 13.3436 37.3657 11.7275 40.7192 9.62431C41.9992 8.82431 43.4232 7.96031 44.3448 6.72351C44.9944 8.80351 43.884 10.9491 42.5656 12.5203C37.3925 12.9131 32.3981 14.585 28.0312 17.3859C27.2312 17.8963 26.4312 18.4451 25.9512 19.2787C25.5224 20.0179 25.4712 21.0083 25.9512 21.7363C26.4984 22.5619 27.5704 22.6339 28.46 22.5139C30.233 22.2412 31.9463 21.6671 33.5256 20.8163C32.8413 21.2431 32.2023 21.7384 31.6184 22.2947C31.2648 22.6307 30.9 22.9827 30.7128 23.4451C30.2888 24.4611 31.0328 25.2931 32.0888 25.1859C33.0264 25.0803 33.8856 24.6179 34.7592 24.2851C37.096 23.2854 39.3224 22.0451 41.4024 20.5843C41.212 22.0547 39.8536 23.0819 38.8952 24.1043C38.22 24.7763 37.5197 25.4216 36.7944 26.0403C36.696 26.1136 36.6295 26.2217 36.6084 26.3425C36.5872 26.4633 36.6131 26.5876 36.6808 26.6899C36.7597 26.784 36.8718 26.8442 36.9938 26.8582C37.1158 26.8722 37.2386 26.8389 37.3368 26.7651C38.1528 26.0643 38.9405 25.3331 39.7 24.5715C40.8488 23.3427 42.7064 21.8387 42.2712 19.9555C43.756 18.7907 45.2344 17.3267 45.5144 15.3875C45.7112 14.1635 45.1816 12.5347 43.7416 12.4915C45.1128 10.6755 46.236 7.89471 44.916 5.77151C45.4472 4.52511 45.42 2.74751 44.2424 1.87871C41.756 0.598714 36.4248 1.54591 33.7432 2.23071C29.7016 3.24991 23.38 5.46271 20.988 9.00671C19.9176 10.5251 20.3992 12.2931 22.1448 12.9811V12.9811ZM32.82 20.1603C31.6416 20.759 30.3899 21.2006 29.0968 21.4739C28.1752 21.6835 26.5912 21.9331 26.5464 20.5683C26.4904 19.0451 28.7624 18.0195 29.8904 17.3123C33.5083 15.258 37.5102 13.97 41.6472 13.5283C40.2897 14.8595 38.8466 16.1006 37.3272 17.2435C35.9112 18.3379 34.42 19.3603 32.82 20.1603V20.1603ZM40.6056 20.0195C38.2803 21.643 35.761 22.969 33.1064 23.9667C32.636 24.1267 32.188 24.3667 31.6952 24.2243C31.6616 24.2243 31.5976 24.1507 31.6008 24.1667C31.1656 23.6867 32.5944 22.6435 32.9368 22.3347C34.9486 20.7305 37.4201 19.8107 39.9912 19.7091C40.2904 19.6979 40.644 19.6739 40.932 19.7907L40.6056 20.0195ZM43.0296 13.4131C43.412 13.3907 43.8296 13.3459 44.1288 13.5859C44.9016 14.3475 44.6216 15.6755 44.172 16.5459C43.6232 17.6099 42.7208 18.4499 41.7608 19.1843C41.3821 18.9072 40.9209 18.7662 40.452 18.7843C38.4725 18.7748 36.5189 19.2343 34.7512 20.1251C36.9096 18.8211 38.8776 17.2275 40.7736 15.5763C41.5552 14.9056 42.2917 14.184 42.9784 13.4163L43.0296 13.4131ZM21.3816 10.9091C21.3592 10.8339 21.3896 10.9091 21.3928 10.9555C21.3896 10.9395 21.3848 10.9235 21.3816 10.9091ZM43.5096 6.32031C42.9864 6.96991 42.3128 7.47551 41.6296 7.94751C37.0464 11.0872 31.8711 13.2595 26.42 14.3315C25.7437 14.4648 25.0632 14.58 24.3784 14.6771C24.2125 14.7157 24.0394 14.7107 23.876 14.6627C23.8968 14.6627 23.836 14.6131 23.8504 14.6355C23.8365 14.6212 23.8257 14.6041 23.8188 14.5854C23.8119 14.5666 23.809 14.5466 23.8104 14.5267C23.8568 14.0019 24.2808 13.6419 24.652 13.3219C27.5832 13.2035 30.412 12.2643 33.1544 11.2931C33.2103 11.2721 33.2615 11.2403 33.3051 11.1995C33.3487 11.1587 33.3838 11.1097 33.4085 11.0553C33.4331 11.0009 33.4468 10.9422 33.4488 10.8826C33.4508 10.8229 33.441 10.7634 33.42 10.7075C33.399 10.6516 33.3672 10.6004 33.3263 10.5568C33.2855 10.5132 33.2366 10.4781 33.1822 10.4534C33.1278 10.4288 33.0691 10.4151 33.0094 10.4131C32.9497 10.4111 32.8903 10.4209 32.8344 10.4419C30.5704 11.2595 28.2744 11.9955 25.8872 12.3075C29.599 9.42867 33.9134 7.42573 38.508 6.44831C39.3784 6.26591 40.2552 6.12085 41.1384 6.01311C41.5768 5.96031 42.0184 5.91391 42.46 5.88191C42.9016 5.84991 43.3448 5.82271 43.732 6.01311C43.6632 6.11551 43.5912 6.21791 43.5096 6.32031V6.32031ZM21.348 10.4739C21.3539 10.3967 21.369 10.3204 21.3928 10.2467C21.364 10.3923 21.3928 10.2467 21.4104 10.2003C21.4709 10.0302 21.5442 9.86498 21.6296 9.70591L21.6904 9.59391C21.708 9.56351 21.7976 9.42591 21.7144 9.55231C22.6856 8.04671 24.252 7.05791 25.7816 6.19231C30.1768 3.88671 35.0488 2.46271 40.004 2.19231C41.0661 2.13716 42.1309 2.22324 43.1704 2.44831C43.8104 2.55231 44.1496 3.10111 44.2504 3.68671C44.3372 4.18136 44.3032 4.68966 44.1512 5.16831C42.9512 4.70431 41.5992 5.05471 40.364 5.19551C34.4496 6.05884 28.894 8.55759 24.324 12.4099C23.3128 12.3795 22.0488 12.2499 21.5064 11.2707H21.5144C21.3996 11.021 21.3428 10.7487 21.348 10.4739V10.4739Z"
                fill="#808B9A"
            ></path>
            <path
                d="M21.5146 11.2793C21.5258 11.3033 21.5418 11.3225 21.553 11.3465C21.5642 11.3705 21.5658 11.3321 21.5146 11.2793Z"
                fill="#808B9A"
            ></path>
            <path
                d="M43.4456 47.0799C41.4909 47.5294 39.6007 48.224 37.82 49.1471C37.6392 49.2415 37.436 49.4799 37.508 49.6991C37.58 49.9183 37.8616 49.8895 38.0248 49.8047C39.7363 48.9219 41.5522 48.2586 43.4296 47.8303C43.8824 47.7327 44.1112 46.9551 43.4456 47.0799V47.0799Z"
                fill="#808B9A"
            ></path>
            <path
                d="M33.4683 38.8797V41.2797C33.4683 42.5149 35.3883 42.5181 35.3883 41.2797V38.8797C35.3883 37.6477 33.4683 37.6461 33.4683 38.8797Z"
                fill="#808B9A"
            ></path>
            <path
                d="M44.689 38.8797V41.2797C44.689 42.5149 46.609 42.5181 46.609 41.2797V38.8797C46.609 37.6477 44.689 37.6461 44.689 38.8797Z"
                fill="#808B9A"
            ></path>
        </svg>
    );
};

export const CloseIcon = ({ className, width = '2.0rem', height = '1.5rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            ></path>
        </svg>
    );
};

export const SearchIcon = ({ className, width = '2.2rem', height = '2.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            data-e2e=""
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
            ></path>
        </svg>
    );
};

export const BellIcon = ({ className, width = '2.2rem', height = '2.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
            ></path>
        </svg>
    );
};

export const HomeIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
            ></path>
        </svg>
    );
};

export const RoadmapIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path
                fill="currentColor"
                d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"
            ></path>
        </svg>
    );
};

export const PostIcon = ({ className, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"
            ></path>
        </svg>
    );
};

export const PrevArrowIcon = ({ className, width = '0.8rem', height = '1.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            ></path>
        </svg>
    );
};

export const NextArrowIcon = ({ className, width = '0.8rem', height = '1.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
        </svg>
    );
};

export const BookMarkIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
            ></path>
        </svg>
    );
};

export const OptionIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
        >
            <path
                fill="currentColor"
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            ></path>
        </svg>
    );
};

export const PrevPageIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
            ></path>
        </svg>
    );
};

export const NextPageIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
            ></path>
        </svg>
    );
};

export const VideoIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
            ></path>
        </svg>
    );
};

export const TickIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            ></path>
        </svg>
    );
};

export const TimeIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
            ></path>
        </svg>
    );
};

export const UsersIcon = ({ className, width = '1.8rem', height = '1.4rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
        >
            <path
                fill="currentColor"
                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
            ></path>
        </svg>
    );
};

export const ActivedBookmarkIcon = ({ className, width = '1.2rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path
                fill="currentColor"
                d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
            ></path>
        </svg>
    );
};

export const EditIcon = ({ className, width = '1.4rem', height = '1.4rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
            ></path>
        </svg>
    );
};

export const YoutubeSocialIcon = ({ className, width = '2.8rem', height = '3.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"
            ></path>
        </svg>
    );
};

export const FacebookSocialIcon = ({ className, width = '2.8rem', height = '3.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
            ></path>
        </svg>
    );
};

export const FacebookIcon = ({ className, width = '1.8rem', height = '1.8rem' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 18 18">
            <path
                d="m17.007 0h-16.014a.993.993 0 0 0 -.993.993v16.014a.993.993 0 0 0 .993.993h8.628v-6.961h-2.343v-2.725h2.343v-2a3.274 3.274 0 0 1 3.494-3.591 19.925 19.925 0 0 1 2.092.106v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.73h2.7l-.351 2.725h-2.364v6.964h4.593a.993.993 0 0 0 .993-.993v-16.014a.993.993 0 0 0 -.993-.993z"
                fill="#4267b2"
            />
            <path
                d="m28.586 24.041v-6.961h2.349l.351-2.725h-2.7v-1.734c0-.788.22-1.322 1.35-1.322h1.443v-2.434a19.924 19.924 0 0 0 -2.095-.106 3.27 3.27 0 0 0 -3.491 3.591v2h-2.343v2.73h2.343v6.961z"
                fill="#fff"
                transform="translate(-16.172 -6.041)"
            />
        </svg>
    );
};

export const TiktokSocialIcon = ({ className, width = '2.8rem', height = '3.2rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            ></path>
        </svg>
    );
};

export const ParticipationIcon = ({ className, width = '1.8rem', height = '1.4rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
        >
            <path
                fill="currentColor"
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
            ></path>
        </svg>
    );
};

export const UserIcon = ({ className, width = '2.0rem', height = '2.0rem' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 20 20">
            <path
                d="M10 11c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m0-9C7.79 2 6 3.79 6 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10.9c2.97 0 6.1 1.46 6.1 2.1v1.1H3.9V15c0-.64 3.13-2.1 6.1-2.1m0-9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2"
                fillOpacity=".54"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const GithubIcon = ({ className, width = '2.0rem', height = '2.0rem' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 20 20">
            <path
                d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026A9.555 9.555 0 0110 4.836a9.59 9.59 0 012.504.337c1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48A10 10 0 0020 10c0-5.522-4.478-10-10-10"
                fill="#191717"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const GoogleIcon = ({ className, width = '1.8rem', height = '1.8rem' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 18 18">
            <g transform="">
                <g fillRule="evenodd">
                    <path
                        d="m17.64 9.2a10.341 10.341 0 0 0 -.164-1.841h-8.476v3.481h4.844a4.14 4.14 0 0 1 -1.8 2.716v2.264h2.909a8.777 8.777 0 0 0 2.687-6.62z"
                        fill="#4285f4"
                    />
                    <path
                        d="m9 18a8.592 8.592 0 0 0 5.956-2.18l-2.909-2.258a5.43 5.43 0 0 1 -8.083-2.852h-3.007v2.332a9 9 0 0 0 8.043 4.958z"
                        fill="#34a853"
                    />
                    <path
                        d="m3.964 10.71a5.321 5.321 0 0 1 0-3.42v-2.332h-3.007a9.011 9.011 0 0 0 0 8.084z"
                        fill="#fbbc05"
                    />
                    <path
                        d="m9 3.58a4.862 4.862 0 0 1 3.44 1.346l2.581-2.581a8.649 8.649 0 0 0 -6.021-2.345 9 9 0 0 0 -8.043 4.958l3.007 2.332a5.364 5.364 0 0 1 5.036-3.71z"
                        fill="#ea4335"
                    />
                </g>
                <path d="m0 0h18v18h-18z" fill="none" />
            </g>
        </svg>
    );
};

export const ErrorIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
            ></path>
        </svg>
    );
};

export const HeartIcon = ({ className, width = '2.0rem', height = '2.0rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            ></path>
        </svg>
    );
};

export const RedHeartIcon = ({ className, width = '2.0rem', height = '2.0rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            ></path>
        </svg>
    );
};

export const CommentIcon = ({ className, width = '2.0rem', height = '2.0rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
            ></path>
        </svg>
    );
};
