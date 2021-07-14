export default function Homes({ homes }) {
  return (
    <div className="flex flex-wrap">
      {homes.map((home) => (
        <div className="w-1/3 p-5">
          <div className="text-center">
            <h5>{home.name}</h5>
            {
              home.price ?
              <h3>
                ${home.price}
              </h3>
              :
              <h3>
                Price TBC
              </h3>
            }
            {
              home.location ?
              <p>{home.location}</p> : <p>Location: TBC</p>
            }
            <a>View Here</a>
          </div>
        </div>
      ))}
    </div>
  )
}