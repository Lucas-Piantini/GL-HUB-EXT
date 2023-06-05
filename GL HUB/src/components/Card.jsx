export const Card = ({ data }) => {
    return (
      <a className="card" href={data.url} target="_blank" rel="noreferrer">
          <img className="icon" src={data.icon} alt="icon" />
          <div className="name">{data.name}</div>
      </a>
    );
  };  