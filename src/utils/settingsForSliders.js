import {ArrowLeft} from "svgComponents/ArrowLeft";
import {ArrowRight} from "svgComponents/ArrowRight";
import {OutNextArrow} from "svgComponents/OutNextArrow";
import {OutPrevArrow} from "svgComponents/OutPrevArrow";

export const settingsParticipant = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                dots: true,
                arrows: false
            }
        },
    ]
};

export const settingsWinners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 810,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

export const settingsVideos = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft/> ,
    nextArrow: <ArrowRight/>
}

export const switchesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <OutNextArrow />,
    nextArrow: <OutPrevArrow />
}

export const settingsStars = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

export const settingsOrganizers = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
};

export const settingsPrize = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export const settingsForSwipeSlider = {
    spaceBetween: 24,
    freeMode: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        600: {
            spaceBetween: 24,
            freeMode: true,
            slidesPerView: 'auto',
        },
        320: {
            freeMode: false,
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
};