async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        //revalidate data based on options added (30seconds) would be every 30seconds whilst 0 means he data will never be cached and will always be fresh
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  

export default async function Ticketlist() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        <div key={ticket.id} className="card">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className="ticket-btn">{ticket.priority}</div>
        </div>;
      })}

      {tickets.length === 0 && <p> There are no open tickets</p>}
    </>
  )
}
