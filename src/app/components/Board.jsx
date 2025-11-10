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
        let isActive = true
        async function load() {
            try {
                const res = await fetch('/api/tickets')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()
                if (isActive) {
                    setTickets(data)
                    setError(null)
                }
            }   catch (err) {
                if (isActive) {
                    setError('Unable to load tickets')
                    setLoading(false)
                }
            }
        }
        load()
        return () => {isActive = false;};
    }, [])
    
    const visibleTickets = tickets

    // Queue
    const onAdd = useCallback((id) => {
        setQueue(prev => ({
            ...prev,
            [id]: true
        }));
    }, []);

    const onRemove = useCallback((id) => {
        setQueue(prev => {
            const { [id]: _, ...rest} = prev
            return rest
        });
    }, []);

    const onClear = useCallback(() => {
        setQueue({});
    }, []);

    //
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