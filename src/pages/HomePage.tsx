
const HomePage = () => {

    return (
        <div className={'relative bg-black'}>
            <div className={'bg-black h-screen w-screen relative'}>
                <video autoPlay loop muted
                       className={'w-screen h-screen object-cover absolute top-0 left-0 z-0 blur-sm filter backdrop-filter'}>
                    <source src={'/hp-video.mp4'} type={'video/mp4'}/>
                </video>
                <div
                    className={'absolute top-0 left-0 w-full h-full bg-black opacity-70 flex flex-col justify-end p-8 pb-24'}>
                    <h1 className={'text-5xl text-white '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at eros libero.</h1>
                </div>
            </div>
            <div className={'pl-4 p-12'}>
                <p>At FitImpulz, we put our members' fitness first. We've designed a facility complemented by today’s
                    most
                    popular fitness equipment. Whether your fitness plan is geared for weight loss or body building, our
                    equipment will suit your needs. Our fitness center features a wide range of classes and
                    well-maintained
                    amenities like locker rooms and showers. Visit us to discover our range of offerings.

                </p>
            </div>
        </div>
    )
}

export default HomePage
