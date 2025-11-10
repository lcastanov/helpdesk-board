'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import TicketCard from './TicketCard';
import TicketList from './TicketList';
import StatusMessage from "./StatusMessage";
import PriorityFilter from './PriorityFilter';
import StatusFilter from './StatusFilter';
import MyQueueSummary from './MyQueueSummary';
import SearchBox from './SearchBox';


export default function Board(params) {
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filters, setFilters] = useState({status: 'All', priority: 'All'})
    const [search, setSearch] = useState('')
    const [inQueue, setQueue] = useState({})

    // Fetch
    useEffect(() => {
        fetch('/api/tickets')
            .then(r => r.json())
            .then(setTickets)
            .catch(console.error);
    }, [])
    
    const visibleTickets = tickets

    // Queue
    const onAdd = useCallback((id) => {
        setQueue(prevQueue => ({
            ...prevQueue,
            [id]: true
        }));
    }, []);

    const onRemove = useCallback((id) => {
        setQueue(prevQueue => ({
            ...prevQueue,
            [id]: true
        }));
    }, []);

    const onClear = useCallback(() => {
        setQueue({});
    }, []);

    const isEmpty = !loading && !error && visibleProducts.length === 0;

    return (
        <section className="grid grid-cols-1 gap-6">
            <ul>
            </ul>
            <StatusMessage loading={loading} error={error} isEmpty={isEmpty}/>
            <TicketList tickets={visibleTickets} addToQueue={onAdd}/>
        </section>
        
    );
    
}