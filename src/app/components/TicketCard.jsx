'use client';

export default function TicketCard({id, title, description, priority, status, assignee, updatedAt, addToQueue}) {

    return (
        <div>
            <div>
                <h3 className="font-medium">{title}</h3>
                <span className="hover-title">ID: {id}</span><br/>
            </div>
            <div>
                <p>{description}</p>
                <button className="add-button" onClick={() => addToQueue(id)}>Add to Queue</button>
            </div>
            <div>
                <span>Priority: </span>
                <p className="updatedAt">Updated: {updatedAt}</p>
                <p className="assignee">Assignee: {assignee}</p>
            </div>
        </div>
    )
}