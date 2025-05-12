import "./index.scss";

function Cardicones({ data }) {
  console.log(data);
  return (
    <>
      <div className="Iconeindividual">
        <img src={data.img} alt={data.alt} title={data.title} />
      </div>
    </>
  );
}

export default Cardicones;
