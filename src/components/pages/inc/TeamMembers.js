import axios from "axios";

import { useEffect, useState } from "react";

const TeamMembers = () => {
    const URL = 'https://randomuser.me/api/?results=6';
    const [members, setMembers] = useState([]);

    const fetchTeamData = () => {
        return axios.get(URL).then((data) => {
            console.log(data.data.results)
            setMembers((prevList) => data.data.results);
        })
    }

    useEffect(() => {
        fetchTeamData();
    }, [])

    return (<section className='section border-top'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mb-5 text-center'>
                    <h3 className='main-heading'>Our Team Members</h3>
                    <div className='underline mx-auto'></div>
                </div>
                {members.map((member, idx) => {
                    return <div className='col-md-4 mb-5' key={idx}>
                    <div className='card shadow'>
                        <img src={member.picture.large} className='w-50 border-bottom team-dp' alt='Services' />
                        <div className='card-body'>
                            <h4>{member.name.first} {member.name.last}</h4>
                            <div className='underline'></div>
                            <div className="detail">
                                <h6>Designation :</h6>
                                <p>Software Engineer</p>
                            </div>
                            <div className="detail">
                                <h6>Qualification :</h6>
                                <p>B.Tech, M.Tech</p>
                            </div>
                            <div className="detail">
                                <h6>Gender : </h6>
                                <p>{member.gender}</p>
                            </div>
                            <div className="detail">
                                <h6>Location :</h6>
                                <p>{member.location.city}, {member.location.state}, {member.location.postcode}</p>
                            </div>
                            <div className="detail">
                                <h6>Contact Number :</h6>
                                <p>{member.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </section>)
};

export default TeamMembers;