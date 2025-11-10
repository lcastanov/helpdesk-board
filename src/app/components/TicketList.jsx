'use client';

import TicketCard from "./TicketCard";

// DONE DONE DONE
export default function TicketList({tickets, addToQueue, inQueue}) {
    return (
        <div>
            <h2 className="page-title">Tickets</h2>
            <div className="ticket-div">
                {tickets.map((t) => (
                    <li key={t.id}>
                        <TicketCard
                        id={t.id}
                        title={t.title}
                        description={t.description}
                        priority={t.priority}
                        status={t.status}
                        assignee={t.assignee}
                        updatedAt={t.updatedAt}
                        addToQueue={addToQueue}
                        inQueue={inQueue}/>
                    </li>
                ))}
            </div>
        </div>
    );
}
