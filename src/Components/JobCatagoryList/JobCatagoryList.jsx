
const JobCatagoryList = () => {
    return (
        <div className="mt-20">
            <h1 className="text-center text-5xl font-bold text-black mb-5">Job Category List</h1>
            <p className="text-[#757575] text-center mb-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex space-x-5 justify-center">
                <div className="w-72 h-52 bg-[#f9f9ff] p-11 rounded-md">
                    <img src="/src/assets/images/icon/accounts.png" />
                    <h1 className="text-[#474747] text-xl font-medium">Account & Finance</h1>
                    <p className="text-[#a3a3a3] font-light">300 Jobs Available</p>
                </div>
                <div className="w-72 h-52 bg-[#f9f9ff] p-11 rounded-md">
                    <img src="/src/assets/images/icon/creative.png" />
                    <h1 className="text-[#474747] text-xl font-medium">Creative Design</h1>
                    <p className="text-[#a3a3a3] font-light">100+ Jobs Available</p>
                </div>
                <div className="w-72 h-52 bg-[#f9f9ff] p-11 rounded-md">
                    <img src="/src/assets/images/icon/marketing.png" />
                    <h1 className="text-[#474747] text-xl font-medium">Marketing & Sales</h1>
                    <p className="text-[#a3a3a3] font-light">150+ Jobs Available</p>
                </div>
                <div className="w-72 h-52 bg-[#f9f9ff] p-11 rounded-md">
                    <img src="/src/assets/images/icon/chip.png" />
                    <h1 className="text-[#474747] text-xl font-medium">Engineering Job</h1>
                    <p className="text-[#a3a3a3] font-light">150 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCatagoryList;