import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const Price = ({options}) => {
    
    const {type, price, features} = options;
    
    return (
        <div>
            <div className='bg-blue-300 rounded-lg p-5 text-center flex flex-col'>
                <h2>
                    <span className='text-7xl font-bold text-black'>{price}</span>
                    <span className='text-xl text-gray-600'>/mon</span>
                </h2>
                <h3 className='text-2xl my-5 text-gray-600 font-bold'>{type}</h3>
                <div className='text-gray-600 flex-grow mb-5'>
                 {
                    features.map((everyFeature, index) => <Feature key={index} everyFeature={everyFeature}></Feature>)
                 }

                </div>
                <button className='bg-red-300 w-full p-1 my-3 text-black font-bold rounded-xl '>Buy Now</button>
                
            </div>
        </div>
    );
};

Price.propTypes ={
    options : PropTypes.object
}

export default Price;