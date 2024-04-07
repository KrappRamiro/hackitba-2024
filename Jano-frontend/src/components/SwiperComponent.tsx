import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "./swiper.css";
const SwiperComponent = ({ slides }: { slides: any[] }) => {
	return (
		<Swiper
			spaceBetween={50} // Spacing between slides (optional)
			slidesPerView={1} // Number of slides visible at once (optional)
			navigation // Enable navigation arrows (optional)
			className="swiper"
			pagination={{ clickable: true }} // Enable pagination dots (optional)
		>
			{slides.map(
				(
					slide: {
						imageUrl: string | undefined;
						title:
							| string
							| number
							| boolean
							| React.ReactElement<any, string | React.JSXElementConstructor<any>>
							| Iterable<React.ReactNode>
							| null
							| undefined;
					},
					index: React.Key | null | undefined
				) => (
					<SwiperSlide key={index}>
						<div className="bg-gray-800 p-4 rounded-lg flex">
							<div className="flex flex-col min-width">
								<img
									className="w-20 h-20 object-cover rounded-full shadow-lg"
									src={slide.imageUrl} // Replace with your image URL
									alt={slide.title} // Provide alternative text for accessibility
									onError={(event) => {
										const img = event.target as HTMLImageElement; // Type assertion
										img.style.display = "none"; // Hide broken images
									}}
								/>
							</div>
							<div className="items-center">
								<p className="text-lg font-bold">{slide.title}</p>
								<p className="text-xs ">{slide.description}</p>
							</div>
							{/* Image with fallback content */}
						</div>
					</SwiperSlide>
				)
			)}
		</Swiper>
	);
};

export default SwiperComponent;
