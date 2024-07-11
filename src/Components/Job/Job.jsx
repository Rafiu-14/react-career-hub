import { MdLocationOn } from "react-icons/md";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact bg-base-100 border border-1px ">
                <figure>
                    <img className="w-28 mr-auto ml-5 mt-2" src={logo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-[#474747]">{job_title}</h2>
                    <p className="text-[#757575] text-lg font-semibold">{company_name}</p>
                    <div className="space-x-2">
                        <button className="border border-1px border-[#9873ff] px-5 py-2 rounded-md bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block text-transparent bg-clip-text font-bold ">{remote_or_onsite}</button>
                        <button className="border border-1px border-[#9873ff] px-5 py-2 rounded-md bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block text-transparent bg-clip-text font-bold ">{job_type}</button>
                    </div>
                    <div className="flex text-[#757575] font-semibold">
                        <p className="flex items-center justify-center gap-1"><MdLocationOn />Location: {location}</p>
                        <p className="flex items-center justify-center gap-1"><HiCurrencyBangladeshi /> Salary: {salary}</p>
                    </div>
                    <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-bold">View Details</button>
                    </Link>
                    </div>
                </div>
        </div>
    );
};

export default Job;