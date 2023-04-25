import React from 'react';

const CategoryActivitiesSelection = ({ activities }) => {
    console.log("IN CATEGORY ACTIVITIES " + JSON.stringify(activities));
    const categories = [...new Set(activities.map(activity => activity.category))];
    return (
        <>
            <div className="container">
                <h2>Recent Activities</h2>
                <div className="row">
                    {activities.map((activity) => (
                        <div className="col-md-4" key={activity.title}>
                            <div className="card mb-4 shadow-sm">
                                <img
                                    className="card-img-top"
                                    src={activity.imageUrl}
                                    alt="Card cap"
                                />
                                <div className="card-body">
                                    <p className="card-text">{activity.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">{activity.category}</small>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Activity Categories</h2>
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-md-4" key={category}>
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{category}</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit arcu in erat tincidunt, nec rutrum risus sagittis. Nunc accumsan massa sed nisi tincidunt consequat. </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View Activities</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit Category</button>
                                        </div>
                                        <small className="text-muted">{activities.filter(activity => activity.category === category).length} Activities</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryActivitiesSelection;
