import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Teams = () => {
    const [keyword, setKeyword] = useState("");
    const [teams, setTeams] = useState([]);
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/teams").then((res) => {
            setTeams(res.data);
            setFiltered(res.data);
        });
    }, []);

    const searchTerm = (event) => {
        const keyword = event.target.value;
        if (keyword !== "") {
            const list = teams.filter((item) => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            });
            setFiltered(list);
            setKeyword(keyword);
        } else {
            setFiltered(teams);
            setKeyword(keyword);
        }
    };
    return (
        <div className="teams_component">
            <div className="teams_input">
                <input
                    type="text"
                    onChange={(e) => searchTerm(e)}
                    value={keyword}
                    placeholder="Search for a team"
                />
            </div>
            <div className="teams_container">
                <span>
                    {filtered.map((item, index) => (
                        <>
                            <Link to={`/teams/${item.name}`} className="team_item">
                                <img key={item.id} alt={item.name} src={`/images/teams/${item.logo}`} />
                            </Link>
                        </>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default Teams;