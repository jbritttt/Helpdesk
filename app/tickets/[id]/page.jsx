

async function getTickets(id) {
    const res = await fetch('http://localhost:4000/tickets'/ + id, {
        //revalidate data based on options added (30seconds) would be every 30seconds whilst 0 means he data will never be cached and will always be fresh
      next: {
        revalidate: 60 
      }
    })
  
    return res.json()
  }


export default async function TicketsDetails ({params}) {

    const ticket = await getTickets(params.id)
  return (
    <main>
        <nav>
            <h2>
                Test ticket
            </h2>

        </nav>

<div class="card">
    <h3>{ticket.title}</h3>
    <small>created by {ticket.user_email}</small>
    <p>{ticket.body}</p>
    <div className="ticket-btn">{ticket.priority}</div>
  




</div>
    </main>
  )
}
