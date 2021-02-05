import React from 'react';
import front from '../../imges/frontpage_element_laptop.jpg'
const Repair = () => {
    return (
        <section id="repair">
            <div className="tie">
                <div className="heading-2">
                <h2>Truck Trailer Service & Repair TTSR</h2>
                </div>
                <div className="repair-wrapper">
                    <div className="repair-item">
                        <h3>Keep deliveries on time with TTSR</h3>
                        <p>When was the last time you were in for a service? Don’t let a breakdown mess with<br />your business! Regular servicing prevents small inexpensive problems from turning<br />into major hassles and expenses.</p>
                        <p>As much as you wish your truck keeps rolling on and on—sometimes things happen.<br />Don’t worry though, we are here to help. Whether it’s something small nagging at you<br />or an old part that needs replacement, we will get you back on track as quickly as<br />possible.</p>
                    </div>
                    <div className="repair-item">
                        <img src={front} alt="front" className="resize"/>
                    </div>
                    <div className="repair-item extra">
                    <img src={front} alt="front" className="resize"/>
                    </div>
                    <div className="repair-item">
                        <p>We want to help keep your truck in the best working condition possible. Whether<br />you’re a single-truck operation or you’ve got 50 of them on the road, we can handle<br />what you throw at us. We have the capability as well as the right people with the righ<br /> know-how to keep you on the road.</p>
                        <p>Our services include but are not limited to; Inspections, General Repairs, Brakes<br />System, Transmission Repair, Engine Repair, as well as Navigations and Electrical<br />repairs to ensure you have the best operator rating possible. What more? We can<br />also help manage your Scheduled Services and Maintenance records through our<br />online booking system—allowing us to plan ahead together while saving time and<br />money.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Repair;