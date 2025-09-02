import PropTypes from 'prop-types';
import { MdVerified } from "react-icons/md";


const Feature = ({everyFeature}) => {
    
    return (
        <div className='w-3/4 mx-auto'>
            <div className='flex items-center gap-2 '>

                <span className='text-orange-500 text-xl'><MdVerified /></span>

                <span>{everyFeature}</span>
            </div>
        </div>
    );
};

Feature.propTypes = {
    everyFeature : PropTypes.string
}

export default Feature;