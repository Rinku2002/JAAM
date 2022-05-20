import logo from '../images/logo.Bi8fo6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouseLaptop,faMoneyBill1Wave,faChalkboardUser} from '@fortawesome/free-solid-svg-icons'
function Home() {
    return(
        <div className=" mt-5 rounded">
            <div className='bg p-5 rounded'>
                <h1 className='text-center text-primary'><em>Welcome to</em></h1>
                <p className='display-1 fw-bold text-success text-center' >Jaam</p>
                <div className='row'>
                <p className="col col-lg-6 col-sm-10 mx-auto d-block fw-bolder p-4 text-center h6">An online learning platform with many courses and students 
                    enrolled from all over the world. Learn the best programming,
                    web design, development, Machine learning etc.,
                </p>
                </div>
                <div className='row'>
                <img className='col col-lg-6 col-sm-10 d-block mx-auto rounded rounded-' src={logo} />
                </div>
            </div>
            <div className='row container mx-auto'>
                <h2 className='text-center fw-bolder mt-4'>Invest your time in your professional goals with Jaam</h2>
                <p className='text-center' >Learning that gets you Skills for your present (and your future). Get started with us.</p>
            </div>
            <div className='row mt-5 justify-content-center bg-light'>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faHouseLaptop} />
                <h4>Learn anything</h4>
                <p>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                </div>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faMoneyBill1Wave} />
                <h4>Save money</h4>
                <p>Spend less money on your learning if you plan to take multiple courses this year</p>
                </div>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faChalkboardUser} />
                <h4>Flexible learning</h4>
                <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
                </div>
            </div>
        </div>
    );
}

export default Home;