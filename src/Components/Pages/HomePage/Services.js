import React from 'react';
import pic4 from '../../imges/shutterstock_5258aaa76034-Converted-01.png';
import pic1 from '../../imges/shutterstock_5258aaa76034-Converted-03.png';
import pic3 from '../../imges/shutterstock_5258aaa76034-Converted-07.png';
import pic5 from '../../imges/shutterstock_5258aaa76034-Converted-05.png';
import pic7 from '../../imges/shutterstock_5258aaa76034-Converted-02.png';
import pic9 from '../../imges/shutterstock_5258aaa76034-Converted-06.png';
import pic8 from '../../imges/snow.gif';
// import { StyleSheet, css } from 'aphrodite';
const Services = () => {
    // const styles = StyleSheet.create({
    //     bounce: {
    //       animationName: bounce,
    //       animationDuration: '1s'
    //     }
    //   })
    return (
        <section id="services">
            <div className="tie">
                <div className="heading-2">
                <h2>our services</h2>
                </div>
                <div className="services-wrapper">
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic1} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                        <i class="icofont-repair"></i>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic3} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic4} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic5} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                        <i class="icofont-location-arrow"></i>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic7} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic8} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <img src={pic9} alt=""/>
                        </div>
                        <div className="info-box">
                            <h3>schedule servicing</h3>
                            <p>we offer complete scheduled servicing hassle</p>
                            <p>free & customized to your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;