import SwiperComponent from "../components/SwiperComponent";

export default function Alimentation() {
	return (
		<>
			<div>
				<SwiperComponent slides={slides} />
			</div>
		</>
	);
}
const slides = [
	{ imageUrl: "path/to/image1.jpg", title: "Slide 1" },
	{ imageUrl: "path/to/image2.png", title: "Slide 2" },
	{ imageUrl: "path/to/image3.gif", title: "Slide 3" },
];
