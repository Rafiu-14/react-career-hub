
const Banner = () => {
    return (
        <div className="pl-10 grid grid-cols-2 bg-[#f9f9ff]">
            <div className="space-y-5 mt-32">
                <h2 className="text-6xl font-bold">
                    One Step <br /> Closer To Your <br />
                    <span className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block text-transparent bg-clip-text"> Dream Job</span>
                </h2>
                <p className="text-[#757575] w-96">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-base font-bold text-white">Get Started</button>
            </div>
            <div className="mt-32 ml-60">
                <img className="w-96" src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;