
import * as React from "react";


const Timer = () => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const currentYear = new Date().getFullYear();

    const deadline = new Date(currentYear, 11, 31);

    // const deadline = "December, 31, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    React.useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="mx-6">
                <div className="flex justify-center">

                    <h1 className="animate-pulse max-w-lg mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 py-3 to-black sm:text-4xl text-center">Happy New Year In</h1>
                </div>
                <div className="flex justify-center space-x-8" role="timer">

                    <div className="text-center border-r-2 pr-6 border-green-700">
                        <p className="text-4xl font-bold mb-2" id="day">{days < 10 ? "0" + days : days}</p>
                        <span className="text-xl text-blue-600 font-bold">Days</span>
                    </div>
                    <div className="text-center border-r-2 pr-6 border-green-700">

                        <p id="hour" className="text-4xl font-bold mb-2" >{hours < 10 ? "0" + hours : hours}</p>
                        <span className="text-xl text-green-600 font-bold">Hours</span>
                    </div>
                    <div className="text-center border-r-2 pr-6 border-green-700">

                        <p id="minute" className="text-4xl font-bold mb-2" >{minutes < 10 ? "0" + minutes : minutes}</p>
                        <span className="text-xl text-yellow-600 font-bold">Minutes</span>
                    </div>
                    <div className="text-center">

                        <p id="second" className="text-4xl font-bold mb-2" >{seconds < 10 ? "0" + seconds : seconds}</p>
                        <span className="text-xl text-red-600 font-bold">Seconds</span>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Timer