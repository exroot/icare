import 'twin.macro'
import { BeatLoader } from 'react-spinners'
import useTrafficSources from '../../lib/dashboard/useTrafficSources'
import TrafficItem from '../../components/TrafficSourceItem'

const TrafficSources = () => {
  const { loading, data = {} } = useTrafficSources()

  const getSum = (total, num) => total + Math.round(num)

  const sum = Object.values(data).reduce(getSum, 0)

  const arr = []

  for (const [key, value] of Object.entries(data)) {
    arr.push({ site: key, count: value })
  }

  return (
    <>
      <div tw="bg-primary-800 rounded-xl divide-y">
        <p tw="p-6 font-semibold text-white">Traffic</p>
        <div tw="flex flex-col justify-center">
          {loading && (
            <div tw="py-6 pl-6">
              <BeatLoader color="var(--color-accent)" />
            </div>
          )}

          {!arr.length && !loading && (
            <div tw="py-6">
              {' '}
              <span tw="p-6 text-sm text-primary-400 mb-4 w-full">
                Not enough data
              </span>
            </div>
          )}

          {arr.map((el) => (
            <TrafficItem key={el.name} item={el} sum={sum} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TrafficSources
