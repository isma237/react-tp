import React, { Component } from 'react';
import '../App.css'

class Home extends Component {

    render() {
        const description = this.props.description;
        return (
            <div className='col-lg-3 col-sm-12 mb-1'>
                <div className="card">
                    <img src="https://via.placeholder.com/728x400" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <h6 className="card-title">{description.roomCategory.roomCategoryName}</h6>
                            </div>
                            <div className='col-6 text-right'>
                                <h6 className="card-title">{description.rentCost} FCFA</h6>
                            </div>
                        </div>
                        <ul className='list-inline'>
                            <li className='list-inline-item'><span className='badge bg-success'>S: {description.livingRoomNumber}</span></li>
                            <li className='list-inline-item'><span className='badge bg-primary'>D: {description.showerNumber}</span></li>
                            <li className='list-inline-item'><span className='badge bg-secondary'>C: {description.cookedNumber}</span></li>
                        </ul>
                        <p className='card-text'>Douala- Maképé</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;