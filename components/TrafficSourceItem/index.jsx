import PropTypes from 'prop-types';
import tw, { css } from "twin.macro";

const TrafficItem = ({ item, sum}) => {
  const { site: name, count } = item;
  const percentage=parseInt((count/sum*100),10);

  const BarStyle = css`
  ${percentage ? `width: ${percentage}%;` : `width: 0%;`};
  ${tw`bg-blue-600`};
  }
  `
  
  return (
    <div key={name} tw="flex flex-row w-full items-center px-6 py-3">
      <div tw="flex flex-grow justify-start space-x-2 items-center">
        <p tw="text-gray-100 font-medium">{name}</p>
      </div>
      <div tw="flex flex-row space-x-3 items-center">
        <>
          <div tw="ml-2 w-24 sm:ml-10 h-4 relative sm:w-48 rounded-full overflow-hidden">
            <div tw="w-full h-full bg-gray-200 absolute" />
            <div tw="h-full bg-indigo-500 absolute" css={BarStyle} />
          </div>
          <p tw="text-sm text-gray-100 font-bold">
            {percentage}
            %
          </p>
        </>
        <p tw="text-sm text-gray-100 bg-gray-700 rounded px-2 py-1">
          {count}
          {' '}
          {count===1?"view":"views"}
        </p>
      </div>
    </div>
  )
}

const ItemShape = {
  site: PropTypes.string,
  count: PropTypes.number,
 
}

TrafficItem.propTypes = {
  item: PropTypes.shape(ItemShape).isRequired,
  sum:PropTypes.number.isRequired
}
export default TrafficItem
