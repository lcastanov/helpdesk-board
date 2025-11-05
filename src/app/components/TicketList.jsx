'use client';

import TicketCard from "./TicketCard";

export default function TicketList({tickets, addToQueue, inQueue}) {
    return (
        <div>
            <h2 className="ticket-heading">Tickets</h2>
            <ul>
                {tickets.map((t) => (
                    <li key={t.id}>
                        <TicketCard
                        id={t.id}
                        title={t.title}
                        addToQueue={addToQueue}
                        inQueue={inQueue}
                        />
                    </li>
                ))};
            </ul>
        </div>
    );
}
