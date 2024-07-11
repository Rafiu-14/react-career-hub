import Banner from "../Banner/Banner";
import FeturedJobs from "../FeturedJobs/FeturedJobs";
import JobCatagoryList from "../JobCatagoryList/JobCatagoryList";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <JobCatagoryList></JobCatagoryList>
            <FeturedJobs></FeturedJobs>
        </div>
    );
};

export default Home;