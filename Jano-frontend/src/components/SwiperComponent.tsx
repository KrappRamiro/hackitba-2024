import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const SwiperComponent = ({ slides }: { slides: any[] }) => {
  return (
    <Swiper
      spaceBetween={50} // Spacing between slides (optional)
      slidesPerView={1} // Number of slides visible at once (optional)
      navigation // Enable navigation arrows (optional)
      pagination={{ clickable: true }} // Enable pagination dots (optional)
    >
    {slides.map((slide: { imageUrl: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
        <SwiperSlide key={index}>
            <div className="h-full flex justify-center items-center bg-gray-200">
                {/* Image with fallback content */}
                <img
                    src={slide.imageUrl} // Replace with your image URL
                    alt={slide.title} // Provide alternative text for accessibility
                    onError={(event) => {
                        const img = event.target as HTMLImageElement; // Type assertion
                        img.style.display = 'none'; // Hide broken images
                    }}
                />
                <p className="text-xl font-bold">{slide.title}</p>
            </div>
        </SwiperSlide>
    ))}
    </Swiper>
  );
};

export default SwiperComponent;
