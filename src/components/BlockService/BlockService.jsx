import s from "./BlockService.module.css";

const BlockService = ({ title, text, isActive }) => {
  return (
    <div className={`${s.blockService} ${isActive ? s.activeSlide : ""}`}>
      <svg
        className={s.icon}
        width="75"
        height="69"
        viewBox="0 0 75 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.2603 3.31401C66.7205 0.774266 62.5491 0.960887 60.2464 3.71728L49.8452 16.167L56.4075 22.7294L68.8573 12.328C71.6133 10.0251 71.7998 5.8536 69.2603 3.31401Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M73.9028 24.605V57.7532C73.9028 63.1243 69.549 67.4796 64.1779 67.4796H55.1842C60.5554 67.4796 64.9091 63.1243 64.9091 57.7532V24.605H73.9028Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0083 19.448C14.6243 19.448 15.9345 18.138 15.9345 16.5219C15.9345 14.9057 14.6243 13.5957 13.0083 13.5957C11.3922 13.5957 10.0822 14.9057 10.0822 16.5219C10.0822 18.138 11.3922 19.448 13.0083 19.448Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.3431 19.448C24.9591 19.448 26.2693 18.138 26.2693 16.5219C26.2693 14.9057 24.9591 13.5957 23.3431 13.5957C21.727 13.5957 20.4169 14.9057 20.4169 16.5219C20.4169 18.138 21.727 19.448 23.3431 19.448Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.6778 19.448C35.2938 19.448 36.604 18.138 36.604 16.5219C36.604 14.9057 35.2938 13.5957 33.6778 13.5957C32.0617 13.5957 30.7515 14.9057 30.7515 16.5219C30.7515 18.138 32.0617 19.448 33.6778 19.448Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.8453 16.1667L56.2503 8.50039C55.8996 8.46215 55.5438 8.44092 55.1828 8.44092H10.825C5.45391 8.44092 1.09863 12.7947 1.09863 18.1673V24.6044H37.8528C40.2049 21.7458 40.8173 18.0068 49.8453 16.1667Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.4089 22.7281C56.2788 23.3797 56.113 24.0044 55.9166 24.6034H64.9091V18.1663C64.9091 17.3709 64.8115 16.5986 64.6314 15.8586L56.4089 22.7281Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.2859 10.6003C69.9313 11.2398 69.4549 11.8272 68.8571 12.3266L64.6299 15.8584C64.8099 16.5984 64.9076 17.3706 64.9076 18.166V24.6032H73.9012V18.166C73.9012 15.1091 72.4905 12.3833 70.2859 10.6003Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.9151 24.605C53.343 32.448 45.3297 35.6858 38.1957 31.7311C35.821 30.4146 35.3606 27.179 37.272 25.2506C37.4792 25.0415 37.6711 24.8258 37.8528 24.605H1.09863V57.7532C1.09863 63.1243 5.45391 67.4796 10.825 67.4796H55.1828C60.554 67.4796 64.9078 63.1243 64.9078 57.7532V24.605H55.9151Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.8459 16.167C40.1205 18.1492 40.1619 22.3352 37.2728 25.2501C35.3615 27.1787 35.8217 30.4141 38.1964 31.7307C45.8752 35.9876 54.574 31.9123 56.4082 22.7294L49.8459 16.167Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.9139 38.6597H13.8416C11.7654 38.6597 10.0822 40.3429 10.0822 42.4192V53.4916C10.0822 55.5678 11.7654 57.251 13.8416 57.251H24.9139C26.9903 57.251 28.6735 55.5678 28.6735 53.4916V42.4192C28.6735 40.3429 26.9903 38.6597 24.9139 38.6597Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.4018 39.2483H37.5253C35.8654 39.2483 34.5198 40.5939 34.5198 42.2538C34.5198 43.9138 35.8654 45.2594 37.5253 45.2594H53.4019C55.0619 45.2594 56.4075 43.9138 56.4075 42.2538C56.4075 40.5939 55.0618 39.2483 53.4018 39.2483Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.4018 50.6514H37.5253C35.8654 50.6514 34.5198 51.997 34.5198 53.6569C34.5198 55.3169 35.8654 56.6625 37.5253 56.6625H53.4019C55.0619 56.6625 56.4075 55.3169 56.4075 53.6569C56.4075 51.9971 55.0618 50.6514 53.4018 50.6514Z"
          stroke="#0077FF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
      <button className={s.btn}>
        Learn more
        <svg
          className={s.arrow}
          width="26"
          height="16"
          viewBox="0 0 26 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H12.5V7H0V9ZM12.5 9H25V7H12.5V9Z"
            fill="#0077FF"
          />
        </svg>
      </button>
    </div>
  );
};

export default BlockService;
