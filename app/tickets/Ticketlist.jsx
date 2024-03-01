async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");
  //returns a promise
  return res.json();
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
  );
}
