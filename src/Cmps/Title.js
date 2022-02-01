import PropTypes from 'prop-types'

const Title = ({ title }) => <h1 className='main-title'>{title}</h1>

Title.propTypes = {
    title: PropTypes.string
}

Title.defaultProps = {
    title: 'FAQ'
}

export default Title
