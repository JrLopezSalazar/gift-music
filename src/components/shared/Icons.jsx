import React from "react";

const PlaylistIcon = ({ color = "white" }) => {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.47619 5.12211H15.9524M8.47619 0.916748H15.9524M1 14.0001H15.9524M1 9.32746H15.9524"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 0.916748L4.7381 3.25306L1 5.58937V0.916748Z"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8749 2.375H5.54159C5.12166 2.375 4.71893 2.54181 4.422 2.83875C4.12507 3.13568 3.95825 3.53841 3.95825 3.95833V15.0417C3.95825 15.4616 4.12507 15.8643 4.422 16.1613C4.71893 16.4582 5.12166 16.625 5.54159 16.625H11.8749M15.0416 9.5L11.8749 6.33333M15.0416 9.5L11.8749 12.6667M15.0416 9.5H7.12492"
        stroke="white"
        className="group-hover:stroke-yellow-border"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MinimalPlayIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.41591 14.6094C4.21205 14.6091 4.0118 14.5556 3.83485 14.4544C3.43642 14.2286 3.18872 13.7903 3.18872 13.3145V3.68561C3.18872 3.20848 3.43642 2.77152 3.83485 2.54574C4.01601 2.44163 4.22181 2.38809 4.43074 2.39072C4.63966 2.39335 4.84405 2.45205 5.02253 2.56068L13.2519 7.4867C13.4234 7.59424 13.5648 7.74358 13.6628 7.92071C13.7608 8.09784 13.8122 8.29696 13.8122 8.49939C13.8122 8.70183 13.7608 8.90095 13.6628 9.07808C13.5648 9.25521 13.4234 9.40455 13.2519 9.51209L5.0212 14.4394C4.83855 14.5499 4.62934 14.6086 4.41591 14.6094Z"
        fill="white"
        className="group-hover:fill-yellow-border"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10.0546"
        cy="9.19524"
        rx="8.30535"
        ry="8.1469"
        stroke="white"
        strokeWidth="1.69852"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2163 15.7625L18.6426 18.0995"
        stroke="white"
        strokeWidth="1.69852"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AddIcon = () => {
  return (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5713_1903)">
        <path
          d="M9.9751 19.4143C5.5651 19.4143 1.9751 15.8243 1.9751 11.4143C1.9751 7.00431 5.5651 3.41431 9.9751 3.41431C14.3851 3.41431 17.9751 7.00431 17.9751 11.4143C17.9751 15.8243 14.3851 19.4143 9.9751 19.4143ZM9.9751 1.41431C8.66188 1.41431 7.36152 1.67296 6.14826 2.17551C4.93501 2.67806 3.83262 3.41465 2.90403 4.34324C1.02867 6.2186 -0.0249023 8.76214 -0.0249023 11.4143C-0.0249023 14.0665 1.02867 16.61 2.90403 18.4854C3.83262 19.414 4.93501 20.1506 6.14826 20.6531C7.36152 21.1556 8.66188 21.4143 9.9751 21.4143C12.6273 21.4143 15.1708 20.3607 17.0462 18.4854C18.9215 16.61 19.9751 14.0665 19.9751 11.4143C19.9751 10.1011 19.7164 8.80073 19.2139 7.58747C18.7113 6.37422 17.9748 5.27182 17.0462 4.34324C16.1176 3.41465 15.0152 2.67806 13.8019 2.17551C12.5887 1.67296 11.2883 1.41431 9.9751 1.41431Z"
          fill="white"
        />
        <path
          d="M7.92374 15.0001V7.83215C7.92389 7.74246 7.94816 7.65447 7.994 7.57739C8.03985 7.50031 8.10558 7.43698 8.18431 7.39403C8.26305 7.35109 8.35188 7.33011 8.44151 7.33329C8.53113 7.33648 8.61825 7.36372 8.69374 7.41215L14.2697 10.9951C14.3403 11.0404 14.3984 11.1027 14.4387 11.1762C14.4789 11.2498 14.5 11.3323 14.5 11.4161C14.5 11.5 14.4789 11.5825 14.4387 11.6561C14.3984 11.7296 14.3403 11.7919 14.2697 11.8371L8.69374 15.4211C8.61825 15.4696 8.53113 15.4968 8.44151 15.5C8.35188 15.5032 8.26305 15.4822 8.18431 15.4393C8.10558 15.3963 8.03985 15.333 7.994 15.2559C7.94816 15.1788 7.92389 15.0898 7.92374 15.0001Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5713_1903">
          <rect
            width="20.7597"
            height="21.7033"
            fill="white"
            transform="translate(0 0.928711)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconsPlay = () => {
  return (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5713_1891)">
        <path
          d="M9.97583 19.4143C5.56583 19.4143 1.97583 15.8243 1.97583 11.4143C1.97583 7.00431 5.56583 3.41431 9.97583 3.41431C14.3858 3.41431 17.9758 7.00431 17.9758 11.4143C17.9758 15.8243 14.3858 19.4143 9.97583 19.4143ZM9.97583 1.41431C8.66261 1.41431 7.36225 1.67296 6.149 2.17551C4.93574 2.67806 3.83335 3.41465 2.90476 4.34324C1.0294 6.2186 -0.0241699 8.76214 -0.0241699 11.4143C-0.0241699 14.0665 1.0294 16.61 2.90476 18.4854C3.83335 19.414 4.93574 20.1506 6.149 20.6531C7.36225 21.1556 8.66261 21.4143 9.97583 21.4143C12.628 21.4143 15.1715 20.3607 17.0469 18.4854C18.9223 16.61 19.9758 14.0665 19.9758 11.4143C19.9758 10.1011 19.7172 8.80073 19.2146 7.58747C18.7121 6.37422 17.9755 5.27182 17.0469 4.34324C16.1183 3.41465 15.0159 2.67806 13.8027 2.17551C12.5894 1.67296 11.289 1.41431 9.97583 1.41431ZM10.9758 6.41431H8.97583V10.4143H4.97583V12.4143H8.97583V16.4143H10.9758V12.4143H14.9758V10.4143H10.9758V6.41431Z"
          fill="white"
          className="group-hover:fill-yellow-border"
        />
      </g>
      <defs>
        <clipPath id="clip0_5713_1891">
          <rect
            width="20.7597"
            height="21.7033"
            fill="white"
            transform="translate(0.000732422 0.928711)"
          />
        </clipPath>
      </defs>
    </svg>
  );

};


const PencilIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.31586 14.2858H4.76886L12.0036 7.05106L9.55059 4.59806L2.31586 11.8328V14.2858ZM3.62413 12.3757L9.55059 6.44926L10.1524 7.05106L4.22593 12.9775H3.62413V12.3757ZM12.3699 2.70106C12.3094 2.64042 12.2375 2.59231 12.1584 2.55949C12.0793 2.52666 11.9944 2.50977 11.9088 2.50977C11.8231 2.50977 11.7383 2.52666 11.6591 2.55949C11.58 2.59231 11.5081 2.64042 11.4476 2.70106L10.2505 3.89813L12.7035 6.35114L13.9006 5.15407C13.9612 5.09355 14.0093 5.02167 14.0422 4.94254C14.075 4.86341 14.0919 4.77858 14.0919 4.69291C14.0919 4.60723 14.075 4.5224 14.0422 4.44327C14.0093 4.36414 13.9612 4.29226 13.9006 4.23174L12.3699 2.70106Z"
        fill="black"
      />
    </svg>
  );}

  
export {
  PlaylistIcon,
  LogoutIcon,
  MinimalPlayIcon,
  SearchIcon,
  IconsPlay,
  AddIcon,
  PencilIcon,
};
