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


    // How tickets show based on filter
    const setStatus = (status) =>
        setFilters(prev => ({...prev, status}))
    const setPriority = (priority) =>
        setFilters(prev => ({...prev, priority}))

    const visibleTickets = useMemo(() => {
        let filt = tickets 
        if (filters.status === 'All')
            filt = filt.filter(t => t.status === filters.status)
        if (filters.status === 'All')
            filt = filt.filter(t => t.priority === filters.priority)
    return filt; }, [tickets, filters, search, loading, error])
    

    // Status
    const isEmpty = !loading && !error && visibleProducts.length === 0;

    return (
        <section className="grid grid-cols-1 gap-6">
            <div>
                <StatusFilter value={filters.status} options={filters} onChange={setStatus}/>
                {/* <PriorityFilter value={filters.priority} options={priorities} onChange={setPriority}/> */}
                <SearchBox/>
                <MyQueueSummary/>
            </div>
            <StatusMessage loading={loading} error={error} isEmpty={isEmpty}/>
            <TicketList tickets={visibleTickets} inQueue={inQueue} onAdd={onAdd}/>
        </section>
        
    );
    
}