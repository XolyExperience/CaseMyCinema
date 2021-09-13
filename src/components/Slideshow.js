import React from "react";
import { Link } from "react-router-dom";

const delay = 4500;

function Slideshow(props) {
    const movies = props.data;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === movies.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((item, index) => (
                        <Link
                            to={{
                                pathname: "/movie",
                                items: {
                                    name: item.name,
                                    image: item.image,
                                    shows: item.shows,
                                },
                            }}
                            key={index}
                        >
                            <div
                                className="slide"
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            ></div>
                        </Link>
                    ))}
            </div>
            <div className="slideshowDots">
                {movies.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${
                            index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
