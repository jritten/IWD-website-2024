import PropTypes from 'prop-types'

const GenericCard = ({ name, avatar, onOpen }) => {
  return (
    <div
      className={`relative mx-auto mb-16 w-full max-w-xs ${
        onOpen &&
        'transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer'
      }`}
      onClick={onOpen}
    >
      <div className="overflow-hidden rounded-lg bg-primary-200 shadow-2xl hover:bg-primary-300">
        <div className="absolute -mt-24 flex w-full justify-center">
          <div className="h-48 w-48">
            <img
              src={avatar}
              className="h-full w-full rounded-full object-cover shadow-md"
              alt={name}
            />
          </div>
        </div>
        <div className="mb-6 mt-28 h-16 px-2">
          <h1 className="text-center text-lg font-bold text-sky-900">
            {name}
          </h1>
          
        </div>
      </div>
    </div>
  )
}

GenericCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onOpen: PropTypes.func,
}

export default GenericCard