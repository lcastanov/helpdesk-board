'use client';

export default function TicketCard({}) {
    // const ticket = {id, title, description, priority, status, assignee, updatedAt}

    return (
        <div>
            <div>
                <h3 className="card-title">{title}</h3>
                <span className="hover-title">ID: {id}</span>
            </div>
            <button className="add-button">Add to My Queue</button>
        </div>
    )
}