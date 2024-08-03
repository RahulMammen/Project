import React from 'react'
import { BsFillCalendarFill, BsFillPeopleFill, BsFillBellFill, BsPlusCircle } from 'react-icons/bs'

function Home() {

    const eventData = [
        {
            name: 'Event A',
            registered: 200,
            attendees: 150,
        },
        {
            name: 'Event B',
            registered: 300,
            attendees: 250,
        },
        {
            name: 'Event C',
            registered: 100,
            attendees: 80,
        },
        {
            name: 'Event D',
            registered: 400,
            attendees: 350,
        },
    ]

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>EVENTS</h3>
                        <BsFillCalendarFill className='card_icon' />
                    </div>
                    <h1>10</h1> {/* Dynamic value based on event count */}
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>USERS</h3>
                        <BsFillPeopleFill className='card_icon' />
                    </div>
                    <h1>200</h1> {/* Dynamic value based on user count */}
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>5</h1> {/* Dynamic value based on alert count */}
                </div>
            </div>

            <div className='event-list'>
                <div className='event-list-header'>
                    <h3>Events</h3>
                    <button className='add-event-button'>
                        <BsPlusCircle className='icon' /> Add New Event
                    </button>
                </div>
                <ul className='event-items'>
                    {eventData.map(event => (
                        <li key={event.name} className='event-item'>
                            <div className='event-info'>
                                <h4>{event.name}</h4>
                                <p>Registered: {event.registered}</p>
                                <p>Attendees: {event.attendees}</p>
                            </div>
                            <div className='event-actions'>
                                <button className='edit-button'>Edit</button>
                                <button className='delete-button'>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='user-profile'>
                <button className='manage-users-button'>Manage User Profiles</button>
            </div>
        </main>
    )
}

export default Home
