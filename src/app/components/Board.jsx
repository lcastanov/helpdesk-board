'use client';

import { useEffect, useMemo, useState } from 'react';
import TicketCard from './TicketCard';
import TicketList from './TicketList';
import StatusMessage from "./StatusMessage";

export default function Board(params) {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        fetch('/api/tickets')
            .then(r => r.json())
            .then(setTickets)
            .catch(console.error);
    }, [])
    
    return (
        <ul>
            {tickets.map(t => (
                <li key= {t.id}> Title: {t.title} <br/> Description: {t.description} <br/> Priority: {t.priority} <br/> Status: {t.status} <br/> Assignee: {t.assignee} <br/> Updated at: {t.updatedAt}</li>
            ))}
        </ul>
    );
    
}