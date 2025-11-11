import React from "react";

const Dashboard = ({data}) => {

  const {weather , news , joke} = data

  return (
    <>
    <div>
      <h1 className="head">Dashboard</h1>
      <table className="table-fixed w-[1000px] mx-auto">
        <thead>
        <tr>
          <th>Weather</th>
          <th>News</th>
          <th>Joke</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div>{weather.name}</div>
            <div>{weather.main.temp}</div>
          </td>
          <td>
            <div>{news.articles[0].title}</div>
          </td>
          <td>
            <div>{joke.type}</div>
            <div>{joke.setup}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Dashboard;
