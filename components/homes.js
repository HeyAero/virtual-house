export default function Homes({ homes }) {
  return (
    <>
      {homes.map((home) => (
        <div>
          <h5>{home.name}</h5>
        </div>
      ))}
    </>
  )
}