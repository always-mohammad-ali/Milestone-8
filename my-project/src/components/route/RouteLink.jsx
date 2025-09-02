import PropTypes from 'prop-types';

const RouteLink = ({route}) => {
    return (
        <div>
            <li className='mr-5 text-2xl  hover:bg-pink-300 p-3'>
            <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

RouteLink.propTypes ={
    route : PropTypes.object
}

export default RouteLink;