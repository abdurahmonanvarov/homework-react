import React from 'react'

function AllInfo() {
    return (
        <>
            <div className='info'>
                <div className='info__name'>
                    <h1>Hi, I am John,  Creative Technologist</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <button>Download Resume</button>
                </div>
                <img className='person' src="./public/person.png" alt="person" />

            </div>
            <div className='desc'>
                <div className='salom'>
                    <h2>Recent posts</h2>
                    <span>View all</span>
                </div>


                <div className='solo'>
                    <div className='desc__info'>
                        <h3>Making a design system from scratch</h3>
                        <div className='solo__of'>
                            <h5>12 Feb 2020</h5>
                            <span>|</span>
                            <h5>Design, Pattern</h5>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                        </p>
                    </div>
                    <div className='desc__info'>
                        <h3>Making a design system from scratch</h3>
                        <div className='solo__of'>
                            <h5>12 Feb 2020</h5>
                            <span></span>
                            <h5>Figma, Icon Design</h5>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                        </p>
                    </div>
                </div>
            </div>
            <div className='vidios'>
                <h5>Featured works</h5>
                <div className='vidios__info'>
                    <img src="../public/sxema.png" alt="" />
                    <div className='info__png'>
                        <h2>Designing Dashboards</h2>
                        <div className='png'>
                            <h6>2020</h6>
                            <h4>Dashboard</h4>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                        </p>
                    </div>
                </div>
                <div className='vidios__info'>
                    <img src="../public/girl.png" alt="" />
                    <div className='info__png'>
                        <h2>Designing Dashboards</h2>
                        <div className='png'>
                            <h6>2018</h6>
                            <h4>Illustration</h4>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                        </p>
                    </div>
                </div>
                <div className='vidios__info'>
                    <img src="../public/alogo.png" alt="" />
                    <div className='info__png'>
                        <h2>Designing Dashboards</h2>
                        <div className='png'>
                            <h6>2018</h6>
                            <h4>Typography</h4>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllInfo